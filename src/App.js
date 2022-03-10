import "./App.css";
import Articles from "./components/articles.js";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import DropDown from "./components/DropDown";
import ArticlesByTopic from "./components/ArticlesByTopic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>NC News </h1>
        </header>
        <DropDown />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:topic" element={<ArticlesByTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
