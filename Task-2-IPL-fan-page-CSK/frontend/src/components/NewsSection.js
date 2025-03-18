import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div className="py-10 px-6 bg-gray-100">
            <h2 className="text-center text-3xl font-bold text-yellow-700 mb-6">
                Latest CSK News 📰
            </h2>

            {/* Show loading state */}
            {loading && <p className="text-center text-gray-500">Loading news...</p>}

            {/* Show error if fetching fails */}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && news.length === 0 && (
                <p className="text-center text-gray-500">No news available.</p>
            )}

            {/* Display news only if data is available */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((article) => (
                    <div key={article._id} className="bg-white shadow-lg p-4 rounded-lg">
                        <h3 className="text-lg font-bold">{article.title}</h3>
                        <p className="text-gray-600">
                            {article.content ? article.content.slice(0, 100) : "No content available"}...
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                            {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }).format(new Date(article.date))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
