import PresidentImage from './President.jpg';
import InternalVPImage from './Internal_VP.jpg';
import ExternalVPImage from './External_VP.jpg';
import RecruitmentChairImage from './Recruitment_Chair.jpg';
import RitualistImage from './Ritualist.jpg';
import AcademicAffairsImage from './Academic_Affairs.jpg';
import SocialRelationsImage from './Social_Relaitions.jpg';
import SecretaryImage from './Secretary.jpeg';
import TreasurerImage from './Treasurer.jpeg';
import RiskManagementImage from './Risk_Management.jpeg';
import EducatorImage from './Educator.jpeg';

export interface ExecMember {
  name: string;
  position: string;
  image: string;
}

export const executiveBoard: ExecMember[] = [
  {
    name: '',
    position: 'President',
    image: PresidentImage,
  },
  {
    name: '',
    position: 'VP of Internal Affairs',
    image: InternalVPImage,
  },
  {
    name: '',
    position: 'VP of External Affairs',
    image: ExternalVPImage,
  },
  {
    name: '',
    position: 'Secretary',
    image: SecretaryImage,
  },
  {
    name: '',
    position: 'Treasurer',
    image: TreasurerImage,
  },
  {
    name: '',
    position: 'Risk Management',
    image: RiskManagementImage,
  },
  {
    name: '',
    position: 'Recruitment Chair',
    image: RecruitmentChairImage,
  },
  {
    name: '',
    position: 'Educator',
    image: EducatorImage,
  },
  {
    name: '',
    position: 'Ritualist',
    image: RitualistImage,
  },
  {
    name: '',
    position: 'Academic Affairs',
    image: AcademicAffairsImage,
  },
  {
    name: '',
    position: 'Alumni Relations',
    image: '',
  },
  {
    name: '',
    position: 'Social Relations',
    image: SocialRelationsImage,
  },
];
