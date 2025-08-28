import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BuildingOfficeIcon, DocumentTextIcon, ShieldCheckIcon, GlobeAltIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Agency: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: <DocumentTextIcon className="w-10 h-10" />,
      title: "Customs Clearance",
      description: "Expert customs brokerage services ensuring fast clearance and compliance with all regulations.",
      features: [
        "Import/Export documentation",
        "Duty and tax calculation", 
        "Regulatory compliance",
        "Expedited processing"
      ]
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Compliance Management",
      description: "Comprehensive regulatory compliance solutions to navigate complex international trade requirements.",
      features: [
        "Trade regulation analysis",
        "License management",
        "Risk assessment",
        "Audit support"
      ]
    },
    {
      icon: <ChartBarIcon className="w-10 h-10" />,
      title: "Trade Finance",
      description: "Financial solutions and consulting for international trade operations and risk mitigation.",
      features: [
        "Letters of credit",
        "Trade insurance",
        "Currency hedging",
        "Payment solutions"
      ]
    },
    {
      icon: <UserGroupIcon className="w-10 h-10" />,
      title: "Consulting Services",
      description: "Expert consulting on trade strategies, market entry, and supply chain optimization.",
      features: [
        "Market analysis",
        "Supply chain design",
        "Cost optimization",
        "Strategic planning"
      ]
    }
  ];

  const expertise = [
    {
      area: "Customs & Trade",
      description: "Deep expertise in customs procedures, tariff classifications, and trade regulations across multiple jurisdictions.",
      capabilities: [
        "HS code classification",
        "Origin certification", 
        "Preferential trade agreements",
        "Customs valuation"
      ]
    },
    {
      area: "Documentation",
      description: "Complete documentation services ensuring accuracy and compliance with international standards.",
      capabilities: [
        "Commercial invoices",
        "Bills of lading",
        "Certificates of origin",
        "Packing lists"
      ]
    },
    {
      area: "Regulatory Affairs",
      description: "Navigate complex regulatory landscapes with expert knowledge of international trade laws.",
      capabilities: [
        "Import/export licenses",
        "Product registrations",
        "Safety certifications",
        "Environmental permits"
      ]
    }
  ];

  const benefits = [
    "Reduce clearance times by up to 70%",
    "Minimize compliance risks",
    "Expert knowledge of local regulations",
    "24/7 support for urgent shipments",
    "Cost optimization through duty planning",
    "Comprehensive documentation management"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-surface">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent mb-6 flex justify-center">
              <BuildingOfficeIcon className="w-16 h-16" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Agency <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-textMuted max-w-4xl mx-auto mb-8">
              Comprehensive trade agency services including customs clearance, compliance management, 
              and expert consultation for seamless international business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-textMuted">Countries Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">70%</div>
              <div className="text-textMuted">Faster Clearance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-textMuted">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Core <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Complete agency solutions designed to streamline your international trade operations and ensure compliance.
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20 h-full">
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-text mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-textMuted mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-textMuted">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Areas of <span className="text-accent">Expertise</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Specialized knowledge and experience across key areas of international trade and logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300">
                <h3 className="text-2xl font-semibold text-text mb-4">{area.area}</h3>
                <p className="text-textMuted mb-6 leading-relaxed">{area.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-text mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {area.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center text-sm text-textMuted">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              A systematic approach ensuring efficient processing and compliance at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              { step: "01", title: "Analysis", description: "Trade requirement analysis" },
              { step: "02", title: "Planning", description: "Compliance strategy development" },
              { step: "03", title: "Documentation", description: "Complete documentation prep" },
              { step: "04", title: "Submission", description: "Regulatory submission process" },
              { step: "05", title: "Clearance", description: "Customs clearance execution" },
              { step: "06", title: "Follow-up", description: "Post-clearance support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 mb-4">
                  <div className="text-xl font-heading font-bold text-accent mb-3">{process.step}</div>
                  <h3 className="text-lg font-semibold text-text mb-2">{process.title}</h3>
                  <p className="text-textMuted text-sm">{process.description}</p>
                </div>
                {index < 5 && (
                  <div className="hidden lg:block w-full h-0.5 bg-accent opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Why Choose Our <span className="text-accent">Agency Services</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Experience the advantages of working with seasoned trade professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GlobeAltIcon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-text font-semibold">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Industries <span className="text-accent">We Support</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Automotive", "Pharmaceuticals", "Chemicals", "Electronics",
              "Food & Beverage", "Textiles", "Machinery", "Energy",
              "Consumer Goods", "Agriculture", "Aviation", "Marine"
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-lg p-4 hover:border-accent transition-all duration-300">
                  <p className="text-text font-medium text-sm">{industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            Ready to Streamline Your <span className="text-accent">Trade Operations?</span>
          </h2>
          <p className="text-xl text-textMuted mb-8 max-w-2xl mx-auto">
            Contact our trade experts today for comprehensive agency services tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
            >
              Consult Our Experts
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

export default Agency;