import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Indexpage from "./pages/IndexPage.";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Indexpage />} />
        <Route path={"/login"} element={<Loginpage />} />
        <Route path={"/register"} element={<Registerpage />} />
      </Route>
    </Routes>
  );
}

export default App;
