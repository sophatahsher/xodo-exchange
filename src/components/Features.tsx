// 'use client';

// import { motion } from 'framer-motion';

// export default function Features() {
//   const items = [
//     {
//       title: "交易所 + 小咩AI",
//       desc: "搭建完善的交易场景，吸引用用户入场，创造财富机遇。",
//       color: "bg-blue-500",
//       position: "top-0 left-[80%]",
//     },
//     {
//       title: "支付与出入金",
//       desc: "对接东南亚本地支付网络（GCash、GrabPay、TrueMoney、ABA Bank），缩短用户入场路径。",
//       color: "bg-emerald-400",
//       position: "top-[20%] left-[90%]",
//     },
//     {
//       title: "NFT 与 GameFi",
//       desc: "与创作者和项目合作，结合小咩NFT、社区奖励、GameFi场景，增强用户粘性。",
//       color: "bg-green-500",
//       position: "top-[50%] left-[90%]",
//     },
//     {
//       title: "社区与内容平台",
//       desc: "开放对接Zealy、Galxe、Telegram社区，形成边玩边赚的互动网络。",
//       color: "bg-purple-500",
//       position: "top-[70%] left-[90%]",
//     },
//     {
//       title: "公链支持",
//       desc: "多链资产交易（EVM生态、Solana、Cosmos等），实现跨链流动性。",
//       color: "bg-orange-500",
//       position: "top-[90%] left-[80%]",
//     },
//   ];

//   return (
//     <section className="relative px-6 py-16 lg:py-24 overflow-hidden border">
//         <div className="relative min-h-screen bg-[#0d1117] flex items-center justify-center text-white p-6">
//         {/* Center Circle */}
//         <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="relative flex items-center justify-center w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl"
//         >
//             <div className="text-center">
//             <h1 className="text-3xl font-bold">XONEX</h1>
//             <p className="mt-2 text-gray-200">数字资产生态</p>
//             </div>
//         </motion.div>

//         {/* Items with dotted connectors */}
//         {items.map((item, i) => (
//             <motion.div
//             key={i}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: i * 0.2 }}
//             className={`absolute ${item.position} flex items-center rounded-2xl ${item.color} p-4 shadow-lg min-w-[280px]`}
//             >
//             <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
//                 ⭐
//             </div>
//             <div>
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//                 <p className="text-sm text-gray-100">{item.desc}</p>
//             </div>

//             {/* Dotted line */}
//             <div className="absolute right-full top-1/2 w-20 border-t-2 border-dotted border-gray-400"></div>
//             </motion.div>
//         ))}
//         </div>
//     </section>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';

