import AccueilComponent from "./components/accueil";
import AproposComponent from "./components/apropos";
import MyNavbar from "./components/header";
import CarteComponent from "./components/carte";
import ContactComponent from "./components/contact";
import FooterComponenet from "./components/footer";


function App() {
  return (
    <>
      <div>
        <MyNavbar />
      </div>
      <div>
        <AccueilComponent />
        <CarteComponent />
        <AproposComponent />
        <ContactComponent/>
        <FooterComponenet />
      </div>
    </>
  );
}

export default App;
