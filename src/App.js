import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import './App.scss'
import Nav from "./components/Nav/Nav";
import AuthCompany from "./pages/Auth/AuthCompany";
import AuthCustomer from "./pages/Auth/AuthCustomer";
import AuthManager from "./pages/Auth/AuthManager";
import CreateStore from "./pages/Store/CreateStore";
import Catalog from "./pages/Catalog/Catalog";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/company" element={<AuthCompany/>}/>
        <Route path="/auth/customer" element={<AuthCustomer/>}/>
        <Route path="/auth/manager" element={<AuthManager/>}/>
        <Route path="/create-store" element={<CreateStore/>}/>

        <Route path="/catalog" element={<Catalog/>}/>
      </Routes>
    </div>
  );
}

export default App;
