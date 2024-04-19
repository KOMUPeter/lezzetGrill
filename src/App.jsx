// import AccueilComponent from "./components/accueil";
import CarteComponent from "./components/carte";
import FooterComponenet from "./components/footer";
import MyNavbar from "./components/header";

function App() {
  return (
    <>
      <div>
        <MyNavbar />
      </div>
      <div>
        {/* <AccueilComponent /> */}
        <CarteComponent />
        <FooterComponenet />
      </div>
    </>
  );
}

export default App;
