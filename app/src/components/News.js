import React, { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";
import "../App.css";

export const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Use environment variable for the API key
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const url = `https://newsapi.org/v2/everything?q=technology&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
                console.log("Fetching from:", url);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setArticles(data.articles || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news data:", error);
                setLoading(false);
            }
        };
        fetchNews();
    }, [apiKey]);

    if (loading) return <p>Loading...</p>;
    if (!articles.length) return <p>No news articles available.</p>;

    return (
        <div className="container my-3">
            <h2 className="text-white">News - Top Headlines</h2>
            <div className="row">
                {articles.map((article, index) => (
                    <div className="col-md-4" key={index}>
                        <NewsItem
                            title={article.title.slice(0, 45)}
                            description={article.description.slice(0, 85)}
                            imageUrl={article.urlToImage}
                            newsUrl={article.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
