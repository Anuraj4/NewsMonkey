import React from 'react';

export const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
    return (
        <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={imageUrl || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={title || "News Image"}
                />
                <div className="card-body">
                    <h5 className="card-title">{title || "No Title Available"}...</h5>
                    <p className="card-text">{description || "No Description Available"}...</p>
                    <a
                        href={newsUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};
