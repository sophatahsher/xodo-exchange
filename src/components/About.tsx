"use client";

import { useState } from "react";
import {
  Newspaper,
  BarChart3,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function About() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      title: "新闻",
      icon: Newspaper,
      color: "cyan",
    },
    {
      id: 2,
      title: "合规审计",
      icon: BarChart3,
      color: "blue",
    },
    {
      id: 3,
      title: "资金安全与透明",
      icon: Shield,
      color: "green",
    },
    {
      id: 4,
      title: "发展路线",
      icon: TrendingUp,
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: "border-cyan-500",
        glow: "shadow-cyan-500/50",
        bg: "from-cyan-500/10 to-cyan-600/5",
        text: "text-cyan-400",
        hover: "hover:shadow-cyan-500/60",
      },
      blue: {
        border: "border-blue-500",
        glow: "shadow-blue-500/50",
        bg: "from-blue-500/10 to-blue-600/5",
        text: "text-blue-400",
        hover: "hover:shadow-blue-500/60",
      },
      green: {
        border: "border-green-500",
        glow: "shadow-green-500/50",
        bg: "from-green-500/10 to-green-600/5",
        text: "text-green-400",
        hover: "hover:shadow-green-500/60",
      },
      purple: {
        border: "border-purple-500",
        glow: "shadow-purple-500/50",
        bg: "from-purple-500/10 to-purple-600/5",
        text: "text-purple-400",
        hover: "hover:shadow-purple-500/60",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            了解{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              XONEX
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            在这里，了解你需要知道关于XONEX的一切
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const colorClasses = getColorClasses(section.color);
            const isActive = activeSection === section.id;

            return (
              <div
                key={section.id}
                className="group relative"
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection(null)}
              >
                {/* Main Circle */}
                <div
                  className={`
                    relative w-40 h-40 sm:w-56 sm:h-56 lg:w-44 lg:h-44 mx-auto rounded-full
                    border-2 ${colorClasses.border} bg-gradient-to-br ${colorClasses.bg}
                    shadow-2xl ${colorClasses.glow} ${colorClasses.hover}
                    transition-all duration-500 cursor-pointer
                    ${isActive ? "scale-105 shadow-3xl" : "hover:scale-105"}
                  `}
                >
                  {/* Inner Glow Effect */}
                  <div
                    className={`absolute inset-2 rounded-full bg-gradient-to-br ${colorClasses.bg} opacity-50`}
                  ></div>

                  {/* Icon and Text */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                    <div
                      className={`mb-4 p-3 rounded-full bg-gradient-to-r ${colorClasses.bg} ${colorClasses.border} border`}
                    >
                      <IconComponent
                        size={32}
                        className={`${colorClasses.text}`}
                      />
                    </div>
                    <h3 className="text-white font-bold text-md lg:text-2xl mb-2">
                      {section.title}
                    </h3>
                    {/* {section.title === '资金安全与透明' && (
                      <div className="text-white font-bold text-md lg:text-xl">
                        与透明
                      </div>
                    )} */}
                  </div>

                  {/* Animated Border Effect */}
                  <div
                    className={`
                      absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                    `}
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${
                        section.color === "cyan"
                          ? "#06b6d4"
                          : section.color === "blue"
                            ? "#3b82f6"
                            : section.color === "green"
                              ? "#22c55e"
                              : "#a855f7"
                      }, transparent)`,
                      mask: "radial-gradient(circle at center, transparent 95%, black 96%)",
                      WebkitMask:
                        "radial-gradient(circle at center, transparent 95%, black 96%)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        {/* <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#1a1d29] to-[#2d3748] rounded-full px-8 py-4 border border-gray-700">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300">平台正常运行</span>
            <div className="w-px h-6 bg-gray-600"></div>
            <span className="text-gray-400 text-sm">7x24小时服务</span>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow:
            0 35px 60px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </>
  );
}
