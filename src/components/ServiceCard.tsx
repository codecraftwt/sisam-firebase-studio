import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href, features }) => {
  return (
    <div className="group relative">
      <div className="bg-surfaceGlass backdrop-blur-lg border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accentGlow/20">
        <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-textMuted mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {features && (
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-textMuted text-xs flex items-center">
                <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link
          to={href}
          className="inline-flex items-center space-x-2 text-accent hover:text-white text-sm font-medium group-hover:translate-x-2 transition-all duration-300"
        >
          <span>Learn More</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;