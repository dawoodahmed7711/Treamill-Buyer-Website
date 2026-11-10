import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/Providers";
import { site, whatsappLink } from "./config/site";
import { FiMessageCircle } from "react-icons/fi";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sell Old Treadmill in Punjab | Cash on Spot – TreadCash Punjab",
    template: "%s | TreadCash Punjab",
  },
  description: site.description,
  keywords: [
    "sell old treadmill Punjab",
    "used treadmill buyers Lahore",
    "sell my treadmill Pakistan",
    "old treadmill cash Pakistan",
    "treadmill buyer Faisalabad",
    "second hand treadmill Punjab",
    "we buy old treadmills Punjab",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sell Old Treadmill in Punjab | Cash on Spot – TreadCash Punjab",
    description: site.description,
    siteName: site.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: { card: "summary" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <a
            className="wa-float"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <FiMessageCircle/>
          </a>
        </Providers>
      </body>
    </html>
  );
}
