import {
  InputFieldConfig,
  TintLevelProps,
  AchievementProps,
  ContactInfoItems,
  ImagesProps,
  FooterType,
  SocialMediaType,
  LegalTermsProps,
  CarWashContent,
  Service,
  ServiceBenefit,
} from "./types/globalTypes";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import PaidIcon from "@mui/icons-material/Paid";
import FlareIcon from "@mui/icons-material/Flare";

export const NavbarFields: string[] = [
  "navbar.title.home",
  "navbar.title.services",
  "navbar.title.about",
  "navbar.title.Contact",
];

export const TintLevel: TintLevelProps[] = [
  {
    name: "block.model3d.square.accordion.option.1.name",
    description: "block.model3d.square.accordion.option.1.description",
    tone: "#FFFFFF",
    opacity: 0.1,
  },
  {
    name: "block.model3d.square.accordion.option.2.name",
    description: "block.model3d.square.accordion.option.2.description",
    tone: "#D9D9D9",
    opacity: 0.25,
  },
  {
    name: "block.model3d.square.accordion.option.3.name",
    description: "block.model3d.square.accordion.option.3.description",
    tone: "#A6A6A6",
    opacity: 0.45,
  },
  {
    name: "block.model3d.square.accordion.option.4.name",
    description: "block.model3d.square.accordion.option.4.description",
    tone: "#707070",
    opacity: 0.65,
  },
  {
    name: "block.model3d.square.accordion.option.5.name",
    description: "block.model3d.square.accordion.option.5.description",
    tone: "#404040",
    opacity: 0.8,
  },
  {
    name: "block.model3d.square.accordion.option.6.name",
    description: "block.model3d.square.accordion.option.6.description",
    tone: "#1A1A1A",
    opacity: 1,
  },
];

// About us
export const achievementStats: AchievementProps[] = [
  {
    end: 1200,
    label: "companyAchievements.description.1",
    delay: 800,
  },
  {
    end: 500,
    label: "companyAchievements.description.2",
    delay: 800,
  },
  {
    end: 9,
    label: "companyAchievements.description.3",
    delay: 400,
  },
];

export const foundersPictures: ImagesProps[] = [
  {
    source: "/founders/andy.webp",
    width: 200,
    height: 250,
    name: "Andy Romero",
    role: "block.aboutUs.founders.role.andy",
  },
  {
    source: "/founders/giovanny.webp",
    width: 200,
    height: 250,
    name: "Giovanny Rubio",
    role: "block.aboutUs.founders.role.gio",
  },
];

// Contact us

export const tintingServiceOptions = [
  { value: "Automotive Tinting", labelId: "quoteForm.service.automotive" },
  { value: "Residential Tinting", labelId: "quoteForm.service.residential" },
  { value: "Commercial Tinting", labelId: "quoteForm.service.commercial" },
];

export const detailingServiceOptions = [
  {
    value: "quoteForm.fields.detailingServiceType.option.1",
    labelId: "quoteForm.fields.detailingServiceType.option.1",
  },
  {
    value: "Express Clean",
    labelId: "block.carwash.card.title.1",
  },
  {
    value: "Pro Shine",
    labelId: "block.carwash.card.title.2",
  },
  {
    value: "Elite Detailing",
    labelId: "block.carwash.card.title.3",
  },
];

export const inputFields: InputFieldConfig[] = [
  { id: "firstName", label: "quoteForm.fields.name" },
  { id: "lastName", label: "quoteForm.fields.lastName" },
  { id: "email", label: "quoteForm.fields.email", type: "email" },
  { id: "phone", label: "quoteForm.fields.phone", type: "tel" },
  {
    id: "tintingService",
    label: "quoteForm.fields.tintingServiceType",
    options: tintingServiceOptions,
  },
  {
    id: "detailingService",
    label: "quoteForm.fields.detailingServiceType",
    options: detailingServiceOptions,
  },
  { id: "message", label: "quoteForm.fields.message", multiline: true },
];

export const contactInfo: ContactInfoItems[] = [
  {
    text: "(305) 240-9065",
    type: "whatsapp",
  },
  {
    text: "(954) 676-4480",
    type: "phone",
  },
  {
    text: "tintsathome.miami@gmail.com",
    type: "email",
  },
  {
    text: "tintsathomefl",
    type: "instagram",
  },
  { text: "7301 NW 34th St, Miami, FL 33122", type: "location" },
];

export const businessHours: string[] = [
  "block.contactUs.contactInfo.subtitle.schedule.1",
  "block.contactUs.contactInfo.subtitle.schedule.2",
];

export const footerInfo: FooterType[] = [
  {
    title: "footer.title.1",
    items: [
      { text: "footer.title.1.description.1" },
      { text: "footer.title.1.description.2" },
      { text: "footer.title.1.description.3" },
      { text: "footer.title.1.description.4" },
    ],
  },
  {
    title: "footer.title.2",
    items: [
      { text: "footer.title.2.description.1", target: "/terms-conditions" },
      { text: "footer.title.2.description.2", target: "/refund-policy" },
      { text: "footer.title.2.description.3", target: "/terms-conditions" },
    ],
  },
  {
    title: "footer.title.3",
    items: [
      {
        text: "footer.title.3.description.1",
        target: "https://wa.me/3052409065",
      },
      {
        text: "footer.title.3.description.2",
        target: "https://www.instagram.com/tintsathomefl/",
      },
      {
        text: "footer.title.3.description.3",
        target: "https://www.instagram.com/tintsathomefl/",
      },
    ],
  },
];

