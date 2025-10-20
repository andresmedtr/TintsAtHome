import { FormattedMessage } from "react-intl";
import { Service } from "@/types/globalTypes";
import { Card } from "@/components/card";
import { CustomButton } from "@/components/customButton";
import { scrollToView } from "@/utils/scrollToView";

export const ServiceBenefits = ({ service }: { service: Service }) => {
  return (
    <main>
      <section>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-balance ">
            <FormattedMessage id={service.title} />
          </h1>
          <p className="text-lg font-semibold text-[#E52323] pb-4">
            <FormattedMessage id={service.subtitle} />
          </p>
          <p className="text-gray-500 text-sm lg:text-lg max-w-2xl mx-auto leading-relaxed">
            <FormattedMessage id={service.description} />
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 lg:text-start text-center">
                <span className="text-foreground">Key </span>
                <span className="text-red-500">Benefits</span>
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    classes="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10">
                    <div className="relative p-6 space-y-3">
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative bg-red-500/10 p-3 rounded-lg text-red-500 group-hover:scale-110 transition-transform duration-300">
                            {benefit.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-red-500 transition-colors duration-300">
                            <FormattedMessage id={benefit.title} />
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-[4.5rem]">
                        <FormattedMessage id={benefit.description} />
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="flex flex-col m-auto gap-6">
              <div className="relative bg-gradient-to-br from-muted/8 0 to-muted m-auto rounded-xl">
                <>
                  <video
                    src={service.media || "/placeholder.webm"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover rounded"></video>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/70" />
                  <div className="absolute bottom-6 left-6 right-6 bg-gray-300 rounded-xl">
                    <p className="text-sm  text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-xl">
                      Professional <FormattedMessage id={service.title} />{" "}
                      Service
                    </p>
                  </div>
                </>
              </div>
              <div className="w-full flex justify-center mt-6">
                <CustomButton
                  classes="w-full"
                  id="block.model3d.square.button"
                  onClick={() => scrollToView("#contact")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
