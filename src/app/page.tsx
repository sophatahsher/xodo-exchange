"use client";

import About from "@/components/About";
import Banner from "@/components/Banner";
import ExchangeSection from "@/components/Exchange";
// import Button from "@/components/buttons/Button";
// import XonexDiagram from "@/components/Diagram";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TradingPartner from "@/components/TradingPartner";
import { Banknote, Bitcoin, Mailbox, PiggyBank } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Banner />

      {/* Features Grid */}
      <section className="px-6 py-10 lg:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Banknote />,
                title: "RWA",
                desc: "Real-World Asset，真实资产的数字化，产品包含黄金、房产等。",
              },
              {
                icon: <Bitcoin />,
                title: "NFT",
                desc: "创建 AI 数字，有元宇宙玩法资产兼容多条重要区块链。",
              },
              {
                icon: <Mailbox />,
                title: "OTC",
                desc: "智能匹配交易对，完成即时的线下交易服务。",
              },
              {
                icon: <PiggyBank />,
                title: "理财",
                desc: "享有多元理财途径，自动理财，完全半人工管理收益。",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[#171B21] rounded-xl p-6 border border-[#282E39] hover:scale-105 transition-transform"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#233A3C] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XONEX Exchange Section */}
      <ExchangeSection />

      {/* Core Features */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">核心功能</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📊",
                title: "量化交易",
                desc: "智能交易策略，自动执行交易指令。",
              },
              {
                icon: "📈",
                title: "合约交易",
                desc: "灵活杠杆工具，灵活调整多空仓位。",
              },
              {
                icon: "💰",
                title: "OTC交易",
                desc: "场外交易支持交易对，智能排行， 安全，支持法币交易体系。",
              },
              {
                icon: "🔐",
                title: "安全保障",
                desc: "高级安全措施保护，有限风险防提醒策略。",
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XODO AI Section */}
      <TradingPartner />

      {/* Features Section */}
      {/* <XonexDiagram /> */}

      <About />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
