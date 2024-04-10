import AccueilComponent from "./components/accueil";
// import CarteComponent from "./components/carte";
import MyNavbar from "./components/header";

function App() {
  return (
    <>
      <div>
        <MyNavbar />
      </div>
      <div>
        <AccueilComponent />
        {/* <CarteComponent/> */}
      </div>
    </>
  );
}

export default App;
