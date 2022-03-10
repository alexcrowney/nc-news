import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTopics } from "../utils/api";

function DropDown() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  const navigate = useNavigate();

  function handleChange(e) {
    navigate(`/${e.target.value}`);
  }

  return (
    <>
      <label for="topics">Topics</label>

      <select onChange={handleChange} name="topics" id="topics">
        {topics.map((topic) => {
          return <option value={`${topic.slug}`}>{`${topic.slug}`}</option>;
        })}
      </select>
    </>
  );
}

export default DropDown;
