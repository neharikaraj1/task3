// app.js
import { Color } from "./Components/Pallete";

function App() {
  const colorProps = {
    color1: "red",
    color2: "blue",
    color3: "green",
    color4: "yellow",
    color5: "purple",
    color6: "orange",
    color7: "pink",
    color8: "brown",
    color9: "cyan",
    color10: "magenta",
    color11: "lime",
    color12: "teal",
    color13: "indigo",
    color14: "violet",
    color15: "navy",
    color16: "gold",
    color17: "maroon",
    
  };

  return (
    <div className="App">
      <Color {...colorProps} />
    </div>
  );
}

export default App;
