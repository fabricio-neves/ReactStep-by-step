var React = require("react");
var ReactDom = require("react-dom");

// ReactDom.render(WHAT TO SHOW, WHERE TO SHOW)
ReactDom.render(<h1>Hello World</h1>, document.getElementById("root"));
//WHAT TO SHOW IS COMPILED BY BABEL FOR ANY BROWSER TO BE ABLE TO RENDER ALMOST ANYTHING!
//https://babeljs.io/

//var h1 = document.createElement("h1");
//h1.innerHTML = "Hello World!";
//document.getElementById("root").appendChild(h1);
