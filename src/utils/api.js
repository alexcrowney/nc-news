import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-seminar-2-2.herokuapp.com/api/",
});

export const getArticles = () => {
  return newsApi.get(`/articles`).then((res) => {
    return res.data.articles;
  });
};

export const fetchArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

// export const getArticles = () => {
//     return newsApi.get("/articles").then((res) => {
//       console.log(res.data);
//       return res.data;
//     });
//   };
