import "./App.css";
import Header from "./components/Header";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";

function App() {
  return (
    <>
      <div className="w-full max-w-full overflow-x-hidden">
        <Header></Header>
        <Page1></Page1>
        <Page2></Page2>
        <Page3></Page3>
        <Page4></Page4>
        <Page5></Page5>
      </div>
    </>
  );
}

export default App;