// export default function CircularEcosystem() {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation(prev => (prev + 1) % 360);
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-16 lg:py-24 bg-[#0a0e1a] flex items-center justify-center">
//       <div className="max-w-7xl mx-auto border">
//         <div className="relative w-[500px] h-[500px] flex items-center justify-center">

//             <div className="relative w-96 h-96 rounded-full flex items-center justify-center">

//             <div
//                 className="absolute inset-0 rounded-full"
//                 style={{
//                 background: `conic-gradient(from ${rotation}deg,
//                     #00d4ff 0deg,
//                     #0099ff 60deg,
//                     #6366f1 120deg,
//                     #8b5cf6 180deg,
//                     #00d4ff 240deg,
//                     #00ffff 300deg,
//                     #00d4ff 360deg)`,
//                 padding: '3px',
//                 transform: `rotate(${rotation}deg)`
//                 }}
//             >
//                 <div className="w-full h-full rounded-full bg-[#1a1d29]"></div>
//             </div>

//             <div className="relative z-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#1a1d29] to-[#2d3748] border border-gray-700/50 flex flex-col items-center justify-center shadow-2xl">

//                 <div className="absolute inset-0 rounded-full overflow-hidden">
//                 {Array.from({ length: 8 }).map((_, i) => (
//                     <div
//                     key={i}
//                     className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-gradient-to-t from-transparent to-gray-600/20 origin-bottom"
//                     style={{
//                         transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
//                     }}
//                     />
//                 ))}
//                 </div>

//                 <div className="relative z-20 text-center">
//                 <h2 className="text-4xl font-bold text-white mb-2">XONEX</h2>
//                 <p className="text-gray-400 text-lg">数字资产生态</p>
//                 </div>
//             </div>
//             </div>

//             <div className="absolute inset-0">

//             <div
//                 className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
//                 style={{
//                 top: '10%',
//                 left: '50%',
//                 transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-200px) rotate(-${rotation}deg)`,
//                 }}
//             >
//                 <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse"></div>
//             </div>

//             <div
//                 className="absolute"
//                 style={{
//                 top: '20%',
//                 right: '15%',
//                 transform: `rotate(${rotation * 0.8}deg)`,
//                 }}
//             >
//                 <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"></div>
//                 <div
//                 className="absolute top-1/2 left-full w-20 h-0.5 origin-left"
//                 style={{
//                     background: `linear-gradient(90deg,
//                     transparent 0%,
//                     #00d4ff 5%,
//                     transparent 10%,
//                     #00d4ff 15%,
//                     transparent 20%,
//                     #00d4ff 25%,
//                     transparent 30%)`
//                 }}
//                 ></div>
//             </div>

//             <div
//                 className="absolute w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
//                 style={{
//                 top: '50%',
//                 right: '5%',
//                 transform: `translate(50%, -50%) rotate(${rotation * 1.2}deg) translateX(180px) rotate(-${rotation * 1.2}deg)`,
//                 }}
//             >
//                 <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>
//             </div>

//             <div
//                 className="absolute"
//                 style={{
//                 bottom: '25%',
//                 right: '20%',
//                 transform: `rotate(${rotation * -0.6}deg)`,
//                 }}
//             >
//                 <div className="w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50 animate-pulse"></div>
//                 <div
//                 className="absolute top-1/2 left-full w-24 h-0.5 origin-left"
//                 style={{
//                     background: `linear-gradient(90deg,
//                     transparent 0%,
//                     #84cc16 5%,
//                     transparent 10%,
//                     #84cc16 15%,
//                     transparent 20%,
//                     #84cc16 25%,
//                     transparent 30%)`
//                 }}
//                 ></div>
//             </div>

//             <div
//                 className="absolute"
//                 style={{
//                 bottom: '15%',
//                 left: '40%',
//                 transform: `rotate(${rotation * 0.9}deg)`,
//                 }}
//             >
//                 <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 animate-pulse"></div>
//                 <div
//                 className="absolute top-1/2 left-full w-28 h-0.5 origin-left"
//                 style={{
//                     background: `linear-gradient(90deg,
//                     transparent 0%,
//                     #f97316 5%,
//                     transparent 10%,
//                     #f97316 15%,
//                     transparent 20%,
//                     #f97316 25%,
//                     transparent 30%)`
//                 }}
//                 ></div>
//             </div>

//             <div
//                 className="absolute w-2 h-2 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"
//                 style={{
//                 bottom: '40%',
//                 left: '45%',
//                 transform: `rotate(${rotation * -1.5}deg) translateY(-50px) rotate(-${rotation * -1.5}deg)`,
//                 }}
//             >
//                 <div className="absolute inset-0 bg-pink-400 rounded-full animate-pulse"></div>
//             </div>
//             </div>

//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl animate-pulse"></div>
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-2xl animate-pulse delay-1000"></div>
//         </div>

//         <style jsx>{`
//             @keyframes float {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-10px); }
//             }
//         `}</style>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  MessageCircle,
  CreditCard,
  Gamepad2,
  Users,
  Shield,
} from "lucide-react";

