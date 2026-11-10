import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/Providers";
import { site, whatsappLink } from "./config/site";
import { FiMessageCircle } from "react-icons/fi";

export const metadata = {
  metadataBase: new URL("https://treadcash-punjab.vercel.app"),
  title: {
    default: "Sell Old Treadmill in Punjab | Cash on Spot – TreadCash Punjab",
    template: "%s | TreadCash Punjab",
  },
  description:
    "We buy old and used treadmills for instant cash across Punjab. Free visit, free pickup and cash on the spot in Lahore, Faisalabad, Multan and more. Message us on WhatsApp.",
  keywords: [
    "sell old treadmill Punjab",
    "used treadmill buyers Lahore",
    "sell my treadmill Pakistan",
    "second hand treadmill Punjab",
    "treadmill buyer Faisalabad",
    "treadmill buyer Multan",
    "we buy old gym equipment Punjab",
    "old treadmill cash Pakistan",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sell Old Treadmill in Punjab | Cash on Spot",
    description:
      "Instant cash for your old treadmill. Free visit and pickup across Punjab. Send your details on WhatsApp for a quick quote.",
    url: "/",
    siteName: "TreadCash Punjab",
    locale: "en_PK",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TreadCash Punjab - we buy old treadmills for cash" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Old Treadmill in Punjab | Cash on Spot",
    description: "Instant cash for your old treadmill. Free visit and pickup across Punjab.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/meta.png", type: "image/png", sizes: "512x512"  }],
    shortcut: "/meta.png",
    apple: "/meta.png",
  },
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
