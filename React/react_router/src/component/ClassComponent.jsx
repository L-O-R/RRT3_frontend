// mounting , updating , unmounting
import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = { count: 0 };
    console.log("Phase 1 (Mounting): constructor()");
  }

  componentDidMount() {
    console.log("Phase 1 (Mounting): componentDidMount()");
    // Set the initial title after first render
    document.title = `You clicked 0 times`;
  }
  componentWillUnmount() {
    console.log(
      "Phase 3 (Unmounting): componentWillUnmount()"
    );
    // Cleanup: Reset the title when the component is removed
    document.title = "React App";
  }

  componentDidUpdate() {
    console.log("Phase 2 (Updating): componentDidUpdate()");
    // Update the title after every state change
    document.title = `You clicked ${this.state.count} times`;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log(
      "Phase 1 or 2 (Mounting/Updating): render()"
    );
    return (
      <div>
        <p>Check the browser tab title!</p>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increment}>Click me</button>
      </div>
    );
  }
}

export default ClassComponent;
