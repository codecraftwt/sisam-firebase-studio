import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TruckIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Counter from "../components/Counter.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ScrollSection from "../components/subcomponents/animated/LogisticsScrollSection.jsx";

const Home = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const servicesRef = useRef(null);
  const countersRef = useRef(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current && headlineRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      // Typewriter effect for headline
      gsap.fromTo(
        headlineRef.current,
        { width: 0 },
        { width: "100%", duration: 2, ease: "power2.out", delay: 0.5 }
      );
    }

    // Services section animation
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
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Counters animation
    if (countersRef.current) {
      gsap.fromTo(
        countersRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: countersRef.current,
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
        "End-to-end logistics services with real-time tracking and optimization for maximum efficiency.",
      icon: <TruckIcon className="w-12 h-12" />,
      href: "/services/logistics",
      features: ["Global Network", "Real-time Tracking", "Cost Optimization", "24/7 Support"],
    },
    {
      title: "Bulk Liquid Transportation",
      description:
        "Specialized bulk liquid handling with FlexiTank and ISO Tank solutions for safe transport.",
      icon: <GlobeAltIcon className="w-12 h-12" />,
      href: "/services/bulk-liquid",
      features: [
        "FlexiTank Solutions",
        "ISO Tank Services",
        "Chemical Compatibility",
        "Safety Certified",
      ],
    },
    {
      title: "Agency Services",
      description:
        "Comprehensive agency services including customs clearance, documentation, and compliance management.",
      icon: <BuildingOfficeIcon className="w-12 h-12" />,
      href: "/services/agency",
      features: ["Customs Clearance", "Documentation", "Compliance", "Expert Consultation"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primaryLight to-surface opacity-90"></div>
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="overflow-hidden mb-6">
            <h1
              ref={headlineRef}
              className="text-5xl md:text-7xl font-heading font-bold text-text whitespace-nowrap"
              style={{ width: 0 }}
            >
              We Deliver Excellence
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-textMuted mb-8 max-w-2xl mx-auto leading-relaxed">
            Leading global logistics and transportation solutions since 1985, connecting businesses
            worldwide with innovative technology and unparalleled service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
            >
              Explore Services
            </Link>
            <Link
              to="/contact-us"
              className="border border-accent px-8 py-4 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-70"></div>
        <div
          className="absolute bottom-32 right-16 w-6 h-6 bg-accent rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-8 w-3 h-3 bg-accent rounded-full animate-float opacity-60"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>

      <ScrollSection />

      {/* Services Section */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your business needs with
              cutting-edge technology and global reach.
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Impact</span>
            </h2>
            <p className="text-xl text-textMuted">
              Numbers that reflect our commitment to excellence and global reach.
            </p>
          </div>

          <div ref={countersRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter end={500} label="Dedicated Employees" suffix="+" />
            <Counter end={50} label="Countries Served" suffix="+" />
            <Counter end={10000} label="Satisfied Clients" suffix="+" />
            <Counter end={1000000} label="Tons Transported" suffix="+" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Why Choose <span className="text-accent">Sisam Group</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Three decades of excellence, innovation, and trusted partnerships in global logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChartBarIcon className="w-12 h-12" />,
                title: "Industry Leadership",
                description:
                  "35+ years of expertise and innovation in logistics and transportation solutions.",
              },
              {
                icon: <ShieldCheckIcon className="w-12 h-12" />,
                title: "Safety & Compliance",
                description:
                  "Highest safety standards and full regulatory compliance across all operations.",
              },
              {
                icon: <UsersIcon className="w-12 h-12" />,
                title: "Customer Focus",
                description:
                  "Dedicated support team and customized solutions for every client's unique needs.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-4">{item.title}</h3>
                <p className="text-textMuted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            Ready to <span className="text-accent">Get Started?</span>
          </h2>
          <p className="text-xl text-textMuted mb-8">
            Contact our experts today for a customized logistics solution tailored to your business
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
            >
              Contact Us Now
            </Link>
            <Link
              to="/about-us"
              className="border border-accent px-8 py-4 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
