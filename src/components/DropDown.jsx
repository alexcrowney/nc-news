import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

function DropDown() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <>
      <label for="topics">Topics</label>

      <select name="topics" id="topics">
        {topics.map((topic) => {
          return <option value={`${topic.slug}`}>{`${topic.slug}`}</option>;
        })}
      </select>
    </>
  );
}

export default DropDown;
