"use client";

import GradientButton from "@/components/buttons/GradientButton";
import Button from "./buttons/Button";
import {
  BarChart3,
  MessageCircle,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function TradingPartner() {
  const [isBtcRising, setIsBtcRising] = useState(false);
  const [btcPrice, setBtcPrice] = useState(67542.18);
  const [isRising, setIsRising] = useState(true);
  const [currentPrice, setCurrentPrice] = useState(41358.93);
  const [animationKey, setAnimationKey] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simulate price changes
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      // ETH Price
      const ethChange = (Math.random() - 0.5) * 100;
      setCurrentPrice((prev) => {
        const newPrice = prev + ethChange;
        setIsRising(ethChange > 0);
        return newPrice;
      });

      // BTC Price
      const btcChange = (Math.random() - 0.5) * 200;
      setBtcPrice((prev) => {
        const newPrice = prev + btcChange;
        setIsBtcRising(btcChange > 0);
        return newPrice;
      });

      setAnimationKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isClient]);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              XODO (小哆)
            </span>{" "}
            - 你的 AI 加密交易伙伴
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 px-4">
            智能AI对话，解答第一一手上的疑问资产产品 (NFT)。
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <GradientButton variant="primary" className="w-full sm:w-auto">
              学习小哆
            </GradientButton>
            <Button variant="outline" className="w-full sm:w-auto">
              现在和小哆聊一今时
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Features */}
          <div className="order-2 lg:order-1">
            {/* Section Header */}
            <div className="text-center lg:text-left mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                小哆核心功能
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                解锁 AI 交易新范式，让每一次决策都充满智慧。
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-3 sm:space-y-5">
              {/* 小哆NFT Feature Card */}
              <div className="bg-[#1A1C25] backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      小哆NFT
                    </h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      承载交易所用户身份价值，可用于兑换生态权益、空投福利。
                    </p>

                    {/* Action Links */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                      <button className="flex items-center justify-center sm:justify-start space-x-2 text-blue-400 hover:text-blue-300 transition-colors group">
                        <span className="text-sm font-medium">查看权益</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      <button className="flex items-center justify-center sm:justify-start space-x-2 text-blue-400 hover:text-blue-300 transition-colors group">
                        <span className="text-sm font-medium">查看NFT</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI 新手引导和策略辅助 Feature Card */}
              <div className="bg-[#1A1C25] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      AI 新手引导和策略辅助
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      从注册→入金→首单，全流程辅助你入门，提供智能交易策略，让交易不再需要专业知识。
                    </p>
                  </div>
                </div>
              </div>

              {/* 社区任务 & 积分 Feature Card */}
              <div className="bg-[#1A1C25] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      社区任务 & 积分
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      通过完成任务，领取积分，兑换奖励，实现边玩边赚。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockups */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative flex justify-center items-center scale-80 sm:scale-80 md:scale-90 lg:scale-90 xl:scale-100">
              {/* First Phone - AI Chat Interface (Back/Left) */}
              <div className="relative z-10">
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] p-2 sm:p-3 shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                  <div className="bg-[#1a1d29] rounded-[1.5rem] p-3 sm:p-4 h-[400px] sm:h-[450px] w-[180px] sm:w-[200px] relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* AI Chat Header */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                        <MessageCircle size={10} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white text-xs font-medium">
                          小哆 AI
                        </div>
                        <div className="text-green-400 text-xs">● 在线</div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-2 mb-3">
                      <div className="bg-gray-800/50 rounded-lg p-2">
                        <div className="text-gray-300 text-xs">
                          你好！我是小哆AI助手
                        </div>
                      </div>
                      <div className="bg-blue-600/20 rounded-lg p-2 ml-6">
                        <div className="text-blue-300 text-xs">分析BTC走势</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-2">
                        <div className="text-gray-300 text-xs">
                          BTC目前上升趋势...
                        </div>
                      </div>
                    </div>

                    {/* XODO Branding */}
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl p-2 mb-3 text-center">
                      <div className="text-white text-sm font-bold mb-1">
                        <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                          XODO
                        </span>
                      </div>
                      <div className="text-blue-100 text-xs">AI交易助手</div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-1 mb-3">
                      <button className="bg-gray-700/50 py-1 px-1 rounded text-xs hover:bg-gray-600/50 transition-colors">
                        分析
                      </button>
                      <button className="bg-gray-700/50 py-1 px-1 rounded text-xs hover:bg-gray-600/50 transition-colors">
                        建议
                      </button>
                      <button className="bg-gray-700/50 py-1 px-1 rounded text-xs hover:bg-gray-600/50 transition-colors">
                        风险
                      </button>
                    </div>

                    {/* Input Area */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-gray-800 rounded-full px-3 py-1 text-xs text-gray-400">
                        输入消息...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur-xl -z-10 animate-pulse"></div>
              </div>

              {/* Second Phone - Trading Interface (Front/Right - Overlapping) */}
              <div className="relative z-20 -ml-12 sm:-ml-16">
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] p-2 sm:p-3 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  <div className="bg-[#1a1d29] rounded-[1.5rem] p-3 sm:p-4 h-[400px] sm:h-[450px] w-[200px] sm:w-[220px] relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Trading Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <BarChart3 size={12} className="text-blue-400" />
                        <span className="text-white text-xs font-medium">
                          交易大厅
                        </span>
                      </div>
                      <div className="text-green-400 text-xs">● 实时</div>
                    </div>

                    {/* Price Cards */}
                    {isClient ? (
                      <div className="space-y-2 mb-3">
                        <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-400 text-xs">
                              BTC/USDT
                            </span>
                            <div
                              className={`flex items-center text-xs ${isBtcRising ? "text-green-400" : "text-red-400"}`}
                            >
                              {isBtcRising ? (
                                <TrendingUp size={10} />
                              ) : (
                                <TrendingDown size={10} />
                              )}
                            </div>
                          </div>
                          <div
                            className={`text-sm font-bold transition-colors duration-300 ${isBtcRising ? "text-green-400" : "text-red-400"}`}
                            key={`btc-${animationKey}`}
                          >
                            ${btcPrice.toFixed(0)}
                          </div>
                          <div
                            className={`text-xs ${isBtcRising ? "text-green-400" : "text-red-400"}`}
                          >
                            +2.76%
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-400 text-xs">
                              ETH/USDT
                            </span>
                            <div
                              className={`flex items-center text-xs ${isRising ? "text-green-400" : "text-red-400"}`}
                            >
                              {isRising ? (
                                <TrendingUp size={10} />
                              ) : (
                                <TrendingDown size={10} />
                              )}
                            </div>
                          </div>
                          <div
                            className={`text-sm font-bold transition-colors duration-300 ${isRising ? "text-green-400" : "text-red-400"}`}
                            key={`eth-${animationKey}`}
                          >
                            ${currentPrice.toFixed(0)}
                          </div>
                          <div
                            className={`text-xs ${isRising ? "text-green-400" : "text-red-400"}`}
                          >
                            +1.24%
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2 mb-3">
                        <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-400 text-xs">
                              BTC/USDT
                            </span>
                            <TrendingUp size={10} className="text-green-400" />
                          </div>
                          <div className="text-sm font-bold text-green-400">
                            $67,542
                          </div>
                          <div className="text-xs text-green-400">+2.76%</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-400 text-xs">
                              ETH/USDT
                            </span>
                            <TrendingUp size={10} className="text-green-400" />
                          </div>
                          <div className="text-sm font-bold text-green-400">
                            $41,359
                          </div>
                          <div className="text-xs text-green-400">+1.24%</div>
                        </div>
                      </div>
                    )}

                    {/* Portfolio Summary */}
                    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-2 mb-3">
                      <div className="text-gray-400 text-xs mb-1">投资组合</div>
                      <div className="text-white text-sm font-bold">
                        $12,458
                      </div>
                      <div className="text-green-400 text-xs">+11.2%</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-1">
                        <button className="bg-green-600 hover:bg-green-700 py-1 rounded text-xs font-medium transition-colors">
                          买入
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 py-1 rounded text-xs font-medium transition-colors">
                          卖出
                        </button>
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-1 rounded text-xs font-medium transition-all duration-300">
                        智能交易
                      </button>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex justify-around bg-gray-800/80 rounded-full py-1">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
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
    </>
  );
}
