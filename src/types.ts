export interface Brother {
  id: number;
  name: string;
  position?: string;
  imageUrl: string;
  bio: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  location: string;
  imageUrl?: string;
}

export interface NewsPost {
  id: number;
  title: string;
  date: string;
  content: string;
  author: string;
  imageUrl?: string;
}