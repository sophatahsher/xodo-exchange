'use client';

import React, { useState } from 'react';
import ExchangeImg from '../../public/images/exchange-image.png';
import Image from 'next/image';

const ExchangeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabsData = [
    {
      id: 1,
      title: "智能化提交",
      subtitle: "智能化的体验",
      description: "以AI助手 XODO 为核心，覆盖认知、决策、交易、风控全流程，大幅降低用户交易门槛；",
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "合规安全", 
      subtitle: "合规化安全",
      description: "严格执行监管要求，多司法管辖；确保客户用户资产安全，严格的身份验证，重塑数字资产体系。",
      color: "bg-gray-600"
    },
    {
      id: 3,
      title: "长期专导向",
      subtitle: "资源优化配置", 
      description: "同时深度融合RWA、NFT、DeFi等前沿创新概念。",
      color: "bg-gray-600"
    }
  ];

  return (
    <section className="px-6 py-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          XONEX Exchange
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          下一代高速加密交易所，重塑交易体验
        </p>

        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center justify-between space-x-4 w-full max-w-2xl">
            <button className="flex-1 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                立即注册
            </button>
            <button className="flex-1 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                立即交易
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                下载App
            </button>
          </div>
        </div>

        {/* This is the parent div: grid lg:grid-cols-2 gap-12 items-center border */}
        <div className="grid lg:grid-cols-2 gap-12 items-start"> {/* Changed items-center to items-start */}

          <div className="bg-gray-900 rounded-2xl">
            <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              {/* <span className="text-gray-500">交易界面预览</span> */}
              <Image src={ExchangeImg} alt="Exchange Preview" className="rounded-lg object-cover" />
            </div>
          </div>

          <div className="exchange-right text-left space-y-3">
            <div className="lg:col-span-2 text-center mb-6 mt-0"> {/* Added lg:col-span-2 to span both columns */}
            <div className="inline-block px-6 py-3">
              <h3 className="text-xl font-bold text-white">
                交易所三大核心价值
              </h3>
            </div>
          </div>
            {/* Tabs Navigation - MODIFIED SECTION */}
            <div className="relative">
              <div className="flex rounded-full bg-[#2A303B]"> {/* Main container, dark gray background */}
                {tabsData.map((tab, index) => (
                  <React.Fragment key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        relative flex-1 py-3 text-lg transition-all duration-300 rounded-full
                        ${activeTab === tab.id
                          ? 'bg-[#48968B] text-white font-semibold' // Active tab color
                          : 'text-gray-300 hover:text-white' // Inactive tab color
                        }
                        ${activeTab === tab.id && tab.id === 1 ? 'rounded-r-none' : ''}
                        ${activeTab === tab.id && tab.id === tabsData.length ? 'rounded-l-none' : ''}
                        ${tab.id === 1 && activeTab !== 1 ? 'rounded-r-none' : ''}
                        ${tab.id === tabsData.length && activeTab !== tabsData.length ? 'rounded-l-none' : ''}

                        /* Handle non-active tab rounding when adjacent to active tab */
                        ${activeTab === tab.id - 1 && 'rounded-r-none'}
                        ${activeTab === tab.id + 1 && 'rounded-l-none'}

                        ${activeTab !== tab.id && index === 0 ? 'rounded-r-none' : ''}
                        ${activeTab !== tab.id && index === tabsData.length - 1 ? 'rounded-l-none' : ''}
                      `}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span>{tab.title}</span>
                      </div>
                    </button>
                    {/* Add divider for non-active tabs that are not the last, and not adjacent to active */}
                    {index < tabsData.length - 1 && activeTab !== tab.id && activeTab !== tab.id + 1 && (
                      <div className="h-full w-px bg-gray-600/50 my-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              </div>

            {/* Tab Content */}
            <div className="space-y-3">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${activeTab === tab.id
                      ? 'opacity-100 translate-y-0 block'
                      : 'opacity-0 translate-y-4 hidden'
                    }
                  `}
                >
                  <div className=" backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-lg font-bold text-white mb-3">
                      {tab.subtitle}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-base">
                      {tab.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;