import React from 'react';

const Logo = ({ className = '', showText = true, size = 'default' }) => {
  const sizes = {
    small: { circle: 32, text: 'text-base' },
    default: { circle: 40, text: 'text-lg' },
    large: { circle: 48, text: 'text-xl' },
  };

  const { circle, text } = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* SVG Logo Circle */}
      <svg
        width={circle}
        height={circle}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4b760" />
            <stop offset="50%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#b8941f" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#goldGradient)" stroke="#C9A84C" strokeWidth="2" />
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fill="#0D1B3E"
          fontFamily="Raleway, sans-serif"
          fontWeight="800"
          fontSize="38"
          letterSpacing="-1"
        >
          AMA
        </text>
      </svg>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`text-white font-bold ${text} leading-tight tracking-tight font-raleway`}>
            AMA Consultores
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
