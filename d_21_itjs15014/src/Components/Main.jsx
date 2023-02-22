import React, { useState } from "react";
import Button from "./Button";

const Main = () => {
  const [buttons] = useState([
    { title: "red", color: "red" },
    { title: "test2", color: "green" },
    { title: "test3", color: "blue" },
  ]);

  const [mainText, setMainText] = useState(``);

  const handleText = (title) => {
    setMainText(`setting text from ${title}`);
  };

  return (
    <div>
      <Button
        title={buttons[0].title}
        color={buttons[0].color}
        setText={handleText}
      />
      <Button
        title={buttons[1].title}
        color={buttons[1].color}
        setText={handleText}
      />
      <Button
        title={buttons[2].title}
        color={buttons[2].color}
        setText={handleText}
      />
      <h1>{mainText}</h1>
    </div>
  );
};

export default Main;
