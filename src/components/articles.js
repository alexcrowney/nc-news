import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <ArticleCard
            className="article-card"
            key={article.title}
            article={article}
          />
        );
      })}
    </div>
  );
};

export default Articles;
