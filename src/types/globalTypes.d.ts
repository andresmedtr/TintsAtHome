import { ReactNode } from "react";

export interface ModelViewerProps {
  src: string;
  alt?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
  className: string;
}

export interface SwitchContextType {
  isActive: boolean;
  toggle: () => void;
}

export interface TintLevelProps {
  name: string;
  description: string;
  tone: string;
  opacity: number;
}

export interface PPFContextType {
  color: [number, number, number, number]; // RGBA
  setColor: (color: [number, number, number, number]) => void;
}

export interface CardProps {
  img?: string;
  classes?: string;
  children?: ReactNode;
  title?: string;
  price?: string;
  subtitle?: string;
  features?: string[];
  iconList?: { icon: JSX.Element; text: string }[];
}

export interface HeroSectionProps {
  titleId: string;
  buttonId: string;
  modelSrc: string;
  tintName?: string;
  children?: React.ReactNode;
}

export interface ImagesProps {
  source: string;
  width: number;
  height: number;
  name?: string;
  role?: string;
}

export interface AchievementProps {
  end: number;
  label: string;
  delay: number;
}
export interface QuoteFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tintingService: string;
  detailingService: string;
  message: string;
}

export type ContactInfoItems = {
  text: string;
  type: SocialMediaType;
};

export interface InputFieldConfig {
  id: keyof QuoteFormValues;
  label: string;
  multiline?: boolean;
  type?: string;
  options?: { value: string; labelId: string }[];
}

export interface TintContextType {
  opacity: number;
  setOpacity: (value: number) => void;
  tintName: string;
  setTintName: (value: string) => void;
  tintDescription: string;
  setTintDescription: (value: string) => void;
}

export interface Material {
  name: string;
  pbrMetallicRoughness: {
    setBaseColorFactor: (color: [number, number, number, number]) => void;
  };
}

export interface Model {
  materials: Material[];
}

export interface ModelViewerElement extends HTMLElement {
  model?: Model;
}

export interface CustomButtonProps {
  id?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  classes: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface FooterItem {
  text: string;
  target?: string;
}

export interface FooterType {
  title: string;
  items?: FooterItem[];
}

export interface SocialMediaItem {
  icon: ReactElement;
  target: string;
}

export interface SocialMediaMap {
  whatsapp: SocialMediaItem;
  phone: SocialMediaItem;
  instagram: SocialMediaItem;
  email: SocialMediaItem;
}

export type SocialMediaType =
  | "whatsapp"
  | "phone"
  | "instagram"
  | "email"
  | "location";

export interface TintProps {
  children: (props: {
    name: string;
    description: string;
    tone: string;
  }) => ReactNode;
}

export interface LegalTermsProps {
  title: string;
  description: string;
}

export interface CarWashContent {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ServiceBenefit {
  icon: React.ReactNode;
  text: string;
}

export interface Service {
  service: string;
  title: string;
  image: string;
  benefits: ServiceBenefit[];
  threeDModel?: string;
}
