import {
  Email,
  Instagram,
  Phone,
  WhatsApp,
  LocationOn,
} from "@mui/icons-material";
import { SocialMediaType, SocialMediaItem } from "@/types/globalTypes";

export const getSocialMediaMap = (): Record<
  SocialMediaType,
  SocialMediaItem
> => ({
  whatsapp: {
    icon: <WhatsApp />,
    target: "https://wa.me/3052409065",
  },
  phone: {
    icon: <Phone />,
    target: "+1(954)676-4480",
  },
  instagram: {
    icon: <Instagram />,
    target: "https://www.instagram.com/tintsathome_fl/",
  },
  email: {
    icon: <Email />,
    target: "tintsathome.miami@gmail.com",
  },
  location: {
    icon: <LocationOn />,
    target:
      "https://www.google.com/maps/dir//Tints+At+Home,+2051+NW+112th+Ave+STE+119,+Miami,+FL+33172/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x899e05b538874f29:0xe835e955c0fccc8d?sa=X&ved=1t:57443&ictx=111",
  },
});
