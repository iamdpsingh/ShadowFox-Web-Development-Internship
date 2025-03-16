import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Developed & Maintained by <strong>Dhruv Pratap Singh</strong></p>
            <p>© {new Date().getFullYear()} CSK Fan Page | All Rights Reserved</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
