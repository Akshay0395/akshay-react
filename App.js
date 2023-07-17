// const heading = React.createElement("h1",
// {id:"heading", xyz:"abc"},
// "Hello World from React!");  //{} is place we give attibute to the tag
// // React.createElement -> returns js object
// // h1 -> tag, {} -> attributes(comma seperated for multiple attribute), "" -> text
// // Third argument in React.createElement is third child we can use that to pass message or to make nested tags and to pass multiple tags then pass inside [] brackets.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// //root.render -> converts the object and render the tag in html

/*
 *
 *   <div id="parent">
 *       <div id="child">
 *           <h1>Hello Akshay</h1>
 *           <h2>Hello Akshay</h2>
 *       </div>
 *   </div>
 *
 */

// const child_three = React.createElement("h2",{},"I'm h2 tag");
// const child_two = React.createElement("h1",{},"Hello Akshay");
// const child_one = React.createElement("div",{id:"child"},[child_two,child_three]);
// const parent = React.createElement("div",{id:"parent"},child_one);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
 *
 *   <div id="parent_one">
 *       <div id="child_one">
 *           <h1>Hello Parent One</h1>
 *           <h2>Hello Child One</h2>
 *       </div>
 *   </div>
 *   <div id="parent_two">
 *       <div id="child_two">
 *           <h1>Hello Parent Two</h1>
 *           <h2>Hello Child Two</h2>
 *       </div>
 *   </div>
 *
 */

const parent_one = React.createElement("div", { id: "parent_one" }, [
  React.createElement("div", { id: "child_one" }, [
    React.createElement("h1", {}, "Hello Parent One"),
    React.createElement("h2", {}, "Hello Child One"),
  ]),
  React.createElement("div", { id: "child_two" }, [
    React.createElement("h1", {}, "Hello Parent One"),
    React.createElement("h2", {}, "Hello Child Two"),
  ]),
]);
const parent_two = React.createElement(
  "div",
  { id: "parent_two" },
  React.createElement("div", { id: "child_two" }, [
    React.createElement("h1", {}, "Hello Parent Two"),
    React.createElement("h2", {}, "Hello Child Two"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([parent_one, parent_two]);
