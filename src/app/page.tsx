import { ContactUs } from "@/blocks/contactUs";
import { Model3D } from "@/blocks/hero";
import { AboutUs } from "@/blocks/aboutUs";
import { Services } from "@/blocks/services";
import { FloatingButton } from "@/components/floatingButton";
// import { CarWash } from "@/blocks/carWash";

export default function Home() {
  return (
    <main>
      <Model3D />
      <FloatingButton />
      <Services />
      {/* <CarWash /> */}
      <AboutUs />
      <ContactUs />
    </main>
  );
}
