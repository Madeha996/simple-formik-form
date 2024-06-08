import "./App.css";
import { useState } from "react";
import BasicForm from "./components/basicForm";
import AdvancedForm from "./components/advancedForm";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <h3
          style={{ color: view === "basic" ? "#fff" : "" }}
          onClick={() => setView("basic")}
        >
          Basic
        </h3>
        <h3
          style={{ color: view === "basic" ? "#fff" : "" }}
          onClick={() => setView("advanced")}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;
