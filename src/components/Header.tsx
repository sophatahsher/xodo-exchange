"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { generateQRCode, generateQRCodeWithValidation } from "@/lib/utils";
import Logo from "./Logo";
import { scrollToSection } from "@/utils/scrollUtils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const qrDropdownRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('banner');
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeaderVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGenerateQR = async (url: string) => {
    setLoading(true);
    try {
      const qrCode = await generateQRCode(url);
      setQrCodeUrl(qrCode);

      const validatedQR = await generateQRCodeWithValidation(url, {
        width: 256,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });

      setQrCodeUrl(validatedQR);
    } catch (error) {
      console.error("QR code generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleAppDropdown = async () => {
    const newState = !isQRCodeOpen;
    setIsQRCodeOpen(newState);

    if (newState && !qrCodeUrl) {
      const appDownloadUrl = "https://xonex.exchange/download";
      await handleGenerateQR(appDownloadUrl);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        qrDropdownRef.current &&
        !qrDropdownRef.current.contains(event.target as Node)
      ) {
        setIsQRCodeOpen(false);
      }
    }

    if (isQRCodeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isQRCodeOpen]);

  // Enhanced navigation click handler with instant feedback (NO SCROLL INDICATOR)
  const handleScrollToSection = (sectionId: string) => {
    // 🚀 INSTANT: Update active section immediately on click
    setActiveSection(sectionId);
    
    setIsScrolling(true);
    setIsMobileMenuOpen(false);
    
    console.log('Instantly switching to:', sectionId);
    
    // Animate navigation item with faster transition
    const navItem = document.querySelector(`[data-section="${sectionId}"]`);
    if (navItem) {
      navItem.classList.add('nav-clicked');
      setTimeout(() => navItem.classList.remove('nav-clicked'), 200);
    }
    
    scrollToSection(sectionId, {
      offset: 100,
      duration: 800,
      easing: 'easeInOutCubic'
    });
    
    setTimeout(() => setIsScrolling(false), 800);
  };

  // Enhanced scroll tracking
  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        if (isScrolling) return;

        const currentScrollY = window.scrollY;
        
        // Track scroll progress
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (currentScrollY / docHeight) * 100;
        setScrollProgress(Math.min(100, progress));
        
        // Check if at top
        setIsAtTop(currentScrollY < 50);
        
        // Section tracking
        const sections = ['banner', 'trading-partner', 'exchange-section', 'aboutXONEX', 'diagram-section'];
        let newActiveSection = activeSection;
        
        const scrollPosition = currentScrollY + 150;
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          
          if (element) {
            const { offsetTop, offsetHeight } = element;
            const sectionMiddle = offsetTop + (offsetHeight * 0.3);
            const sectionEnd = offsetTop + (offsetHeight * 0.9);
            
            if (scrollPosition >= sectionMiddle && scrollPosition < sectionEnd) {
              newActiveSection = sectionId;
              break;
            }
          }
        }
        
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isScrolling, activeSection]);

  const navItems = [
    { id: 'exchange', label: '交易所', icon: '' },
    { id: 'contract', label: '合约', icon: '' },
    { id: 'about-xonex', label: '了解XONEX', icon: '' },
    { id: 'ai-trading', label: 'AI智能交易', icon: '' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/30 backdrop-blur-sm z-[70]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 ease-out relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={`
          fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out
          ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}
          ${isAtTop
            ? 'bg-[#0a0e1a]/70 backdrop-blur-md border-b border-gray-800/30'
            : 'bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl'
          }
        `}
      >
        <div className="px-6 py-4 flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 rounded-full flex items-center justify-center">
                <Logo />
              </div>
              <span className="text-xl font-bold">XONEX</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-section={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`
                    relative px-4 py-2.5 text-sm font-medium rounded-lg group
                    transition-all duration-150 ease-out
                    ${activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400 hover:scale-102'
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Active indicator */}
                  <div className={`
                    absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full
                    transition-all duration-100
                    ${activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                  `} />

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button
                type="button"
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-800/30"
              >
                注册/登录
              </button>

              <div className="relative">
                <button
                  type="button"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-2 rounded-lg text-sm text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                  onClick={toggleAppDropdown}
                >
                  下载App
                </button>

                {/* QR Code Dropdown */}
                {isQRCodeOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl pt-4 shadow-2xl z-50 min-w-[200px]"
                    ref={qrDropdownRef}
                  >
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-lg inline-block">
                        {loading ? (
                          <div className="w-32 h-32 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                          </div>
                        ) : qrCodeUrl ? (
                          <Image
                            src={qrCodeUrl}
                            alt="QR Code for App Download"
                            className="w-32 h-32"
                            width={128}
                            height={128}
                            unoptimized
                          />
                        ) : (
                          <div className="w-32 h-32 flex items-center justify-center bg-gray-200 text-gray-500 text-xs">
                            QR码生成失败
                          </div>
                        )}
                      </div>

                      <p className="text-gray-400 text-xs mb-3">
                        扫描二维码下载XONEX App
                      </p>

                      {/* <button
                        aria-label='Close QR Code'
                        type="button"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-800/50"
                        onClick={() => setIsQRCodeOpen(false)}
                      >
                        <X size={16} />
                      </button> */}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0e1a]/98 backdrop-blur-xl border-t border-gray-800/50">
            <nav className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-section={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`
                    flex items-center w-full text-left px-4 py-3 rounded-xl group
                    transition-all duration-100 ease-out
                    ${activeSection === item.id
                      ? 'text-cyan-400 bg-gradient-to-r from-cyan-400/15 to-blue-500/5 border-l-4 border-cyan-400' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                    }
                  `}
                >
                  <span className="flex-1">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Header Spacer */}
      <div className="h-20"></div>
    </>
  );
}