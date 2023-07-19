import React from "react";
import ReactDOM from "react-dom/client";

const Title = function () {
  //Normal function
  return (
    <h1 id="heading" className="head">
      Title Component
    </h1>
  );
};
const elem = <span>React element</span>;
const title = <h2>Titel Two {elem}</h2>;
const number = 10000;
const HeadingComponet = () => (
  //Arrow function

  // React.Fragment => <></>
  // <React.Fragment>
  <>
    <div id="container">
      <Title />
      {/* <Title></Title> */}
      {/* {Title()} //we can call function */}
      {title}
      <h1 id="body">React component using function component</h1>
      <h3>Number One: {number}</h3>
      <h3>Number Two: {100 * 200}</h3>
      <h3>Console Log: (See in console) {console.log(number)}</h3>
    </div>
  </>
  // </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet />);
// root.render(title);
