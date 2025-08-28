import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TruckIcon,
  MapIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Logistics = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
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

  const features = [
    {
      icon: <TruckIcon className="w-10 h-10" />,
      title: "Multi-Modal Transportation",
      description:
        "Seamlessly integrated road, rail, sea, and air transportation solutions for optimal efficiency and cost-effectiveness.",
    },
    {
      icon: <MapIcon className="w-10 h-10" />,
      title: "Real-Time Tracking",
      description:
        "Advanced GPS tracking and IoT sensors provide real-time visibility into your shipments' location and condition.",
    },
    {
      icon: <ClockIcon className="w-10 h-10" />,
      title: "Time-Definite Delivery",
      description:
        "Guaranteed delivery windows with proactive communication and contingency planning for schedule adherence.",
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Cargo Protection",
      description:
        "Comprehensive insurance coverage and secure handling protocols ensure your goods arrive safely and intact.",
    },
    {
      icon: <GlobeAltIcon className="w-10 h-10" />,
      title: "Global Network",
      description:
        "Extensive partner network across 50+ countries enabling seamless international shipping and customs clearance.",
    },
    {
      icon: <ChartBarIcon className="w-10 h-10" />,
      title: "Analytics & Reporting",
      description:
        "Detailed performance metrics and customizable reports help optimize your supply chain and reduce costs.",
    },
  ];

  const services = [
    {
      title: "Freight Forwarding",
      description:
        "Complete freight forwarding services including documentation, customs clearance, and door-to-door delivery.",
      features: [
        "Air & Sea Freight",
        "Customs Clearance",
        "Documentation",
        "Insurance",
      ],
    },
    {
      title: "Warehousing & Distribution",
      description:
        "Modern warehouse facilities with advanced inventory management and distribution capabilities.",
      features: [
        "Climate-Controlled Storage",
        "Inventory Management",
        "Pick & Pack",
        "Distribution",
      ],
    },
    {
      title: "Supply Chain Consulting",
      description:
        "Expert consultation to optimize your supply chain, reduce costs, and improve operational efficiency.",
      features: [
        "Process Optimization",
        "Cost Analysis",
        "Risk Assessment",
        "Technology Integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-surface">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent mb-6 flex justify-center">
              <TruckIcon className="w-16 h-16" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Logistics <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-textMuted max-w-4xl mx-auto mb-8">
              End-to-end logistics services that streamline your supply chain,
              reduce costs, and ensure timely delivery across our global network
              of trusted partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-textMuted">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.5%</div>
              <div className="text-textMuted">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-textMuted">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Logistics <span className="text-accent">Capabilities</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Comprehensive logistics solutions powered by advanced technology
              and decades of industry expertise.
            </p>
          </div>

          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20 h-full">
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-textMuted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Specialized <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Tailored logistics solutions designed to meet your specific
              industry requirements and operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-text mb-4">
                  {service.title}
                </h3>
                <p className="text-textMuted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-textMuted"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              A systematic approach that ensures efficiency, transparency, and
              successful delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understand requirements and constraints",
              },
              {
                step: "02",
                title: "Planning",
                description: "Design optimal route and timeline",
              },
              {
                step: "03",
                title: "Pickup",
                description: "Secure collection from origin point",
              },
              {
                step: "04",
                title: "Transit",
                description: "Real-time monitoring during transport",
              },
              {
                step: "05",
                title: "Delivery",
                description: "Safe delivery to final destination",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 mb-4">
                  <div className="text-2xl font-heading font-bold text-accent mb-3">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {process.title}
                  </h3>
                  <p className="text-textMuted text-sm">
                    {process.description}
                  </p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block w-full h-0.5 bg-accent opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            Ready to Optimize Your{" "}
            <span className="text-accent">Logistics?</span>
          </h2>
          <p className="text-xl text-textMuted mb-8 max-w-2xl mx-auto">
            Contact our logistics experts today for a customized solution that
            fits your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
            >
              Get Quote Now
            </Link>
            <Link
              to="/services"
              className="border border-accent px-8 py-4 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
