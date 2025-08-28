import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const offices = [
    {
      city: "Mumbai",
      country: "India",
      address: "123 Business Center, Andheri East, Mumbai 400069",
      phone: "+91 22 1234 5678",
      email: "mumbai@sisamgroup.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Delhi",
      country: "India", 
      address: "456 Corporate Plaza, Connaught Place, New Delhi 110001",
      phone: "+91 11 1234 5678",
      email: "delhi@sisamgroup.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Chennai",
      country: "India",
      address: "789 Trade Center, T. Nagar, Chennai 600017",
      phone: "+91 44 1234 5678", 
      email: "chennai@sisamgroup.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "101 Marina Bay, Singapore 018956",
      phone: "+65 6234 5678",
      email: "singapore@sisamgroup.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];

  const services = [
    "Logistics Solutions",
    "Bulk Liquid Transportation",
    "FlexiTank Services",
    "ISO Tank Services", 
    "Agency Services",
    "Customs Clearance",
    "General Inquiry"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-surface">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-textMuted max-w-4xl mx-auto mb-8">
              Ready to optimize your logistics operations? Get in touch with our experts for customized solutions 
              that meet your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-textMuted">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-textMuted">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">48H</div>
              <div className="text-textMuted">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-heading font-bold text-text mb-2">
                  Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="text-textMuted mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-surfaceGlass border border-border rounded-lg text-text placeholder-textMuted focus:outline-none focus:border-accent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-surfaceGlass border border-border rounded-lg text-text placeholder-textMuted focus:outline-none focus:border-accent transition-colors duration-200"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-surfaceGlass border border-border rounded-lg text-text placeholder-textMuted focus:outline-none focus:border-accent transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-surfaceGlass border border-border rounded-lg text-text focus:outline-none focus:border-accent transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-surfaceGlass border border-border rounded-lg text-text placeholder-textMuted focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                      placeholder="Tell us about your logistics requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-text mb-6">
                  Get <span className="text-accent">Immediate</span> Help
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <PhoneIcon className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <div className="text-text font-medium">24/7 Support Hotline</div>
                      <div className="text-textMuted">+91 22 1234 5678</div>
                      <div className="text-textMuted text-sm">Available round the clock for urgent shipments</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <div className="text-text font-medium">Email Support</div>
                      <div className="text-textMuted">support@sisamgroup.com</div>
                      <div className="text-textMuted text-sm">We respond within 4 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <ClockIcon className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <div className="text-text font-medium">Business Hours</div>
                      <div className="text-textMuted">Monday - Friday: 9:00 AM - 6:00 PM IST</div>
                      <div className="text-textMuted text-sm">Emergency services available 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-text mb-6">
                  Quick <span className="text-accent">Services</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="text-left p-4 bg-surfaceGlass border border-border rounded-lg hover:border-accent transition-all duration-200">
                    <div className="text-text font-medium">Track Shipment</div>
                    <div className="text-textMuted text-sm">Real-time tracking</div>
                  </button>
                  <button className="text-left p-4 bg-surfaceGlass border border-border rounded-lg hover:border-accent transition-all duration-200">
                    <div className="text-text font-medium">Get Quote</div>
                    <div className="text-textMuted text-sm">Instant pricing</div>
                  </button>
                  <button className="text-left p-4 bg-surfaceGlass border border-border rounded-lg hover:border-accent transition-all duration-200">
                    <div className="text-text font-medium">Documentation</div>
                    <div className="text-textMuted text-sm">Forms & guides</div>
                  </button>
                  <button className="text-left p-4 bg-surfaceGlass border border-border rounded-lg hover:border-accent transition-all duration-200">
                    <div className="text-text font-medium">Support Portal</div>
                    <div className="text-textMuted text-sm">Help center</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Our <span className="text-accent">Offices</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Visit us at any of our global offices or connect with our local representatives for personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="w-6 h-6 text-accent mr-2" />
                  <h3 className="text-xl font-semibold text-text">{office.city}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-textMuted text-sm">{office.address}</p>
                  <div className="flex items-center">
                    <PhoneIcon className="w-4 h-4 text-accent mr-2" />
                    <span className="text-textMuted text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-4 h-4 text-accent mr-2" />
                    <span className="text-textMuted text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 text-accent mr-2" />
                    <span className="text-textMuted text-sm">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Find <span className="text-accent">Us</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Locate our offices worldwide and visit us for in-person consultations.
            </p>
          </div>

          <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-2xl p-8">
            <div className="aspect-video bg-surface rounded-lg flex items-center justify-center">
              <div className="text-center">
                <GlobeAltIcon className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-textMuted">Interactive global office map would be embedded here</p>
                <p className="text-textMuted text-sm mt-2">Showing all Sisam Group locations worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;