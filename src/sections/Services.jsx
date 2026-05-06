import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Services = () => {
  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(5vh + ${index * 4}rem)`,
                  marginBottom: `${(servicesData.length - index - 1) * 3}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col w-full gap-4">
              <h2 className="text-3xl lg:text-5xl font-syne uppercase tracking-tight">{service.title}</h2>
              <p className="max-w-3xl text-base lg:text-lg text-white/50 font-outfit leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col mt-2">
                {service.items.map((item, itemIndex) => (
                  <div 
                    key={`item-${index}-${itemIndex}`}
                    className="group/item py-3 border-t border-white/10 transition-all duration-500 hover:bg-white/5 hover:px-4 cursor-default"
                  >
                    <h3 className="flex items-baseline text-xl lg:text-2xl transition-colors duration-500 group-hover/item:text-gold font-outfit">
                      <span className="mr-6 text-xs font-light text-white/20 font-syne group-hover/item:text-gold/50">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    <p className="ml-10 mt-1 text-xs lg:text-sm text-white/30 group-hover/item:text-white/60 transition-colors duration-500 max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
