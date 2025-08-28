import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UsersIcon,
  AcademicCapIcon,
  TrophyIcon,
  GlobeAltIcon,
  HeartIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const LifeAtSisam = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (valuesRef.current) {
      gsap.fromTo(
        valuesRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (benefitsRef.current) {
      gsap.fromTo(
        benefitsRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: benefitsRef.current,
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

  const values = [
    {
      icon: <UsersIcon className="w-10 h-10" />,
      title: "Collaborative Culture",
      description:
        "Work alongside talented professionals in a supportive environment that values teamwork and mutual respect.",
    },
    {
      icon: <AcademicCapIcon className="w-10 h-10" />,
      title: "Continuous Learning",
      description:
        "Access to training programs, workshops, and certification courses to enhance your skills and career growth.",
    },
    {
      icon: <TrophyIcon className="w-10 h-10" />,
      title: "Recognition & Growth",
      description:
        "Performance-based recognition with clear career advancement paths and leadership development opportunities.",
    },
    {
      icon: <GlobeAltIcon className="w-10 h-10" />,
      title: "Global Exposure",
      description:
        "Work on international projects and gain exposure to diverse markets, cultures, and business practices.",
    },
    {
      icon: <HeartIcon className="w-10 h-10" />,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements and comprehensive wellness programs to maintain a healthy work-life balance.",
    },
    {
      icon: <RocketLaunchIcon className="w-10 h-10" />,
      title: "Innovation Focus",
      description:
        "Be part of cutting-edge projects and contribute to innovative solutions that shape the future of logistics.",
    },
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive medical insurance",
        "Dental and vision coverage",
        "Mental health support programs",
        "On-site fitness facilities",
        "Regular health checkups",
      ],
    },
    {
      category: "Learning & Development",
      items: [
        "Professional certification sponsorship",
        "Leadership development programs",
        "International training opportunities",
        "Mentorship programs",
        "Conference and seminar attendance",
      ],
    },
    {
      category: "Financial Benefits",
      items: [
        "Competitive salary packages",
        "Performance bonuses",
        "Retirement savings plans",
        "Employee stock options",
        "Travel allowances",
      ],
    },
    {
      category: "Work Environment",
      items: [
        "Modern office facilities",
        "Flexible working hours",
        "Remote work options",
        "Team building activities",
        "Employee recreation areas",
      ],
    },
  ];

  const quotes = [
    {
      text: "Working at Sisam Group has given me incredible opportunities to grow both personally and professionally. The global projects and diverse team make every day exciting.",
      author: "Priya Sharma",
      role: "Senior Logistics Manager",
    },
    {
      text: "The company's commitment to innovation and employee development is remarkable. I've been able to lead cutting-edge projects that have real impact on the industry.",
      author: "Rajesh Kumar",
      role: "Operations Director",
    },
    {
      text: "Sisam Group truly values work-life balance. The flexible policies and supportive culture make it possible to excel in your career while maintaining personal well-being.",
      author: "Aisha Patel",
      role: "Business Development Lead",
    },
  ];

  const openings = [
    {
      title: "Senior Logistics Coordinator",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "Lead logistics operations and optimize supply chain processes for international clients.",
    },
    {
      title: "Business Development Manager",
      location: "Delhi, India",
      type: "Full-time",
      description:
        "Identify new business opportunities and develop strategic partnerships in emerging markets.",
    },
    {
      title: "Operations Analyst",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Analyze operational data and provide insights to improve efficiency and reduce costs.",
    },
    {
      title: "Customer Success Manager",
      location: "Chennai, India",
      type: "Full-time",
      description:
        "Ensure client satisfaction and manage key customer relationships for retention and growth.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-surface">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
              Life at <span className="text-accent">Sisam Group</span>
            </h1>
            <p className="text-xl text-textMuted max-w-4xl mx-auto mb-8">
              Join a dynamic team of professionals who are passionate about
              revolutionizing the logistics industry. Build your career while
              making a meaningful impact on global commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-textMuted">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-textMuted">Nationalities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-textMuted">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Why Choose <span className="text-accent">Sisam Group</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Discover what makes Sisam Group an exceptional place to build your
              career and achieve your professional goals.
            </p>
          </div>

          <div
            ref={valuesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20 h-full">
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-textMuted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              What Our <span className="text-accent">Team Says</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Hear directly from our team members about their experiences and
              growth at Sisam Group.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300"
              >
                <p className="text-textMuted mb-6 italic leading-relaxed">
                  "{quote.text}"
                </p>
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-text">{quote.author}</div>
                  <div className="text-accent text-sm">{quote.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Benefits & <span className="text-accent">Perks</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              We offer comprehensive benefits designed to support your
              well-being, growth, and success.
            </p>
          </div>

          <div
            ref={benefitsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-text mb-6">
                  {benefit.category}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-textMuted"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-surfaceGlass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
              Current <span className="text-accent">Openings</span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Explore exciting career opportunities and join our growing team of
              logistics professionals.
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-8 hover:border-accent transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-text mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <span className="text-accent font-medium">
                        {job.location}
                      </span>
                      <span className="text-textMuted">{job.type}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-accent to-primaryLight px-6 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 mt-4 md:mt-0">
                    Apply Now
                  </button>
                </div>
                <p className="text-textMuted leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-textMuted mb-6">
              Don't see a perfect match? We're always looking for talented
              individuals.
            </p>
            <button className="border border-accent px-8 py-4 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            Ready to Join <span className="text-accent">Our Team?</span>
          </h2>
          <p className="text-xl text-textMuted mb-8 max-w-2xl mx-auto">
            Take the next step in your career and become part of a company
            that's shaping the future of global logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-accent to-primaryLight px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accentGlow transition-all duration-300 animate-glow">
              View All Openings
            </button>
            <button className="border border-accent px-8 py-4 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtSisam;
