
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/header";
import HomeComponent from "./components/home";
import FooterComponenet from "./components/footer";


export default function App() {

  return (
    <>
    <div>
        <MyNavbar />
      </div>
    <div>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
      </Routes>
    </div>
    <div>
        <FooterComponenet />
      </div>
    </>
  )
}