export default function CircularEcosystem() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 1,
      icon: MessageCircle,
      title: "交易所+小哆AI",
      description: "智能完善的交易环境，极可引用户人境，创造财富机遇。",
      color: "blue",
      position: { top: "15%", right: "5%" },
      dotPosition: { top: "25%", left: "85%" },
    },
    {
      id: 2,
      icon: CreditCard,
      title: "支付与出入金",
      description:
        "对接东南亚本地支付网络（GCash、GrabPay、TrueMoney、ABA Bank），触达用户场景。",
      color: "teal",
      position: { top: "35%", right: "5%" },
      dotPosition: { top: "40%", left: "82%" },
    },
    {
      id: 3,
      icon: Gamepad2,
      title: "NFT 与 GameFi",
      description:
        "与创作者和游戏平台合作，推出优质资产基会合成 NFT、社交关系、GameFi 场景，增强用户枯性。",
      color: "green",
      position: { top: "55%", right: "5%" },
      dotPosition: { top: "55%", left: "78%" },
    },
    {
      id: 4,
      icon: Users,
      title: "社区与内容平台",
      description:
        "开放对接 Zealy、Galxe、Telegram 社区，形成边际递增的互动网络。",
      color: "purple",
      position: { bottom: "25%", right: "5%" },
      dotPosition: { top: "70%", left: "75%" },
    },
    {
      id: 5,
      icon: Shield,
      title: "公链支持",
      description:
        "多链部署交易（EVM 生态、Solana、Cosmos 等），实现跨链配置。",
      color: "orange",
      position: { bottom: "5%", right: "5%" },
      dotPosition: { top: "85%", left: "70%" },
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        text: "text-blue-100",
        border: "border-blue-400",
        dot: "bg-blue-500",
        shadow: "shadow-blue-500/30",
        line: "#3b82f6",
      },
      teal: {
        bg: "from-teal-500 to-teal-600",
        text: "text-teal-100",
        border: "border-teal-400",
        dot: "bg-teal-500",
        shadow: "shadow-teal-500/30",
        line: "#14b8a6",
      },
      green: {
        bg: "from-green-500 to-green-600",
        text: "text-green-100",
        border: "border-green-400",
        dot: "bg-green-500",
        shadow: "shadow-green-500/30",
        line: "#22c55e",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        text: "text-purple-100",
        border: "border-purple-400",
        dot: "bg-purple-500",
        shadow: "shadow-purple-500/30",
        line: "#a855f7",
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        text: "text-orange-100",
        border: "border-orange-400",
        dot: "bg-orange-500",
        shadow: "shadow-orange-500/30",
        line: "#f97316",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="relative min-h-screen py-16 lg:py-24 bg-[#121826] flex items-center justify-center overflow-hidden border">
      <div className="max-w-7xl mx-auto px-6 relative w-full h-full">
        {/* Central Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

        {/* Feature Cards */}
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          const colorClasses = getColorClasses(feature.color);

          return (
            <div key={index}>
              {/* Connection Dot */}
              <div
                className={`absolute w-4 h-4 ${colorClasses.dot} rounded-full ${colorClasses.shadow} shadow-lg z-20 animate-pulse`}
                style={feature.dotPosition}
              >
                <div
                  className={`absolute inset-0 ${colorClasses.dot} rounded-full opacity-60 animate-ping`}
                ></div>
              </div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{ top: 0, left: 0 }}
              >
                <defs>
                  <pattern
                    id={`dashed-${feature.id}`}
                    patternUnits="userSpaceOnUse"
                    width="10"
                    height="2"
                  >
                    <rect
                      width="5"
                      height="2"
                      fill={colorClasses.line}
                      opacity="0.6"
                    />
                    <rect x="5" width="5" height="2" fill="transparent" />
                  </pattern>
                </defs>
                <line
                  x1="50%"
                  y1="50%"
                  x2={feature.dotPosition.left}
                  y2={feature.dotPosition.top}
                  stroke={`url(#dashed-${feature.id})`}
                  strokeWidth="2"
                  opacity="0.8"
                />
              </svg>

              {/* Feature Card */}
              <div className="absolute w-96 max-w-sm" style={feature.position}>
                <div
                  className={`bg-gradient-to-r ${colorClasses.bg} rounded-2xl p-1 ${colorClasses.shadow} shadow-xl`}
                >
                  <div className="bg-[#1a1d29]/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${colorClasses.bg} rounded-full flex items-center justify-center ${colorClasses.shadow} shadow-lg`}
                      >
                        <IconComponent size={20} className="text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-lg font-bold ${colorClasses.text} mb-2`}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Additional Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Small floating particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>

        {/* Background Glow Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
