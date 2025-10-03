"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "XONEX提供哪些服务和产品？",
    answer:
      "XONEX是一家立足东南亚，面向全球的精品数字货币交易所，我们主要提供数字货币交易服务，您可以在平台内交易数百种数字货币。",
  },
  {
    question: "如何使用XONEX平台购买比特币和其他数字货币？",
    answer:
      "您可以通过我们的快捷买币功能，使用法币直接购买数字货币，或者在现货交易市场进行交易。我们支持多种支付方式和交易对。",
  },
  {
    question: "什么是数字货币？",
    answer:
      "数字货币是一种基于区块链技术的虚拟货币，具有去中心化、安全性高、交易透明等特点。比特币、以太坊等都是主流的数字货币。",
  },
  {
    question: "小哆AI有什么用？",
    answer:
      "小哆AI是您的智能交易助手，可以为您提供市场分析、交易建议、风险提醒等服务，帮助您做出更好的投资决策。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-6 py-16 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          常见问题
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] border border-gray-700 rounded-lg"
            >
              <button
                type="button"
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 mt-2">
                  <p className="flex items-center justify-start text-gray-400 text-sm">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">还有其他问题？</p>
          <div className="flex justify-center space-x-4">
            <button type="button" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
              联系客服
            </button>
            <button type="button" className="border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition-colors">
              帮助中心
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
