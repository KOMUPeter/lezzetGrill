import AccueilComponent from "./accueil";
import AproposComponent from "./apropos";
import CarteComponent from "./carte";
import ContactComponent from "./contact";


export default function HomeComponent() {
  return (
    <>
      <div>
        <AccueilComponent />
        <CarteComponent />
        <AproposComponent />
        <ContactComponent/>
      </div>
    </>
  );
}
