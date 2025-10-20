import ServiceDetails from "@/components/serviceDetails/conditionalServiceRender/page";
import { ContactUs } from "@/blocks/contactUs";
import { FloatingButton } from "@/components/floatingButton";
import { servicesArray, carWashIncludes } from "@/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service =
    slug === "carwash"
      ? carWashIncludes
      : servicesArray.find((s) => s.service === slug);

  if (!service) {
    return <p className="p-6 text-red-600">Service not found</p>;
  }

  return (
    <>
      <FloatingButton />
      <ServiceDetails />
      <ContactUs />
    </>
  );
}
