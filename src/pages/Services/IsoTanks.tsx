import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BeakerIcon, ShieldCheckIcon, CogIcon, FireIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const IsoTanks: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (benefitsRef.current) {
      gsap.fromTo(benefitsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: benefitsRef.current,
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

  const benefits = [
    {
      icon: <BeakerIcon className="w-10 h-10" />,
      title: "Hazardous Liquids",
      description: "Certified for transport of dangerous goods and hazardous chemicals with full safety compliance."
    },
    {
      icon: <CogIcon className="w-10 h-10" />,
      title: "Reusable Design",
      description: "Durable stainless steel construction allows multiple trips, reducing long-term transportation costs."
    },
    {
      icon: <FireIcon className="w-10 h-10" />,
      title: "Temperature Control",
      description: "Heating and cooling options maintain optimal product temperature during transport."
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Multi-Modal",
      description: "Compatible with ship, rail, and truck transport with standardized handling equipment."
    }
  ];

  const specifications = [
    { label: "Capacity Range", value: "17,500 - 26,000 liters" },
    { label: "Material", value: "316L Stainless Steel" },
    { label: "Dimensions", value: "20ft container equivalent" },
    { label: "Max Gross Weight", value: "36,000 kg" },
    { label: "Working Pressure", value: "2.65 bar (typical)" },
    { label: "Test Pressure", value: "4.0 bar minimum" },
    { label: "Temperature Range", value: "-40°C to +130°C" },
    { label: "Certifications", value: "CSC, IMDG, ADR, RID" }
  ];

  const tankTypes = [
    {
      type: "T11 - Standard",
      description: "General purpose tank for non-hazardous liquids",
      applications: ["Food grade liquids", "Industrial chemicals", "Oils and lubricants"],
      features: ["Basic design", "Cost effective", "Wide compatibility"]
    },
    {
      type: "T14 - Hazardous",
      description: "Reinforced tank for dangerous goods transport",
      applications: ["Corrosive chemicals", "Toxic substances", "Flammable liquids"],
      features: ["Enhanced safety", "Pressure relief", "Emergency systems"]
    },
    {
      type: "T22 - Heated",
      description: "Temperature-controlled tank with heating systems",
      applications: ["Heated chemicals", "Viscous liquids", "Temperature-sensitive products"],
      features: ["Steam heating", "Thermal insulation", "Temperature monitoring"]
    }
  ];

  const suitableFor = [
    "Hazardous chemicals",
    "Corrosive liquids", 
    "High-value products",
    "Temperature-sensitive liquids",
    "Pharmaceutical products",
    "Specialty chemicals",
    "Industrial solvents",
    "Food-grade heated products"
  ];

  const advantages = [
    "Suitable for hazardous materials",
    "Reusable and environmentally friendly",
    "Temperature control options",
    "Higher product integrity",
    "Multi-modal compatibility",
    "Global tracking capability",
    "Reduced handling risks",
    "Long-term cost efficiency"
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
              ISO Tank <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-textMuted max-w-4xl mx-auto mb-8">
              Premium stainless steel tank containers for safe transport of hazardous and high-value liquids. 
              Reusable, multi-modal, and fully compliant with international safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">26,000L</div>
              <div className="text-textMuted">Maximum Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">130°C</div>
              <div className="text-textMuted">Max Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">316L</div>
              <div className="text-textMuted">Stainless Steel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              ISO Tank <span className="text-accent">Advantages</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Why ISO tanks are the preferred choice for hazardous and high-value liquid transportation.
            </p>
          </div>

          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20 h-full">
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-textMuted text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tank Types */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Tank <span className="text-accent">Types</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Choose the right ISO tank type based on your specific liquid transport requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tankTypes.map((tank, index) => (
              <div key={index} className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300">
                <h3 className="text-2xl font-semibold text-accent mb-2">{tank.type}</h3>
                <p className="text-textMuted mb-6 leading-relaxed">{tank.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {tank.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-sm text-textMuted">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {tank.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-textMuted">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
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

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Technical <span className="text-accent">Specifications</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Detailed technical specifications for ISO tank containers.
            </p>
          </div>

          <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {specifications.map((spec, index) => (
                <div key={index} className="p-6 flex justify-between items-center hover:bg-accent/5 transition-colors duration-200">
                  <div className="text-text font-medium">{spec.label}</div>
                  <div className="text-accent font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Compatibility */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Ideal <span className="text-accent">Applications</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              ISO tanks are specifically designed for products requiring specialized handling and safety measures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Suitable Products */}
            <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircleIcon className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-semibold text-text">Ideal Products</h3>
              </div>
              <ul className="space-y-3">
                {suitableFor.map((product, index) => (
                  <li key={index} className="flex items-center text-textMuted">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Advantages */}
            <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-text">Key Advantages</h3>
              </div>
              <ul className="space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center text-textMuted">
                    <CheckCircleIcon className="w-4 h-4 text-accent mr-3" />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Transport <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              A comprehensive process ensuring safe handling from origin to destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Inspection", description: "Tank inspection and certification" },
              { step: "02", title: "Preparation", description: "Cleaning and setup procedures" },
              { step: "03", title: "Loading", description: "Safe loading with monitoring" },
              { step: "04", title: "Transport", description: "Multi-modal transport options" },
              { step: "05", title: "Discharge", description: "Controlled discharge and cleaning" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 mb-4">
                  <div className="text-2xl font-heading font-bold text-accent mb-3">{process.step}</div>
                  <h3 className="text-lg font-semibold text-text mb-2">{process.title}</h3>
                  <p className="text-textMuted text-sm">{process.description}</p>
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
            Need <span className="text-accent">ISO Tank</span> Solutions?
          </h2>
          <p className="text-xl text-textMuted mb-8 max-w-2xl mx-auto">
            Our ISO tank specialists will help you select the right tank type and provide comprehensive transport solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
            >
              Get ISO Tank Quote
            </Link>
            <Link
              to="/services/bulk-liquid/flexi-tank"
              className="border border-accent px-8 py-4 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              Compare FlexiTank
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IsoTanks;