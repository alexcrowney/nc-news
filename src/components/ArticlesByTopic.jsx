import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);

  const topic = useParams().topic;

  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

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

export default ArticlesByTopic;
