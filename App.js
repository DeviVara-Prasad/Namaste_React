import React from "react";
import ReactDOM from "react-dom/client"
const h1 = React.createElement(
    "h1",
    {
        id: "heading",
        key: "heading1",
    },
    "Heading 1"
)
const h2 = React.createElement(
    "h2",
    {
        id: "heading2",
        key: "heading2"
    },
    "Heading 2"
)
const div = React.createElement("div",{id:"container"},[h1,h2]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(div);