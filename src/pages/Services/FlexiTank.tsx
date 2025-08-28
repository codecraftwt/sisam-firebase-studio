import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TruckIcon, CurrencyDollarIcon, ClockIcon, ShieldCheckIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const FlexiTank: React.FC = () => {
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
      icon: <CurrencyDollarIcon className="w-10 h-10" />,
      title: "Cost Effective",
      description: "Up to 30% cost savings compared to traditional transport methods with better container utilization."
    },
    {
      icon: <ClockIcon className="w-10 h-10" />,
      title: "Fast Loading",
      description: "Quick loading and unloading process reduces port dwell time and transportation delays."
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Contamination Free",
      description: "Single-use design eliminates cross-contamination risks and ensures product purity."
    },
    {
      icon: <TruckIcon className="w-10 h-10" />,
      title: "Easy Handling",
      description: "Simplified logistics with standard container dimensions fitting all transport modes."
    }
  ];

  const specifications = [
    { label: "Capacity Range", value: "16,000 - 24,000 liters" },
    { label: "Container Types", value: "20ft & 40ft standard containers" },
    { label: "Material", value: "Food-grade polyethylene" },
    { label: "Temperature Range", value: "-10°C to +60°C" },
    { label: "Loading Time", value: "2-3 hours average" },
    { label: "Discharge Time", value: "3-4 hours average" },
    { label: "Shelf Life", value: "5 years from manufacture" },
    { label: "Certifications", value: "FDA, EC, Kosher approved" }
  ];

  const suitableFor = [
    "Edible oils and fats",
    "Non-hazardous chemicals",
    "Food-grade liquids",
    "Fruit juices and concentrates", 
    "Wine and spirits",
    "Liquid sweeteners",
    "Industrial oils",
    "Lubricants and base oils"
  ];

  const notSuitableFor = [
    "Hazardous chemicals",
    "Corrosive liquids",
    "High-temperature products (>60°C)",
    "Gases and pressurized liquids",
    "Crystallizing products",
    "Products requiring heating",
    "Extremely viscous liquids",
    "Products with sediments"
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
              FlexiTank <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-textMuted max-w-4xl mx-auto mb-8">
              Revolutionary flexible container technology for cost-effective bulk liquid transportation. 
              Transform standard shipping containers into efficient liquid transport systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24,000L</div>
              <div className="text-textMuted">Maximum Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">30%</div>
              <div className="text-textMuted">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-textMuted">Food Grade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              FlexiTank <span className="text-accent">Advantages</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Discover why FlexiTank technology is revolutionizing bulk liquid transportation worldwide.
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

      {/* Technical Specifications */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Technical <span className="text-accent">Specifications</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Detailed specifications and capabilities of our FlexiTank solutions.
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Product <span className="text-accent">Compatibility</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Understanding which products are suitable for FlexiTank transportation ensures safe and efficient logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Suitable Products */}
            <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircleIcon className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-semibold text-text">Suitable Products</h3>
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

            {/* Not Suitable Products */}
            <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <XCircleIcon className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-semibold text-text">Not Suitable Products</h3>
              </div>
              <ul className="space-y-3">
                {notSuitableFor.map((product, index) => (
                  <li key={index} className="flex items-center text-textMuted">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              FlexiTank <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              A streamlined process from installation to discharge ensures efficiency and product safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Installation", description: "FlexiTank installed in standard container" },
              { step: "02", title: "Loading", description: "Liquid pumped directly into FlexiTank" },
              { step: "03", title: "Transport", description: "Safe transport via ship, rail, or truck" },
              { step: "04", title: "Discharge", description: "Liquid pumped out and tank disposed" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 mb-4">
                  <div className="text-2xl font-heading font-bold text-accent mb-3">{process.step}</div>
                  <h3 className="text-lg font-semibold text-text mb-2">{process.title}</h3>
                  <p className="text-textMuted text-sm">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block w-full h-0.5 bg-accent opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            Ready for <span className="text-accent">FlexiTank</span> Solutions?
          </h2>
          <p className="text-xl text-textMuted mb-8 max-w-2xl mx-auto">
            Contact our FlexiTank experts to determine if this solution is right for your liquid transport needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
            >
              Get FlexiTank Quote
            </Link>
            <Link
              to="/services/bulk-liquid/iso-tanks"
              className="border border-accent px-8 py-4 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              Compare ISO Tanks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlexiTank;