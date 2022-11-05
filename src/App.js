import "./App.css"; // leaving this here to remind that styled components will not cause a problem if you have existin CSS file in your application
import { BasicStyledComponent } from "./topics";
import { OrganizedStyledComponent } from "./topics/OrganizedStyledComponent";

function App() {
  return (
    <div className="App">
      <BasicStyledComponent />
      <OrganizedStyledComponent />
    </div>
  );
}

export default App;
