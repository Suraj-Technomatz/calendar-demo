import React, {Component} from "react";
// Getting data from files
import ApiData from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: ApiData
    }
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default App;
