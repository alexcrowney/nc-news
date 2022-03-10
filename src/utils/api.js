import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-seminar-2-2.herokuapp.com/api/",
});

export const getArticles = (topic) => {
  return newsApi.get(`/articles`, { params: { topic: topic } }).then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};
