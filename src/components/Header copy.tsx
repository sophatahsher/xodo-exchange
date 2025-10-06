"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { generateQRCode, generateQRCodeWithValidation } from "@/lib/utils";
import Logo from "./Logo";
import { scrollToSection } from "@/utils/scrollUtils";

export default function Header1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const qrDropdownRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>('banner');
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

      // With validation
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

    // Auto-generate QR code when opening dropdown
    if (newState && !qrCodeUrl) {
      const appDownloadUrl = "https://xonex.exchange/download"; // Replace with your actual app download URL
      await handleGenerateQR(appDownloadUrl);
    }
  };

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        qrDropdownRef.current &&
        !qrDropdownRef.current.contains(event.target as Node)
      ) {
        setIsQRCodeOpen(false);
      }
    }

    // Add event listener when dropdown is open
    if (isQRCodeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isQRCodeOpen]);

  // Enhanced scroll function with animations
  const handleScrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setIsMobileMenuOpen(false);

    // Add visual feedback
    // showScrollIndicator(sectionId);

    // Animate navigation item
    const navItem = document.querySelector(`[data-section="${sectionId}"]`);
    if (navItem) {
      navItem.classList.add('nav-clicked');
      setTimeout(() => navItem.classList.remove('nav-clicked'), 100);
    }

    scrollToSection(sectionId, {
      offset: 80,
      duration: 1200,
      easing: 'easeInOutCubic'
    });

    setTimeout(() => setIsScrolling(false), 1500);
  };

  // Show scroll indicator
  const showScrollIndicator = (targetSection: string) => {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.innerHTML = `
      <div class="scroll-pulse"></div>
      <div class="scroll-text">导航至 ${getSectionLabel(targetSection)}</div>
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 13l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    `;

    document.body.appendChild(indicator);

    setTimeout(() => {
      if (indicator.parentNode) {
        indicator.remove();
      }
    }, 2000);
  };

  const getSectionLabel = (sectionId: string) => {
    const labels: { [key: string]: string } = {
      'banner': '首页',
      'trading-partner': 'AI智能交易',
      'exchange-section': '交易所',
      'aboutXONEX': '了解XONEX',
      'diagram-section': '生态系统'
    };
    return labels[sectionId] || sectionId;
  };

  // Enhanced scroll tracking with header visibility control
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Track scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / docHeight) * 100;
      setScrollProgress(Math.min(100, progress));
      
      // Check if at top
      setIsAtTop(currentScrollY < 50);
      
      // Header visibility logic - always show when scrolling up or at sections
      if (!isScrolling) {
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          // Scrolling up or near top - show header
          setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and not near top - hide header briefly
          setIsHeaderVisible(false);
          // But show it again after a short delay for easy access
          setTimeout(() => setIsHeaderVisible(true), 1000);
        }
      } else {
        // Always show during navigation
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Track active section
      if (!isScrolling) {
        const sections = ['banner', 'trading-partner', 'exchange-section', 'aboutXONEX', 'diagram-section'];
        const scrollPosition = currentScrollY + 150;
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling, lastScrollY]);

  const navItems = [
    { id: 'exchange', label: '交易所', icon: '' },
    { id: 'contract', label: '合约', icon: '' },
    { id: 'aboutXONEX', label: '了解XONEX', icon: '' },
    { id: 'AITrading', label: 'AI智能交易', icon: '' },
  ];

  return (<>
    {/* Scroll Progress Bar */}
    {/* <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/30 backdrop-blur-sm z-[70]">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 ease-out relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>
    </div> */}
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
    {/* <header className="relative px-6 py-4 flex items-center justify-between border-b border-gray-800"> */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 rounded-full flex items-center justify-center">
            <Logo />
          </div>
          <span className="text-xl font-bold">XONEX</span>
        </div>
        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            交易所
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            合约
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            了解 XONEX
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            AI智能交易
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            更多
          </a>
        </nav> */}
        <nav className="hidden md:flex items-center space-x-2">
            {navItems.slice(0).map((item) => (
              <button
                key={item.id}
                data-section={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-all duration-100 group rounded-lg
                  ${activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }
                `}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}

                {/* Active indicator */}
                <div className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full
                  bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300
                  ${activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                `} />

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </nav>
      </div>
      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center space-x-4">
        <button type="button" className="text-gray-300 hover:text-white">
          注册/登录
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
          onClick={toggleAppDropdown}
        >
          下载App
        </button>
      </div>

      {/* QR Code Dropdown */}
      {isQRCodeOpen && (
        <div
          className="absolute right-[5px] top-full mt-1 rounded-lg p-0 shadow-2xl z-50"
          ref={qrDropdownRef}
        >
          <div className="text-center">
            {/* QR Code Container */}
            <div className="rounded-lg mb-1 inline-block">
              <div className="w-32 h-32 flex items-center justify-center text-white text-xs">
                <div className="rounded-lg mb-4 inline-block">
                  {loading ? (
                    <div className="w-32 h-32 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2"></div>
                    </div>
                  ) : qrCodeUrl ? (
                    <Image
                      src={qrCodeUrl}
                      alt="QR Code for App Download"
                      className="w-32 rounded-md"
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
              </div>
            </div>

            <p className="text-gray-400 text-xs mb-3">
              扫描二维码下载XONEX App
            </p>

            {/* Platform Links */}
            {/* <div className="flex justify-center space-x-4">
                <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-xs transition-colors">
                  <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">🍎</span>
                  </div>
                  <span>iOS</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-xs transition-colors">
                  <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <span>Android</span>
                </button>
              </div> */}

            {/* Close Button */}
            {/* <button
                aria-label='Close QR Code'
                type="button"
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                onClick={() => setIsQRCodeOpen(false)}
              >
                <X size={16} />
              </button> */}
          </div>
        </div>
      )}

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1a1f2e] border-b border-gray-800 md:hidden z-50">
          <nav className="px-6 py-4 space-y-4">
            <a
              href="#"
              className="block text-gray-300 hover:text-white py-2 border-b border-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              交易所
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white py-2 border-b border-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              合约
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white py-2 border-b border-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI智能交易
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white py-2 border-b border-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              更多
            </a>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-3">
              <button
                type="button"
                className="w-full text-left text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                注册/登录
              </button>
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg text-sm text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                下载App
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
    {/* Header Spacer - prevents content jump */}
    <div className="h-20"></div>
  </>);
}
