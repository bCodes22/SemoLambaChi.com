import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'src', 'Lambda');

// Headshots in Exec/ never render larger than a couple hundred px on screen.
// Everything else (banners, event photos) can render close to full page width.
const EXEC_MAX_DIMENSION = 500;
const DEFAULT_MAX_DIMENSION = 1600;
const JPEG_QUALITY = 80;

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(full));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimize(file) {
  const before = statSync(file).size;
  const isExec = path.dirname(file).endsWith(`${path.sep}Exec`);
  const maxDimension = isExec ? EXEC_MAX_DIMENSION : DEFAULT_MAX_DIMENSION;

  const image = sharp(file);
  const metadata = await image.metadata();

  const tmpFile = `${file}.tmp`;

  let pipeline = image.rotate(); // normalize EXIF orientation before resizing
  if ((metadata.width ?? 0) > maxDimension || (metadata.height ?? 0) > maxDimension) {
    pipeline = pipeline.resize({
      width: maxDimension,
      height: maxDimension,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  if (/\.png$/i.test(file)) {
    await pipeline.png({ quality: JPEG_QUALITY, compressionLevel: 9 }).toFile(tmpFile);
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpFile);
  }

  const after = statSync(tmpFile).size;
  renameSync(tmpFile, file);

  return { file, before, after };
}

async function main() {
  const files = walk(ROOT);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const { before, after } = await optimize(file);
    totalBefore += before;
    totalAfter += after;
    const rel = path.relative(ROOT, file);
    console.log(
      `${rel}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
    );
  }

  console.log('---');
  console.log(
    `Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`
  );
}

main();
