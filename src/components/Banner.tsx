"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Sparkles,
  Zap,
  Star,
  MessageCircle,
  BarChart3,
} from "lucide-react";

export default function Banner() {
  const [currentPrice, setCurrentPrice] = useState(41358.93);
  const [btcPrice, setBtcPrice] = useState(67542.18);
  const [isRising, setIsRising] = useState(true);
  const [isBtcRising, setIsBtcRising] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const [btcChangePct, setBtcChangePct] = useState(0);
  const [ethChangePct, setEthChangePct] = useState(0);

  // Simulate price changes
  useEffect(() => {
    const interval = setInterval(() => {
      // ETH Price
      const ethChange = (Math.random() - 0.5) * 100;
      setCurrentPrice((prev) => {
        const newPrice = prev + ethChange;
        setIsRising(ethChange > 0);
        return newPrice;
      });
      setEthChangePct(((ethChange / currentPrice) * 100) || 0);

      // BTC Price
      const btcChange = (Math.random() - 0.5) * 200;
      setBtcPrice((prev) => {
        const newPrice = prev + btcChange;
        setIsBtcRising(btcChange > 0);
        return newPrice;
      });
      setBtcChangePct(((btcChange / btcPrice) * 100) || 0);

      setAnimationKey((prev) => prev + 1);
    }, 3000);

      return () => clearInterval(interval);
  }, [currentPrice, btcPrice]);

  // Floating particles animation
  const FloatingParticle = ({
    delay,
    duration,
    className,
  }: {
    delay: number;
    duration: number;
    className: string;
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

  return (
    <section className="relative px-6 py-16 lg:py-24 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <FloatingParticle delay={0} duration={4} className="top-1/4 left-1/4" />
      <FloatingParticle delay={1} duration={3} className="top-1/3 right-1/4" />
      <FloatingParticle
        delay={2}
        duration={5}
        className="bottom-1/3 left-1/3"
      />
      <FloatingParticle
        delay={1.5}
        duration={3.5}
        className="top-2/3 right-1/3"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 px-0 sm:px-4 lg:px-0">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-[2.6rem] font-bold mb-6 leading-tight">
              XONEX{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                探索机遇，开启新一代交易之旅
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              我们致力于AI智能化的数字交易体验，为每个用户量身定制专业的产品服务体验。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                <span className="flex items-center justify-center space-x-2">
                  <span>立即交易</span>
                  <Zap size={16} className="group-hover:animate-pulse" />
                </span>
              </button>
              <button className="group border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-800/50">
                <span className="flex items-center justify-center space-x-2">
                  <span>模拟交易</span>
                  <Star size={16} className="group-hover:animate-spin" />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile App Mockups */}
          <div className="lg:col-span-1 order-first lg:order-last">
            {/* <div className="order-1 lg:order-2 flex justify-center lg:justify-end"> */}
            <div className="relative flex justify-center items-center -mt-10 scale-90 sm:scale-90 md:scale-95 lg:scale-100 xl:scale-100">
              {/* First Phone - AI Chat Interface (Back/Left) */}
              <div className="relative z-10">
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] p-1.5 shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                  <div className="bg-[#1a1d29] rounded-[1.5rem] p-6 h-[500px] w-[220px] relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 text-xs text-gray-400">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* AI Chat Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                        <MessageCircle size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">
                          小哆 AI
                        </div>
                        <div className="text-green-400 text-xs">● 在线</div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-3 mb-4">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-gray-300 text-xs">
                          你好！我是小哆AI，您的智能交易助手
                        </div>
                      </div>
                      <div className="bg-blue-600/20 rounded-lg p-3 ml-8">
                        <div className="text-blue-300 text-xs">
                          帮我分析BTC走势
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-gray-300 text-xs">
                          根据技术分析，BTC目前处于上升趋势...
                        </div>
                      </div>
                    </div>

                    {/* XODO Branding */}
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl p-3 mb-4 text-center animate-gradient-xy">
                      <div className="text-white text-lg font-bold mb-1">
                        <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                          XODO
                        </span>
                      </div>
                      <div className="text-blue-100 text-xs">
                        AI智能交易助手
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <button className="bg-gray-700/50 py-2 px-1 rounded-lg text-xs hover:bg-gray-600/50 transition-colors">
                        市场分析
                      </button>
                      <button className="bg-gray-700/50 py-2 px-1 rounded-lg text-xs hover:bg-gray-600/50 transition-colors">
                        交易建议
                      </button>
                      <button className="bg-gray-700/50 py-2 px-1 rounded-lg text-xs hover:bg-gray-600/50 transition-colors">
                        风险提醒
                      </button>
                    </div>

                    {/* Input Area */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-gray-800 rounded-full px-4 py-2 text-xs text-gray-400">
                        输入消息...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur-xl -z-10 animate-pulse"></div>
              </div>

              {/* Second Phone - Trading Interface (Front/Right - Overlapping) */}
              <div className="relative z-20 -ml-20">
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] p-1.5 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  <div className="bg-[#1a1d29] rounded-[1.5rem] p-4 h-[500px] w-[250px] relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 text-xs text-gray-400">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Trading Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <BarChart3 size={16} className="text-blue-400" />
                        <span className="text-white text-sm font-medium">
                          交易大厅
                        </span>
                      </div>
                      <div className="text-green-400 text-xs">● 实时</div>
                    </div>

                    {/* Price Cards */}
                    <div className="space-y-3 mb-4">
                      <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-xs">
                            BTC/USDT
                          </span>
                          <div
                            className={`flex items-center text-xs ${isBtcRising ? "text-green-400" : "text-red-400"}`}
                          >
                            {isBtcRising ? (
                              <TrendingUp size={12} />
                            ) : (
                              <TrendingDown size={12} />
                            )}
                          </div>
                        </div>
                        <div
                          className={`text-lg font-bold transition-colors duration-300 ${isBtcRising ? "text-green-400" : "text-red-400"}`}
                          key={`btc-${animationKey}`}
                        >
                          ${btcPrice.toFixed(2)}
                        </div>
                        <div
                          className={`text-xs ${isBtcRising ? "text-green-400" : "text-red-400"}`}
                        >
                          {isBtcRising ? "+" : "-"}
                          {Math.abs(btcChangePct).toFixed(2)}%
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-xs">
                            ETH/USDT
                          </span>
                          <div
                            className={`flex items-center text-xs ${isRising ? "text-green-400" : "text-red-400"}`}
                          >
                            {isRising ? (
                              <TrendingUp size={12} />
                            ) : (
                              <TrendingDown size={12} />
                            )}
                          </div>
                        </div>
                        <div
                          className={`text-lg font-bold transition-colors duration-300 ${isRising ? "text-green-400" : "text-red-400"}`}
                          key={`eth-${animationKey}`}
                        >
                          ${currentPrice.toFixed(2)}
                        </div>
                        <div
                          className={`text-xs ${isRising ? "text-green-400" : "text-red-400"}`}
                        >
                          {isRising ? "+" : "-"}
                          {Math.abs(ethChangePct).toFixed(2)}%
                        </div>
                      </div>
                    </div>

                    {/* Portfolio Summary */}
                    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-3 mb-4">
                      <div className="text-gray-400 text-xs mb-1">投资组合</div>
                      <div className="text-white text-xl font-bold">
                        $12,458.67
                      </div>
                      <div className="text-green-400 text-xs">
                        +$1,234.56 (11.2%)
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <button className="bg-green-600 hover:bg-green-700 py-2 rounded-lg text-xs font-medium transition-colors">
                          买入
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 py-2 rounded-lg text-xs font-medium transition-colors">
                          卖出
                        </button>
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2 rounded-lg text-xs font-medium transition-all duration-300">
                        智能交易
                      </button>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-around bg-gray-800/80 rounded-full py-1">
                        <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[2rem] blur-xl -z-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
