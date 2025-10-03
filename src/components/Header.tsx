"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { generateQRCode, generateQRCodeWithValidation } from "@/lib/utils";
import Logo from "./Logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const qrDropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <header className="relative px-6 py-4 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 rounded-full flex items-center justify-center">
            <Logo />
          </div>
          <span className="text-xl font-bold">XONEX</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            交易所
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            合约
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            AI智能交易
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            更多
          </a>
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
  );
}
