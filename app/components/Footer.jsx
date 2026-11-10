import Link from "next/link";
import { site, whatsappLink } from "../config/site";
import { FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <img className="footer-logo" src="/logo.png"/>
              <span>
                Tread<span className="accent">Cash</span> Punjab
              </span>
            </div>
            <p>
              We buy old and used treadmills for cash across Punjab. Free visit, cash on the spot,
              free pickup.
            </p>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={`tel:${site.phoneTel}`}><FiPhone/> {site.phoneDisplay}</a></li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <FiMessageCircle/> WhatsApp us
                </a>
              </li>
              <li><FiMapPin/> {site.serviceArea}</li>
            </ul>
          </div>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} {site.name} · Sell old treadmill in Punjab, Pakistan
        </p>
      </div>
    </footer>
  );
}
