import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-32 overflow-hidden font-light leading-none text-center mb-42 contact-text-responsive font-syne uppercase tracking-tighter">
      <div id="title-service-1" className="opacity-80">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-6 translate-x-16"
      >
        <p className="font-bold text-gold">Development</p>
        <div className="w-12 h-1 md:w-40 bg-black/20" />
        <p className="opacity-60">Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-6 -translate-x-48"
      >
        <p className="opacity-60">APIs</p>
        <div className="w-12 h-1 md:w-32 bg-gold" />
        <p className="italic font-bold">Frontends</p>
        <div className="w-12 h-1 md:w-32 bg-gold" />
        <p className="opacity-60 text-pretty">Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-48 opacity-80">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
