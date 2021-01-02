//we now can use import.
import React from "react";
import ReactDom from "react-dom";

//function render can render just one element.
//In order to render many, we just need to fit all in a div.

//Practice Time! Render a heading "My Favorite Food" and a list with your favorite food.

ReactDom.render(
  <div>
    <h1>My Favorite Food</h1>
    <ul>
      <li>Barbecue</li>
      <li>Lasagne</li>
      <li>Açaí</li>
    </ul>
  </div>,
  document.getElementById("root")
);
