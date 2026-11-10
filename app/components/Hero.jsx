"use client";
import {FiCreditCard, FiMessageCircle, FiMoney , FiTruck} from 'react-icons/fi'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images, whatsappLink } from "../config/site";
import Heroimg from '@/public/hero.avif'

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            📍 Punjab, Pakistan only
          </motion.span>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            Old Gym Machines? Sell Now! <span className="accent">Get Cash</span>
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
          >
            We come to your city, inspect your treadmill and <strong>pay you in cash on the spot</strong>.
            No shop visits, no endless online haggling.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn btn-primary">
                Sell your old treadmill
              </Link>
            </motion.div>
            <motion.a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMessageCircle/> Chat on WhatsApp
            </motion.a>
          </motion.div>

          <motion.ul
            className="hero-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <li>Free visit</li>
            <li>Cash on spot</li>
            <li>Free pickup</li>
          </motion.ul>
        </div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        >
          <div className="hero-img-wrap">
            <Image
              src={Heroimg}
              alt="Used treadmill we buy for cash in Punjab"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 520px"
            />
          </div>
          <div className="float-chip one"><FiCreditCard/> Cash payment</div>
          <div className="float-chip two"><FiTruck/> Free pickup</div>
        </motion.div>
      </div>
    </section>
  );
}
