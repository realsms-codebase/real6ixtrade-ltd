import React, { useState } from "react";
import {
  FiArrowRight,
  FiMenu,
  FiX,
  FiShoppingCart,
  FiSettings,
  FiShield,
  FiTruck,
  FiAward,
  FiHeadphones,
  FiTag,
  FiUsers,
  FiZap,
  FiCheck,
  FiGlobe,
  FiPackage,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import "./App.css";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="real6ix-page">

      {/* ================= NAVBAR ================= */}
      <header className="real6ix-navbar">
        <div className="real6ix-nav-container">

          <a href="#home" className="real6ix-logo" onClick={closeMenu}>
            <div className="logo-mark">
              <span>R</span>
            </div>

            <div className="logo-text">
              <strong>REAL6IX</strong>
              <small>TRADE LIMITED</small>
            </div>
          </a>

          <nav className={`real6ix-nav ${menuOpen ? "open" : ""}`}>
            <button
              className="mobile-close"
              onClick={closeMenu}
            >
              <FiX />
            </button>

            <a href="#home" onClick={closeMenu} className="active">
              Home
            </a>

            <a href="#products" onClick={closeMenu}>
              Products
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#about" onClick={closeMenu}>
              About Us
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="#contact"
              className="mobile-cta"
              onClick={closeMenu}
            >
              Get In Touch
              <FiArrowRight />
            </a>
          </nav>

          <a href="#contact" className="nav-cta">
            Get In Touch
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>

        </div>
      </header>

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMenu}
        />
      )}

      {/* ================= HERO ================= */}
      <main>

        <section className="hero" id="home">

          <div className="hero-container">

            <div className="hero-content">

              <span className="section-label">
                REAL6IX TRADE LIMITED
              </span>

              <h1>
                Quality Goods &{" "}
                <span>Reliable Services</span>{" "}
                for a Better You
              </h1>

              <p>
                At REAL6IX TRADE LIMITED, we provide
                high-quality goods and professional services
                designed to meet your everyday needs and
                business goals.
              </p>

              <div className="hero-buttons">

                <a
                  href="#products"
                  className="primary-btn"
                >
                  Shop Our Products
                  <FiArrowRight />
                </a>

                <a
                  href="#services"
                  className="secondary-btn"
                >
                  Explore Our Services
                </a>

              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-glow"></div>

              <div className="hero-note">
                <strong>Your Needs</strong>
                <span>Our Priority</span>
                <i></i>
              </div>

              <div className="product-display">

                <div className="plant">
                  <div className="plant-pot"></div>
                  <div className="leaf leaf-1"></div>
                  <div className="leaf leaf-2"></div>
                  <div className="leaf leaf-3"></div>
                  <div className="leaf leaf-4"></div>
                </div>

                <div className="shopping-bag">
                  <div className="bag-handle"></div>

                  <div className="bag-logo">
                    <div className="mini-logo">R</div>
                    <strong>REAL6IX</strong>
                    <small>TRADE LIMITED</small>
                  </div>
                </div>

                <div className="box box-one"></div>
                <div className="box box-two"></div>

                <div className="laptop">
                  <div className="laptop-screen">
                    <div className="screen-content">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="laptop-base"></div>
                </div>

                <div className="phone">
                  <div className="phone-camera"></div>
                </div>

                <div className="headphones">
                  <div className="headphone-arc"></div>
                  <div className="ear left-ear"></div>
                  <div className="ear right-ear"></div>
                </div>

                <div className="speaker"></div>
                <div className="earbuds"></div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= TRUST BAR ================= */}
        <section className="trust-bar">

          <div className="trust-container">

            <div className="trust-item">
              <div className="trust-icon">
                <FiShield />
              </div>

              <div>
                <strong>Trusted & Secure</strong>
                <span>Your satisfaction is our priority</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <FiTruck />
              </div>

              <div>
                <strong>Fast & Reliable Delivery</strong>
                <span>Get what you need, when you need it</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <FiAward />
              </div>

              <div>
                <strong>Quality Products & Services</strong>
                <span>We deliver only the best</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <FiHeadphones />
              </div>

              <div>
                <strong>Dedicated Support</strong>
                <span>We're here to help</span>
              </div>
            </div>

          </div>

        </section>

        {/* ================= PRODUCTS / SERVICES ================= */}
        <section className="offers-section" id="products">

          <div className="section-container">

            <div className="offers-heading">
              <span className="section-label">
                WHAT WE OFFER
              </span>

              <h2>
                Our Products & Services
              </h2>

              <p>
                From everyday essentials to specialized
                solutions, REAL6IX TRADE LIMITED has you
                covered.
              </p>
            </div>

            <div className="offers-grid">

              {/* GOODS */}
              <div className="offer-card goods-card">

                <div className="offer-content">

                  <div className="offer-icon">
                    <FiShoppingCart />
                  </div>

                  <h3>Goods</h3>

                  <p>
                    High-quality products for home,
                    office and lifestyle.
                  </p>

                  <ul>
                    <li>
                      <FiCheck />
                      Electronics & Gadgets
                    </li>

                    <li>
                      <FiCheck />
                      Fashion & Accessories
                    </li>

                    <li>
                      <FiCheck />
                      Home & Living
                    </li>

                    <li>
                      <FiCheck />
                      General Merchandise
                    </li>
                  </ul>

                  <a href="#contact" className="offer-link">
                    Browse Products
                    <FiArrowRight />
                  </a>

                </div>

                <div className="goods-visual">
                  <div className="fake-monitor"></div>
                  <div className="shoe shoe-one"></div>
                  <div className="shoe shoe-two"></div>
                  <div className="watch"></div>
                </div>

              </div>

              {/* SERVICES */}
              <div
                className="offer-card services-card"
                id="services"
              >

                <div className="offer-content">

                  <div className="offer-icon service-icon">
                    <FiSettings />
                  </div>

                  <h3>Services</h3>

                  <p>
                    Professional services to help you
                    and your business grow.
                  </p>

                  <ul>
                    <li>
                      <FiCheck />
                      Business Support Services
                    </li>

                    <li>
                      <FiCheck />
                      Procurement & Supply
                    </li>

                    <li>
                      <FiCheck />
                      Consultation & Advisory
                    </li>

                    <li>
                      <FiCheck />
                      Custom Solutions
                    </li>
                  </ul>

                  <a href="#contact" className="offer-link green">
                    Learn More
                    <FiArrowRight />
                  </a>

                </div>

                <div className="services-visual">

                  <div className="desk">
                    <div className="desk-laptop"></div>
                    <div className="desk-screen"></div>
                    <div className="desk-keyboard"></div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= ABOUT ================= */}
        <section className="about-section" id="about">

          <div className="section-container">

            <div className="about-heading">
              <span className="section-label">
                WHY CHOOSE US
              </span>

              <h2>We Make It Simple</h2>
            </div>

            <div className="benefits-grid">

              <div className="benefit">
                <div className="benefit-icon">
                  <FiAward />
                </div>

                <h3>Top Quality</h3>

                <p>
                  We source and deliver only the best.
                </p>
              </div>

              <div className="benefit">
                <div className="benefit-icon">
                  <FiTag />
                </div>

                <h3>Affordable Prices</h3>

                <p>
                  Great value for your money.
                </p>
              </div>

              <div className="benefit">
                <div className="benefit-icon">
                  <FiUsers />
                </div>

                <h3>Customer Focused</h3>

                <p>
                  Your needs drive our business.
                </p>
              </div>

              <div className="benefit">
                <div className="benefit-icon">
                  <FiZap />
                </div>

                <h3>Fast & Efficient</h3>

                <p>
                  Quick response and delivery on time.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="cta-section" id="contact">

          <div className="cta-container">

            <div className="cta-content">

              <span>READY TO GET STARTED?</span>

              <h2>
                Shop, Order or Enquire Today
              </h2>

              <p>
                Experience quality products and professional
                services with REAL6IX TRADE LIMITED.
              </p>

            </div>

            <a href="mailto:info@real6ixtrade.com" className="cta-button">
              Contact Us
              <FiArrowRight />
            </a>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <a href="#home" className="real6ix-logo">

              <div className="logo-mark">
                <span>R</span>
              </div>

              <div className="logo-text">
                <strong>REAL6IX</strong>
                <small>TRADE LIMITED</small>
              </div>

            </a>

            <p>
              Quality Goods&nbsp; | &nbsp;Reliable Services
              &nbsp; | &nbsp;Your Satisfaction
            </p>

          </div>

          <div className="footer-contact">

            <div className="footer-contact-item">
              <span>Address</span>
              <p>
                Lagos, Nigeria
              </p>
            </div>

            <div className="footer-contact-item">
              <span>Email</span>
              <a href="mailto:info@real6ixtrade.com">
                info@real6ixtrade.com
              </a>
            </div>

            <div className="footer-contact-item">
              <span>Phone</span>
              <a href="tel:+2340000000000">
                +234 000 000 0000
              </a>
            </div>

          </div>

          <div className="social-links">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} REAL6IX TRADE LIMITED. All rights reserved.
          </span>

          <span>
            Building trust through quality and service.
          </span>

        </div>

      </footer>

    </div>
  );
};

export default LandingPage;