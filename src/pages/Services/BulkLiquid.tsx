import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BeakerIcon, TruckIcon, ShieldCheckIcon, GlobeAltIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';

const BulkLiquid: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (solutionsRef.current) {
      gsap.fromTo(solutionsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: solutionsRef.current,
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

  const capabilities = [
    {
      icon: <BeakerIcon className="w-10 h-10" />,
      title: "Chemical Compatibility",
      description: "Expert knowledge of chemical properties ensuring safe transport with proper container selection and handling protocols."
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Safety Compliance",
      description: "Full compliance with international safety regulations including IMO, ADR, and other relevant transportation codes."
    },
    {
      icon: <TruckIcon className="w-10 h-10" />,
      title: "Temperature Control",
      description: "Advanced temperature monitoring and control systems for sensitive liquids requiring specific climate conditions."
    },
    {
      icon: <GlobeAltIcon className="w-10 h-10" />,
      title: "Global Network",
      description: "Worldwide network of certified partners and facilities for seamless international bulk liquid transportation."
    },
    {
      icon: <ChartBarIcon className="w-10 h-10" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes including testing, documentation, and contamination prevention measures."
    },
    {
      icon: <CogIcon className="w-10 h-10" />,
      title: "Custom Solutions",
      description: "Tailored transportation solutions designed for your specific liquid products and operational requirements."
    }
  ];

  const industries = [
    {
      name: "Chemical Industry",
      description: "Specialized transport for chemicals, solvents, and industrial liquids with full safety compliance.",
      applications: ["Industrial Chemicals", "Solvents", "Acids & Bases", "Specialty Chemicals"]
    },
    {
      name: "Food & Beverage",
      description: "Food-grade transport solutions maintaining product integrity and regulatory compliance.",
      applications: ["Edible Oils", "Fruit Juices", "Wine & Spirits", "Liquid Sweeteners"]
    },
    {
      name: "Pharmaceutical",
      description: "Temperature-controlled transport for pharmaceutical liquids with strict quality requirements.",
      applications: ["Active Ingredients", "Liquid Medicines", "Vaccines", "Medical Solutions"]
    },
    {
      name: "Energy & Oil",
      description: "Safe transport of petroleum products and energy-related liquids with specialized handling.",
      applications: ["Crude Oil", "Refined Products", "Biofuels", "Lubricants"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-surface">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent mb-6 flex justify-center">
              <BeakerIcon className="w-16 h-16" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Bulk Liquid <span className="text-accent">Transportation</span>
            </h1>
            <p className="text-xl text-textMuted max-w-4xl mx-auto mb-8">
              Specialized bulk liquid transportation services using cutting-edge FlexiTank and ISO Tank technologies 
              for safe, efficient, and cost-effective transport of liquid cargo worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10M+</div>
              <div className="text-textMuted">Liters Transported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-textMuted">Safety Record</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-textMuted">Liquid Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto mb-12">
              Choose between FlexiTank and ISO Tank solutions based on your specific liquid transport requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Link to="/services/bulk-liquid/flexi-tank" className="group">
              <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <TruckIcon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    FlexiTank Solutions
                  </h3>
                </div>
                <p className="text-textMuted mb-6 leading-relaxed">
                  Cost-effective bulk liquid transport using flexible containers that maximize container utilization 
                  and reduce handling costs for non-hazardous liquids.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "20-24,000 liter capacity",
                    "One-way, disposable system",
                    "Faster loading/unloading",
                    "Reduced contamination risk",
                    "Lower cost per liter"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-textMuted">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-accent font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link to="/services/bulk-liquid/iso-tanks" className="group">
              <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <BeakerIcon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    ISO Tank Solutions
                  </h3>
                </div>
                <p className="text-textMuted mb-6 leading-relaxed">
                  Reusable stainless steel containers perfect for hazardous and high-value liquids requiring 
                  specialized handling and temperature control.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "17,500-26,000 liter capacity",
                    "Reusable steel construction",
                    "Hazardous liquid transport",
                    "Temperature control options",
                    "Multi-modal compatibility"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-textMuted">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-accent font-semibold">Learn More →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Capabilities</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Comprehensive expertise in bulk liquid transportation with industry-leading safety standards and technology.
            </p>
          </div>

          <div ref={solutionsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20 h-full">
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-textMuted text-sm leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Industries <span className="text-accent">We Serve</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Specialized solutions tailored to meet the unique requirements of different industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300">
                <h3 className="text-2xl font-semibold text-text mb-4">{industry.name}</h3>
                <p className="text-textMuted mb-6 leading-relaxed">{industry.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center text-sm text-textMuted">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {app}
                    </div>
                  ))}
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
            Need Bulk Liquid <span className="text-accent">Transportation?</span>
          </h2>
          <p className="text-xl text-textMuted mb-8 max-w-2xl mx-auto">
            Our experts will help you choose the right solution for your liquid transport needs and provide a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
            >
              Get Expert Consultation
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

export default BulkLiquid;