import React, { useState } from "react";

function ToDoItem(props) {
  const [style, setStyle] = useState({});
  return (
    <div
      onClick={() => setStyle({ textDecoration: "line-through" })}
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={style}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
