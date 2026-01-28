import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto px-4">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;