export const socialMedia: SocialMediaType[] = [
  "whatsapp",
  "phone",
  "instagram",
  "email",
];

export const legalTerms: LegalTermsProps[] = [
  { title: "legal.1.title", description: "legal.1.description" },
  { title: "legal.2.title", description: "legal.2.description" },
  { title: "legal.3.title", description: "legal.3.description" },
  { title: "legal.4.title", description: "legal.4.description" },
  { title: "legal.5.title", description: "legal.5.description" },
  { title: "legal.6.title", description: "legal.6.description" },
  { title: "legal.7.title", description: "legal.7.description" },
  { title: "legal.8.title", description: "legal.8.description" },
  { title: "legal.9.title", description: "legal.9.description" },
  { title: "legal.10.title", description: "legal.10.description" },
  { title: "legal.11.title", description: "legal.11.description" },
  { title: "legal.12.title", description: "legal.12.description" },
];

export const refundTerms: LegalTermsProps[] = [
  { title: "refund.1.title", description: "refund.1.description" },
  { title: "refund.2.title", description: "refund.2.description" },
  { title: "refund.3.title", description: "refund.3.description" },
  { title: "refund.4.title", description: "refund.4.description" },
  { title: "refund.5.title", description: "refund.5.description" },
];

// Services block

export const ppfColors: [number, number, number, number][] = [
  [17 / 255, 17 / 255, 17 / 255, 1], // #111111
  [1, 1, 1, 1], // #FFFFFF
  [51 / 255, 51 / 255, 51 / 255, 1], // #333333
  [229 / 255, 35 / 255, 35 / 255, 1], // #E52323
  [179 / 255, 0, 0, 1], // #B30000
  [242 / 255, 242 / 255, 242 / 255, 1], // #F2F2F2
  [255 / 255, 215 / 255, 0, 1], // #FFD700
  [255 / 255, 165 / 255, 0, 1], // #FFA500
  [255 / 255, 69 / 255, 0, 1], // #FF4500
  [139 / 255, 0, 0, 1], // #8B0000
  [128 / 255, 0, 128 / 255, 1], // #800080
  [75 / 255, 0, 130 / 255, 1], // #4B0082
  [0, 0, 1, 1], // #0000FF
  [30 / 255, 144 / 255, 255 / 255, 1], // #1E90FF
  [0, 206 / 255, 209 / 255, 1], // #00CED1
  [0, 128 / 255, 128 / 255, 1], // #008080
  [0, 100 / 255, 0, 1], // #006400
  [34 / 255, 139 / 255, 34 / 255, 1], // #228B22
  [50 / 255, 205 / 255, 50 / 255, 1], // #32CD32
  [173 / 255, 255 / 255, 47 / 255, 1], // #ADFF2F
  [128 / 255, 128 / 255, 0, 1], // #808000
  [160 / 255, 82 / 255, 45 / 255, 1], // #A0522D
  [210 / 255, 105 / 255, 30 / 255, 1], // #D2691E
  [244 / 255, 164 / 255, 96 / 255, 1], // #F4A460
  [192 / 255, 192 / 255, 192 / 255, 1], // #C0C0C0
  [169 / 255, 169 / 255, 169 / 255, 1], // #A9A9A9
  [112 / 255, 128 / 255, 144 / 255, 1], // #708090
  [47 / 255, 79 / 255, 79 / 255, 1], // #2F4F4F
  [255 / 255, 105 / 255, 180 / 255, 1], // #FF69B4
  [255 / 255, 20 / 255, 147 / 255, 1], // #FF1493
];

// { icon: <SecurityIcon sx={{ color: "#E52323" }} />, id: "block.services.benefit.uvProtection" },
// { icon: <ThermostatIcon sx={{ color: "#E52323" }} />, id: "block.services.benefit.cool" },
// { icon: <AutoAwesomeIcon sx={{ color: "#E52323" }} />, id: "block.services.benefit.privacy" },
// { icon: <CheckCircleIcon sx={{ color: "#E52323" }} />, id: "block.services.benefit.warranty" },

export const ceramicCoatingBenefits: ServiceBenefit[] = [
  {
    icon: <SecurityIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.ceramic.title.1", //Superior Protection
    description: "block.services.card.benefit.ceramic.description.1",
  },
  {
    icon: <ThermostatIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.ceramic.title.2", //UV Ray Defense
    description: "block.services.card.benefit.ceramic.description.2",
  },
  {
    icon: <AutoAwesomeIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.ceramic.title.3", //Mirror-Like Gloss
    description: "block.services.card.benefit.ceramic.description.3",
  },
  {
    icon: <CheckCircleIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.ceramic.title.4", //Long-Lasting Durability
    description: "block.services.card.benefit.ceramic.description.4",
  },
];

