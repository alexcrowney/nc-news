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

  console.log("articles ---->", articles);
  return (
    <div>
      {articles.map((article) => {
        return (
          <ArticleCard
            className="story"
            key={article.title}
            article={article}
          />
        );
      })}
    </div>
  );
};

// const SingleArticle = () => {
//   const [article, setArticle] = useState({});
//   const { article_slug } = useParams();

//   useEffect(() => {
//     fetchArticleBySlug(article_slug).then((articleData) => {
//       setArticle(articleData);
//     });
//   }, [article_slug]);

//   return (
//     <div>
//       <h2>Rendering {article_slug}</h2>
//     </div>
//   );
// };

export default Articles;
