import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsSection = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/news")
            .then((response) => setNews(response.data))
            .catch((error) => console.error("Error fetching news:", error));
    }, []);

    return (
        <div className="py-10 px-6 bg-gray-100">
            <h2 className="text-center text-3xl font-bold text-yellow-700 mb-6">Latest CSK News 📰</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((article) => (
                    <div key={article._id} className="bg-white shadow-lg p-4 rounded-lg">
                        <h3 className="text-lg font-bold">{article.title}</h3>
                        <p className="text-gray-600">{article.content.slice(0, 100)}...</p>
                        <p className="text-xs text-gray-400 mt-2">{new Date(article.date).toDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
