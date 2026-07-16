import PresidentImage from './President.jpg';
import InternalVPImage from './Internal_VP.jpg';
import ExternalVPImage from './External_VP.jpg';
import RushChairImage from './Rush_Chair.jpg';
import RitualistImage from './Ritualist.jpg';
import AcademicAffairsImage from './Academic_Affairs.jpg';
import SocialRelationsImage from './Social_Relations.jpg';
import SecretaryImage from './Secretary.jpg';
import TreasurerImage from './Treasurer.jpg';
import RiskManagementImage from './Risk_Management.jpg';
import EducatorImage from './Educator.jpg';
import AlumniRelationsImage from './Alumni_Relations.jpg';

export interface ExecMember {
  name: string;
  position: string;
  image: string;
}

export const executiveBoard: ExecMember[] = [
  {
    name: 'Grant Hoffman',
    position: 'President',
    image: PresidentImage,
  },
  {
    name: 'Zavior Mize',
    position: 'VP of Internal Affairs',
    image: InternalVPImage,
  },
  {
    name: 'Zachary Renfroe',
    position: 'VP of External Affairs',
    image: ExternalVPImage,
  },
  {
    name: '',
    position: 'Secretary',
    image: SecretaryImage,
  },
  {
    name: 'Lucas Lenear',
    position: 'Treasurer',
    image: TreasurerImage,
  },
  {
    name: 'Evan Hoffman',
    position: 'Risk Management',
    image: RiskManagementImage,
  },
  {
    name: 'Jacob Leonard',
    position: 'Recruitment Chair',
    image: RushChairImage,
  },
  {
    name: 'Tyler Harris',
    position: 'Educator',
    image: EducatorImage,
  },
  {
    name: 'James Antoni',
    position: 'Ritualist',
    image: RitualistImage,
  },
  {
    name: 'Mateo Albers',
    position: 'Academic Affairs',
    image: AcademicAffairsImage,
  },
  {
    name: 'Cullen Humes',
    position: 'Alumni Relations',
    image: AlumniRelationsImage,
  },
  {
    name: 'Andrew Keane',
    position: 'Social Relations',
    image: SocialRelationsImage,
  },
];
