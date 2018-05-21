import React from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Button variant="raised" color="primary">
      Hello World
    </Button>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
