import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';
import '../App.css';

export const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = "d2616e0496dd4d1fa4099e2ed29b3c56";

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?technology+AND+politics+AND+sports+OR+entertainment+AND+TCS+OR+Google+AND+Infosys&language=en&sources=the-times-of-india,ndtv,india-today,hindustan-times&sortBy=publishedAt&apiKey=${apiKey}`);
                const data = await response.json();
                setArticles(data.articles || []); // Set articles if available
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news data:", error);
                setLoading(false);
            }
        };
        fetchNews();
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (!articles.length) {
        return <p>No news articles available.</p>;
    }

    return (
        <div className="container my-3">
            <h2>NewsMonkey - Top Headlines</h2>
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
