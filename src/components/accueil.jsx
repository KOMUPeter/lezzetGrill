import { useState, useEffect } from "react";
import styles from "../styles/AccueilComponent.module.css";

import image1 from "../assets/img/poulet_assiete.png";
import image2 from "../assets/img/grills.jpeg";
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

  const scrollToCarte = () => {
    const contactSection = document.getElementById("carte");
    if (contactSection) {
      const yOffset =
        contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  const scrollToDessert = () => {
    const dessertSection = document.getElementById("dessert");
    if (dessertSection) {
      const yOffset = dessertSection.offsetTop; // Get the offset top of the desserts section
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className={styles.accueil}
      style={{
        backgroundImage: `url(${images[count]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // Set background size to contain the image
        backgroundPosition: "center",
      }}
    >
      <article className={styles.accueilHome}>
        <div>
          <h1>Lezzet Grill</h1>
          <p>
            Savourez la convenance et la saveur. Nos délices sont préparés avec
            soin, offrant une explosion de saveurs à chaque dégustation. Nous
            sommes là pour satisfaire vos envies. Découvrez la différence chez
            nous
          </p>
          <div>
            <button onClick={scrollToCarte}>Voir notre carte</button>
            <button onClick={scrollToDessert}>Voir nos desserts</button>
          </div>
        </div>
      </article>
    </section>
  );
}
