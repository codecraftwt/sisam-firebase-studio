import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TruckIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import ServiceCard from "../../components/ServiceCard";

const ServicesOverview = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.children,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      title: "Logistics Solutions",
      description:
        "Comprehensive end-to-end logistics services with advanced tracking, optimization algorithms, and global network coverage for seamless supply chain management.",
      icon: <TruckIcon className="w-12 h-12" />,
      href: "/services/logistics",
      features: [
        "Global transportation network",
        "Real-time cargo tracking",
        "Route optimization technology",
        "Customs clearance support",
        "Inventory management",
        "Last-mile delivery solutions",
      ],
    },
    {
      title: "Bulk Liquid Transportation",
      description:
        "Specialized bulk liquid handling services using state-of-the-art FlexiTank and ISO Tank technologies for safe, efficient chemical and liquid transport.",
      icon: <GlobeAltIcon className="w-12 h-12" />,
      href: "/services/bulk-liquid",
      features: [
        "FlexiTank container solutions",
        "ISO Tank services",
        "Chemical compatibility expertise",
        "Temperature-controlled transport",
        "Safety compliance certification",
        "Liquid waste management",
      ],
    },
    {
      title: "Agency Services",
      description:
        "Complete agency solutions including customs brokerage, documentation management, regulatory compliance, and expert consultation for international trade.",
      icon: <BuildingOfficeIcon className="w-12 h-12" />,
      href: "/services/agency",
      features: [
        "Customs clearance processing",
        "Trade documentation",
        "Regulatory compliance",
        "Import/export licenses",
        "Trade finance assistance",
        "Risk management consulting",
      ],
    },
  ];

  const capabilities = [
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Safety & Compliance",
      description:
        "ISO certified operations with stringent safety protocols and full regulatory compliance across all jurisdictions.",
    },
    {
      icon: <ChartBarIcon className="w-10 h-10" />,
      title: "Performance Analytics",
      description:
        "Advanced analytics and reporting tools provide real-time insights into your supply chain performance and optimization opportunities.",
    },
    {
      icon: <CogIcon className="w-10 h-10" />,
      title: "Custom Solutions",
      description:
        "Tailored logistics solutions designed to meet your specific industry requirements and operational constraints.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-surface">
        <div
          ref={heroRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-textMuted max-w-4xl mx-auto mb-8">
            Comprehensive logistics and transportation solutions powered by
            cutting-edge technology and decades of industry expertise.
          </p>
          <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-text leading-relaxed">
              From end-to-end logistics management to specialized bulk liquid
              transportation and complete agency services, we provide integrated
              solutions that streamline your supply chain and drive business
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Complete <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Industry-leading services designed to optimize your operations and
              reduce costs while maintaining the highest quality standards.
            </p>
          </div>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <div key={index} className="lg:col-span-1">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Why Choose <span className="text-accent">Our Services</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Advanced capabilities and proven expertise that set us apart in
              the logistics industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20">
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              A streamlined approach that ensures efficiency, transparency, and
              success at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Understanding your unique requirements and challenges",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Developing customized solutions with optimal routing",
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing services with real-time monitoring",
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous improvement and performance analysis",
              },
            ].map((process, index) => (
              <div key={index} className="relative text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300">
                  <div className="text-3xl font-heading font-bold text-accent mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {process.title}
                  </h3>
                  <p className="text-textMuted text-sm">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
