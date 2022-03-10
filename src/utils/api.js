import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-seminar-2-2.herokuapp.com/api/",
});

export const getArticles = () => {
  return newsApi.get(`/articles`).then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const getTopicBySlug = () => {
  return newsApi.get(`/topics/:topic`).then((res) => {
    console.log(res.data);
    //return res.data.topics;
  });
};
