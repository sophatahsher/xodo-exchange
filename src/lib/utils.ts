import QRCode from "qrcode";

/**
 * Generate QR code as Data URL from a given URL
 * @param url - The URL to encode in the QR code
 * @param options - Optional QR code generation options
 * @returns Promise<string> - Base64 data URL of the QR code image
 */
export async function generateQRCode(
  url: string,
  options?: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  }
): Promise<string> {
  try {
    const defaultOptions = {
      width: 256,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "M" as const,
    };

    const qrOptions = { ...defaultOptions, ...options };

    const qrCodeDataURL = await QRCode.toDataURL(url, qrOptions);
    return qrCodeDataURL;
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw new Error("Failed to generate QR code");
  }
}

/**
 * Generate QR code as Canvas element
 * @param url - The URL to encode in the QR code
 * @param canvasElement - HTML Canvas element to render QR code
 * @param options - Optional QR code generation options
 */
export async function generateQRCodeToCanvas(
  url: string,
  canvasElement: HTMLCanvasElement,
  options?: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  }
): Promise<void> {
  try {
    const defaultOptions = {
      width: 256,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "M" as const,
    };

    const qrOptions = { ...defaultOptions, ...options };

    await QRCode.toCanvas(canvasElement, url, qrOptions);
  } catch (error) {
    console.error("Error generating QR code to canvas:", error);
    throw new Error("Failed to generate QR code to canvas");
  }
}

/**
 * Generate QR code as SVG string
 * @param url - The URL to encode in the QR code
 * @param options - Optional QR code generation options
 * @returns Promise<string> - SVG string of the QR code
 */
export async function generateQRCodeAsSVG(
  url: string,
  options?: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  }
): Promise<string> {
  try {
    const defaultOptions = {
      width: 256,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "M" as const,
    };

    const qrOptions = { ...defaultOptions, ...options };

    const svgString = await QRCode.toString(url, {
      ...qrOptions,
      type: "svg",
    });
    return svgString;
  } catch (error) {
    console.error("Error generating QR code as SVG:", error);
    throw new Error("Failed to generate QR code as SVG");
  }
}

/**
 * Validate if a string is a valid URL
 * @param url - String to validate as URL
 * @returns boolean - True if valid URL, false otherwise
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generate QR code with validation
 * @param url - The URL to encode in the QR code
 * @param options - Optional QR code generation options
 * @returns Promise<string> - Base64 data URL of the QR code image
 * @throws Error if URL is invalid
 */
export async function generateQRCodeWithValidation(
  url: string,
  options?: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  }
): Promise<string> {
  if (!isValidUrl(url)) {
    throw new Error("Invalid URL provided");
  }

  return generateQRCode(url, options);
}
