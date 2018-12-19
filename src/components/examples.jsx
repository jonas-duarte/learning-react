import React, { Component } from "react";
import ExampleHeader from "./exampleHeader";
import HelloWorld from "./examples/helloWorld";
import LetVarConst from "./examples/letVarConst";
import ObjectsExample from "./examples/objects";
import ThisKeyword from "./examples/thisKeyword";
import ArrowFunction from "./examples/arrowFunction";
import ArrowFunctionAndThis from "./examples/arrowFunctionAndThis";

class Examples extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <ExampleHeader title="Example 1 - Hello World" />
          <HelloWorld />
        </div>
        <div>
          <ExampleHeader title="Example 2 - Let vs Var vs Const" />
          <LetVarConst />
        </div>
        <div>
          <ExampleHeader title="Example 3 - Objects" />
          <ObjectsExample />
        </div>
        <div>
          <ExampleHeader title="Example 4 - This Keyword" />
          <ThisKeyword />
        </div>
        <div>
          <ExampleHeader title="Example 5 - Arrow Function" />
          <ArrowFunction />
        </div>
        <div>
          <ExampleHeader title="Example 6 - Arrow Function and this" />
          <ArrowFunctionAndThis />
        </div>
      </React.Fragment>
    );
  }
}

export default Examples;
