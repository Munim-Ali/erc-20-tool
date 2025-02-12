import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Router from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
