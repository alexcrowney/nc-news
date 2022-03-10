export function ArticleCard({ article }) {
  return (
    <article className="story">
      <h2>{article.title}</h2>
      <h3>By {article.author}</h3>
      <h3>Comments: {article.comment_count}</h3>
      <h3>Votes: {article.votes}</h3>
      <h4>Posted: {article.created_at}</h4>
    </article>
  );
}
