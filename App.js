import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// console.log(heading); // object

const parent = React.createElement("div", {id:"parent"},
React.createElement("div", {id:"child"},
[
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
]
))

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render converts heading into an object
