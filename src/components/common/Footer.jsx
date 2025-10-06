import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const footerLinks = {
    kategori: [
      { name: "Digital & Teknologi", url: "#" },
      { name: "Pemasaran", url: "#" },
      { name: "Manajemen Bisnis", url: "#" },
      { name: "Pengembangan Diri", url: "#" },
      { name: "Desain", url: "#" },
    ],
    perusahaan: [
      { name: "Tentang Kami", url: "#" },
      { name: "FAQ", url: "#" },
      { name: "Kebijakan Privasi", url: "#" },
      { name: "Ketentuan Layanan", url: "#" },
      { name: "Bantuan", url: "#" },
    ],
    komunitas: [
      { name: "Tips Sukses", url: "#" },
      { name: "Blog", url: "#" },
    ],
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <Link to="/" className="logo">
            <img
              src="../asset/images/Logo.png"
              alt="VideoBelajar"
              className="logo-img"
            />
          </Link>
          <div className="about">
            <b>
              Gali Potensi Anda Melalui Pembelajaran Video dari hariesok.id!
            </b>
            <br />
            <br />
            <p>
              Jl. Usman Effendi No. 50 Lowokwaru, Malang <br />
              +62-877-7123-1234
            </p>
          </div>
        </div>

        <div className="footer-other-columns">
          <FooterColumn
            title="Kategori"
            id="kategori"
            links={footerLinks.kategori}
            isOpen={openAccordion === "kategori"}
            onToggle={() => toggleAccordion("kategori")}
          />
          <FooterColumn
            title="Perusahaan"
            id="perusahaan"
            links={footerLinks.perusahaan}
            isOpen={openAccordion === "perusahaan"}
            onToggle={() => toggleAccordion("perusahaan")}
          />
          <FooterColumn
            title="Komunitas"
            id="komunitas"
            links={footerLinks.komunitas}
            isOpen={openAccordion === "komunitas"}
            onToggle={() => toggleAccordion("komunitas")}
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="social-links">
          <SocialLink platform="linkedin" icon="fab fa-linkedin-in" />
          <SocialLink platform="facebook" icon="fab fa-facebook-f" />
          <SocialLink platform="instagram" icon="fab fa-instagram" />
          <SocialLink platform="twitter" icon="fab fa-twitter" />
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, id, links, isOpen, onToggle }) => (
  <div className="footer-column">
    <button
      className="footer-column-toggle"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <h3>{title}</h3>
      <span className="accordion-icon">{isOpen ? "∧" : ">"}</span>
    </button>
    <ul className={`footer-links ${isOpen ? "active" : ""}`}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ platform, icon }) => (
  <a href="#" className={`social-link ${platform}`} aria-label={platform}>
    <i className={icon}></i>
  </a>
);

export default Footer;
