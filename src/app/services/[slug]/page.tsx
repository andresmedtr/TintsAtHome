import ServiceDetailClient from "@/components/serviceDetails";
import { servicesArray } from "@/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = servicesArray.find((s) => s.service === slug);

  if (!service) {
    return <p className="p-6 text-red-600">Service not found</p>;
  }

  return <ServiceDetailClient service={service} />;
}
