import React, { useEffect, useState } from "react";
import "../app/styles/diagram.css";
import { Sparkles } from "lucide-react";

interface FloatingParticleProps {
  delay: number;
  duration: number;
  className: string;
}

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  onHover: (id: string, isHovering: boolean) => void;
}

interface FeatureData {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  top: string;
  right: string;
}

const FloatingParticle: React.FC<FloatingParticleProps> = ({
  delay,
  duration,
  className,
}) => (
  <div
    className={`absolute animate-pulse ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
    }}
  >
    <Sparkles size={16} className="text-blue-400/30" />
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  color,
  id,
  icon: IconComponent,
  onHover,
}) => (
  <div
    className="feature-card"
    style={{ backgroundColor: color }}
    onMouseEnter={() => onHover(id, true)}
    onMouseLeave={() => onHover(id, false)}
  >
    <div className={`icon-circle`} style={{ backgroundColor: color }}>
      {/* Outer ring with gradient */}
      <div className="absolute inset-0 rounded-full p-3">
        <div
          className="w-full h-full rounded-full"
          style={{ backgroundColor: color }}
        >
          {/* Inner circle with icon */}
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 rounded-full">
              {/* Center glow */}
              <div
                className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{ backgroundColor: color }}
              ></div>
            </div>

            {/* Main Icon */}
            <div className="relative z-10 text-white">
              <IconComponent size={50} />
              {/* Optionally, you can still render FloatingParticle for visual effect */}
              <FloatingParticle
                delay={0}
                duration={4}
                className="top-1/4 left-1/4"
              />
            </div>

            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-3 left-2 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
    <h5>{title}</h5>
    <p className="text-sm">{description}</p>
  </div>
);

const XonexDiagram = () => {
  const [hoveredLine, setHoveredLine] = useState<string | null>(null);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Function to handle hover state for lines
  const handleLineHover = (id: string, isHovering: boolean): void => {
    setHoveredLine(isHovering ? id : null);
  };

  // Define paths for SVG lines (these are illustrative and need exact coordinates)
  // Each path needs to start from the XONEX circle and go to the respective card's icon circle.
  // 'd' attribute defines the path: M (move to), C (cubic bezier curve), L (line to)
  const paths: Record<string, string> = {
    item1: "M 380 440 C 300 350, 600 200, 750 240", // XONEX to top-right
    item2: "M 380 440 C 350 400, 550 350, 750 370", // XONEX to mid-right-1
    item3: "M 380 440 C 350 450, 550 500, 750 500", // XONEX to mid-right-2
    item4: "M 380 440 C 300 500, 600 650, 750 630", // XONEX to mid-right-3
    item5: "M 380 440 C 300 550, 600 700, 750 760", // XONEX to bottom-right
  };
  const featureData: FeatureData[] = [
    {
      id: "item1",
      title: "交易所+小聊AI",
      description: "搭建完善的交易场景，吸引用户入驻，创造财富机遇。",
      color: "#4267B2",
      top: "15%",
      right: "10%",
      icon: Sparkles,
    },
    {
      id: "item2",
      title: "支付与出入金",
      description:
        "对接东南亚本地支付网络 (GCash, GrabPay, TrueMoney, ABA Bank)，缩短用户入驻路径。",
      color: "#34A853",
      top: "30%",
      right: "10%",
      icon: Sparkles,
    },
    {
      id: "item3",
      title: "NFT 与 GameFi",
      description:
        "与创作者和项目合作，结合/铸 NFT、社区奖励、GameFi 场景，增强用户粘性。",
      color: "#28a745",
      top: "45%",
      right: "10%",
      icon: Sparkles,
    },
    {
      id: "item4",
      title: "社区与内容平台",
      description:
        "开放对接 Zaely、Galxe、Telegram 社区，形成边际效应的互动网络。",
      color: "#6F42C1",
      top: "60%",
      right: "10%",
      icon: Sparkles,
    },
    {
      id: "item5",
      title: "公链支持",
      description:
        "多链资产交易 (EVM 生态、Solana、Cosmos 等)，实现跨链流动性。",
      color: "#FD7E14",
      top: "75%",
      right: "10%",
      icon: Sparkles,
    },
  ];

  return (
    <div className="relative min-h-screen py-16 lg:py-24 bg-[#121826] flex items-center justify-center overflow-hidden xonex-diagram-container">
      <div className="max-w-7xl mx-auto px-6 relative w-full h-full border">
        <div className="xonex-circle absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Outer Glow Ring */}
            <div
              className="absolute inset-0 rounded-full p-1"
              style={{
                background: `conic-gradient(from ${rotation}deg, 
                    #00d4ff 0deg, 
                    #0099ff 60deg, 
                    #6366f1 120deg, 
                    #8b5cf6 180deg, 
                    #00d4ff 240deg, 
                    #00ffff 300deg, 
                    #00d4ff 360deg)`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <div className="w-full h-full rounded-full bg-[#1a1d29]"></div>
            </div>

            {/* Inner Circle with Content */}
            <div className="relative z-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#1a1d29] to-[#2d3748] border border-gray-700/50 flex flex-col items-center justify-center shadow-2xl">
              {/* Radial Lines Background */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-0.5 h-28 bg-gradient-to-t from-transparent to-gray-600/20 origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
              </div>

              {/* Center Content */}
              <div className="relative z-20 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">XONEX</h2>
                <p className="text-gray-400 text-base">数字资产生态</p>
              </div>
            </div>
          </div>
        </div>

        {/* <svg className="connector-svg" viewBox="0 0 1000 1000">
            {Object.entries(paths).map(([id, d]) => (
            <path
                key={id}
                id={`path-${id}`} // Unique ID for each path
                d={d}
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                className={hoveredLine === id ? 'animated-line' : ''}
            />
            ))}
        </svg> */}

        {featureData.map((feature) => (
          <div
            key={feature.id}
            className={`absolute top-1/2 left-1/2 feature-group ${feature.id}`}
            style={{ top: feature.top, right: feature.right }}
          >
            <FeatureCard
              id={feature.id}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              icon={feature.icon}
              onHover={handleLineHover}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default XonexDiagram;
