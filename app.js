
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [
        React.createElement("h1", {}, "h1 tag from react"),
        React.createElement("h2",{},"h2 tag from react")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [
        React.createElement("h1", {}, "h1 tag from react"),
        React.createElement("h2",{},"h2 tag from react")
    ]
  ),
]
);




// const heading =  React.createElement("h1",{id:"heading", abc:"xyz"},
// "Hello World from React!");

console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(parent);