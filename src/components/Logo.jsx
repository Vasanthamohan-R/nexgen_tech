const Logo = ({ className = "", size = "normal" }) => {
  const scale = size === "large" ? 1.5 : size === "small" ? 0.7 : 1;
  
  return (
    <div className={`flex items-center ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      <svg 
        viewBox="0 0 400 120" 
        className="h-10 w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* THE */}
        <text 
          x="20" 
          y="35" 
          fill="#1e3a5f" 
          fontFamily="Inter, sans-serif" 
          fontSize="20" 
          fontWeight="700"
          letterSpacing="3"
        >
          THE
        </text>
        
        {/* NEXGEN with arrow-like X */}
        <g transform="translate(0, 45)">
          {/* N */}
          <text 
            x="15" 
            y="50" 
            fill="#1e3a5f" 
            fontFamily="Inter, sans-serif" 
            fontSize="55" 
            fontWeight="800"
            fontStyle="italic"
          >
            N
          </text>
          
          {/* E */}
          <text 
            x="62" 
            y="50" 
            fill="#1e3a5f" 
            fontFamily="Inter, sans-serif" 
            fontSize="55" 
            fontWeight="800"
            fontStyle="italic"
          >
            E
          </text>
          
          {/* X styled as arrow */}
          <g transform="translate(105, 5)">
            <path 
              d="M0 10 L35 40 L0 70" 
              fill="none" 
              stroke="#1e3a5f" 
              strokeWidth="12" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path 
              d="M0 10 L25 35" 
              fill="none" 
              stroke="#1e3a5f" 
              strokeWidth="12" 
              strokeLinecap="round"
            />
            <path 
              d="M10 55 L35 40 L55 55" 
              fill="#1e3a5f"
            />
            {/* Arrow head */}
            <path 
              d="M25 25 L55 40 L25 55 Z" 
              fill="#1e3a5f"
            />
          </g>
          
          {/* G */}
          <text 
            x="165" 
            y="50" 
            fill="#1e3a5f" 
            fontFamily="Inter, sans-serif" 
            fontSize="55" 
            fontWeight="800"
            fontStyle="italic"
          >
            G
          </text>
          
          {/* E */}
          <text 
            x="215" 
            y="50" 
            fill="#1e3a5f" 
            fontFamily="Inter, sans-serif" 
            fontSize="55" 
            fontWeight="800"
            fontStyle="italic"
          >
            E
          </text>
          
          {/* N */}
          <text 
            x="260" 
            y="50" 
            fill="#1e3a5f" 
            fontFamily="Inter, sans-serif" 
            fontSize="55" 
            fontWeight="800"
            fontStyle="italic"
          >
            N
          </text>
        </g>
        
        {/* TECH */}
        <text 
          x="175" 
          y="115" 
          fill="#1e3a5f" 
          fontFamily="Inter, sans-serif" 
          fontSize="22" 
          fontWeight="700"
          letterSpacing="4"
        >
          TECH
        </text>
      </svg>
    </div>
  );
};

export default Logo;
