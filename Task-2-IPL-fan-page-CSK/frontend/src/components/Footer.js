import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p className="footer-text">
                    Developed by <strong className="hover-red">Dhruv Pratap Singh</strong>
                </p>
            </div>

            <div className="footer-center">
                <p className="footer-text">
                    © <span className="hover-red">{new Date().getFullYear()}</span> CSK Fan Page (Prototype) | All Rights Reserved
                </p>
            </div>

            <div className="footer-right">
                <a href="https://github.com/iamdpsingh" target="_blank" rel="noopener noreferrer" className="footer-link github">
                    <FaGithub className="footer-icon" /> <span>GitHub</span>
                </a>
                <a href="https://www.instagram.com/iam_dpsingh/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-link instagram">
                    <FaInstagram className="footer-icon" /> <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/dhruv-pratap-singh-088442253/" target="_blank" rel="noopener noreferrer" className="footer-link linkedin">
                    <FaLinkedin className="footer-icon" /> <span>LinkedIn</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
