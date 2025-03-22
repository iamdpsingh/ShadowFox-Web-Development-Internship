import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/NewsSection.css";

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/news")
            .then((response) => {
                setNews(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
                setError("Failed to load news. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="news-section">
            <h2 className="news-title">Latest CSK News 📰</h2>

            {loading && <p className="loading-text">Loading news...</p>}
            {error && <p className="error-text">{error}</p>}
            {!loading && !error && news.length === 0 && (
                <p className="loading-text">No news available.</p>
            )}

            <div className="news-grid">
                {news.map((article) => (
                    <div key={article._id} className="news-card">
                        <div className="news-border"></div> {/* 🔥 Animated Border */}
                        <img src={article.image} alt={article.title} className="news-image" />
                        <div className="news-content">
                            <h3 className="news-heading">{article.title}</h3>
                            <p className="news-text">{article.content}</p>
                            <p className="news-date">
                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }).format(new Date(article.date))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
