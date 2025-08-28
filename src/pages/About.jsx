import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckIcon,
  GlobeAltIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    // Timeline animation
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
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

  const milestones = [
    {
      year: "1985",
      title: "Company Foundation",
      description:
        "Sisam Group was established with a vision to revolutionize logistics in India.",
    },
    {
      year: "1995",
      title: "International Expansion",
      description:
        "Extended operations to neighboring countries, establishing our global presence.",
    },
    {
      year: "2005",
      title: "Technology Integration",
      description:
        "Pioneered digital logistics solutions and real-time tracking systems.",
    },
    {
      year: "2015",
      title: "Bulk Liquid Specialization",
      description:
        "Launched specialized bulk liquid transportation with FlexiTank technology.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Completed full digital transformation with AI-powered logistics optimization.",
    },
  ];

  const values = [
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Connecting businesses across 50+ countries with seamless logistics solutions.",
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology to optimize transportation and reduce costs.",
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Customer First",
      description:
        "Building lasting partnerships through exceptional service and reliability.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-surface">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              About <span className="text-accent">Sisam Group</span>
            </h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Three and a half decades of excellence in logistics,
              transportation, and global supply chain solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-text mb-8">
                Our <span className="text-accent">Mission</span>
              </h2>
              <p className="text-lg text-textMuted mb-6 leading-relaxed">
                To provide innovative, reliable, and cost-effective logistics
                solutions that connect businesses globally while maintaining the
                highest standards of safety and sustainability.
              </p>
              <p className="text-lg text-textMuted leading-relaxed">
                We are committed to building lasting partnerships with our
                clients by understanding their unique needs and delivering
                customized solutions that drive their success.
              </p>
            </div>
            <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8">
              <h3 className="text-3xl font-heading font-bold text-text mb-6">
                Our <span className="text-accent">Vision</span>
              </h3>
              <p className="text-lg text-textMuted leading-relaxed">
                To be the world's most trusted and innovative logistics partner,
                setting new industry standards through technology,
                sustainability, and exceptional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              The principles that guide every decision we make and every service
              we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20">
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-4 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-textMuted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              From humble beginnings to global leadership - a timeline of
              innovation and growth.
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-accent opacity-30"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-12`}
              >
                <div
                  className={`w-full max-w-md ${
                    index % 2 === 0 ? "pr-8" : "pl-8"
                  }`}
                >
                  <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl font-heading font-bold text-accent">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-textMuted">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-surface"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Why Choose <span className="text-accent">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "35+ Years of Experience",
              "500+ Expert Team Members",
              "50+ Countries Served",
              "10,000+ Happy Clients",
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300">
                  <CheckIcon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-text font-semibold">{stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
