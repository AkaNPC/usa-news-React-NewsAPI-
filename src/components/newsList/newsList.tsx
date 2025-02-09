import './newsList.css';
import ArticleDate from '../articleDate/articleDate';
import React from 'react';

export default function NewsList({ articles, setClickedUrl }) {
    function handlerSourceUrl(url) {
        setClickedUrl(url);
        window.open(url)
    }

    return (
        <div className="itemsListStyle">
            {articles.map((item, index) => (
                <div
                    key={index}
                    className="itemStyle"
                    onClick={() => handlerSourceUrl(item.url)}>
                    <img src={item.urlToImage} alt={item.title}></img>
                    <h4>{item.source.name}</h4>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <h6>{item.author}</h6>
                    <ArticleDate item={item} />
                </div>
            ))}
        </div>

    )
}