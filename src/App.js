import "./App.css"; // leaving this here to remind that styled components will not cause a problem if you have existin CSS file in your application
import { BasicStyledComponent } from "./topics";

function App() {
  return (
    <div className="App">
      <BasicStyledComponent />
    </div>
  );
}

export default App;