export const carBenefits: ServiceBenefit[] = [
  {
    icon: <SecurityIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.car.title.1", // UV Protection
    description: "block.services.card.benefit.car.description.1",
  },
  {
    icon: <ThermostatIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.car.title.2", // Heat Rejection
    description: "block.services.card.benefit.car.description.2",
  },
  {
    icon: <AutoAwesomeIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.car.title.3", // Privacy & Style
    description: "block.services.card.benefit.car.description.3",
  },
  {
    icon: <CheckCircleIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.car.title.4", // Comfort & Glare Reduction
    description: "block.services.card.benefit.car.description.4",
  },
];

export const houseBenefits: ServiceBenefit[] = [
  {
    icon: <TrendingDownIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.house.title.1", // Energy Efficiency
    description: "block.services.card.benefit.house.description.1",
  },
  {
    icon: <AutoAwesomeIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.house.title.2", // Natural Light Balance
    description: "block.services.card.benefit.house.description.2",
  },
  {
    icon: <ThermostatIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.house.title.3", // Climate Control
    description: "block.services.card.benefit.house.description.3",
  },
  {
    icon: <CheckCircleIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.house.title.4", // Protect Interior Furnishings
    description: "block.services.card.benefit.house.description.4",
  },
];
export const commercialBenefits: ServiceBenefit[] = [
  {
    icon: <TrendingDownIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.commercial.title.1", // Energy Savings
    description: "block.services.card.benefit.commercial.description.1",
  },
  {
    icon: <ThermostatIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.commercial.title.2", // Comfort & Productivity
    description: "block.services.card.benefit.commercial.description.2",
  },
  {
    icon: <CheckCircleIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.commercial.title.3", // Interior Protection
    description: "block.services.card.benefit.commercial.description.3",
  },
  {
    icon: <AutoAwesomeIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.commercial.title.4", // Professional Appearance
    description: "block.services.card.benefit.commercial.description.4",
  },
];
export const ppfBenefits: ServiceBenefit[] = [
  {
    icon: <SecurityIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.ppf.title.1", // Scratch Resistance
    description: "block.services.card.benefit.ppf.description.1",
  },
  {
    icon: <AutoAwesomeIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.ppf.title.2", // Enhanced Gloss
    description: "block.services.card.benefit.ppf.description.2",
  },
  {
    icon: <FlareIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.ppf.title.3", // Self-Healing Surface
    description: "block.services.card.benefit.ppf.description.3",
  },
  {
    icon: <PaidIcon sx={{ color: "#E52323" }} />,
    title: "block.services.card.benefit.ppf.title.4", // Preserve Vehicle Value
    description: "block.services.card.benefit.ppf.description.4",
  },
];

export const servicesArray: Service[] = [
  {
    service: "ceramic-coating",
    title: "block.services.card.title.ceramic.1",
    description: "block.services.description.ceramic.1",
    subtitle: "block.services.card.subtitle.ceramic.1",
    image: "/services/ceramicCoating.webp",
    benefits: ceramicCoatingBenefits,
    media: "/services/ceramicCoating.webm",
  },
  {
    service: "automotive-tinting",
    title: "block.services.card.title.car.1",
    image: "/services/tinting.webp",
    benefits: carBenefits,
    threeDModel:
      "https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/g_wagon-Lng1Z2L9WuWNGZXVDsKZhcHQUlFf0o.glb",
  },
  {
    service: "paint-protection-film",
    title: "block.services.card.title.ppf.1",
    image: "/services/ppf.webp",
    benefits: ppfBenefits,
    threeDModel:
      "https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/car/g_wagon_ppf.glb",
  },
  {
    service: "residential-tinting",
    title: "block.services.card.title.house.1",
    image: "/services/servicesHouse.webp",
    benefits: houseBenefits,
    threeDModel:
      "https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/house/house-GP4Zwy8YteIEFs1sAcyredbr91cvN9.glb",
  },
  {
    service: "commercial-tinting",
    title: "block.services.card.title.commercial.1",
    image: "/services/commercial.png",
    benefits: commercialBenefits,
    threeDModel:
      "https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/commercial/commercialRed.glb",
  },
];

export const carWashServices: CarWashContent[] = [
  {
    title: "block.carwash.card.title.1",
    description: "block.carwash.card.description.1",
    icon: <ShieldOutlinedIcon fontSize="large" className=" text-[#E52323]" />,
  },
  {
    title: "block.carwash.card.title.2",
    description: "block.carwash.card.description.2",
    icon: <SecurityOutlinedIcon fontSize="large" className="text-[#E52323]" />,
  },
  {
    title: "block.carwash.card.title.3",
    description: "block.carwash.card.description.3",
    icon: <DiamondOutlinedIcon fontSize="large" className="text-[#E52323]" />,
  },
];

export const carWashIncludes: Service = {
  service: "carwash",
  title: "block.carwash.title.2",
  subtitle: "block.carwash.subtitle",
  description: "block.carwash.description",
  image: "/services/commercial.png",
  benefits: carWashServices,
  media: "/services/carwash.webm",
};

// End Services block
