import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaGlobe } from "react-icons/fa";
import "../styles/CSKSocial.css";

const CSKSocial = () => {
    return (
        <section className="csk-social-section">
            <h2 className="csk-social-title">Follow Chennai Super Kings (CSK) on Social Media</h2>
            <div className="csk-social-links">
                <a
                    href="https://www.chennaisuperkings.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link website"
                >
                    <FaGlobe className="social-icon" /> Official Website
                </a>
                <a
                    href="https://www.facebook.com/TheChennaiSuperKings/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link facebook"
                >
                    <FaFacebook className="social-icon" /> Facebook
                </a>
                <a
                    href="https://www.instagram.com/chennaiipl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link csk-instagram"
                >
                    <FaInstagram className="social-icon" /> Instagram
                </a>
                <a
                    href="https://twitter.com/ChennaiIPL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link twitter"
                >
                    <FaTwitter className="social-icon" /> Twitter
                </a>
                <a
                    href="https://www.youtube.com/@chennaiipl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link youtube"
                >
                    <FaYoutube className="social-icon" /> YouTube
                </a>
            </div>
        </section>
    );
};

export default CSKSocial;
