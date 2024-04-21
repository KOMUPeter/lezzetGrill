import { useState, useEffect } from "react";
import styles from "../styles/AccueilComponent.module.css";

import image1 from "../assets/img/assiette.png";
import image2 from "../assets/img/burger.png";
import image3 from "../assets/img/sandwichmenu.png";
import image4 from "../assets/img/tacosMenu.png";

export default function AccueilComponent() {
  const images = [image1, image2, image3, image4];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("carte");
    if (contactSection) {
      const yOffset =
        contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <section id="accueil"
      className={styles.accueil}
      style={{
        backgroundImage: `url(${images[count]})`,
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        backgroundPosition: "center" // Center the background image horizontally and vertically
      }}
    >
      <article className={styles.carte}>
        <div>
          <h1>Lezzet Grill</h1>
          <p>
            Savourez la convenance et la saveur. Nos délices sont préparés avec
            soin, offrant une explosion de saveurs à chaque dégustation. Nous
            sommes là pour satisfaire vos envies. Découvrez la différence chez nous
          </p>
          <button onClick={scrollToContact}>Voir notre carte</button>
        </div>
      </article>
    </section>
  );
}
