import { useState, useEffect } from "react";
import image1 from "../assets/img/assiette.png";
import image2 from "../assets/img/menuImages.png";
import image3 from "../assets/img/sandwichmenu.png";
import image4 from "../assets/img/tacosMenu.png";
import styles from "../styles/AccueilComponent.module.css";

export default function AccueilComponent() {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState('0%');
  const [forward, setForward] = useState(true);

  function shiftImage(count) {
    switch (count) {
      case 0:
        setMargin('0%');
        break;
      case 1:
        setMargin('-25%');
        break;
      case 2:
        setMargin('-50%');
        break;
      case 3:
        setMargin('-75%');
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        if (count === 4) {
          setForward(false);
        } else {
          setCount((prevCount) => prevCount + 1);
          shiftImage(count + 1);
        }
      } else {
        if (count === 0) {
          setForward(true);
        } else {
          setCount((prevCount) => prevCount - 1);
          shiftImage(count - 1);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [count, forward]);

  return (
    <>
      <section className={styles.accueil}>
        <article className={styles.carte}>
          <div>
            <h1>Lezzet Grill</h1>
            <p>Savourez la convenance et la saveur. Nos délices sont préparés avec soin, offrant une explosion de saveurs à chaque dégustation.Nous sommes là pour satisfaire vos envies. Découvrez la différence chez nous </p>
            <button>Voir notre carte</button>
          </div>
        </article>
        <article className={styles.imagesContainer}>
          <div className={styles.imgCont} style={{ marginLeft: margin }}>
            <img className={styles.imgContChild} src={image1} alt="image1" />
          </div>
          <div className={styles.imgCont}>
            <img className={styles.imgContChild} src={image2} alt="image2" />
          </div>
          <div className={styles.imgCont}>
            <img className={styles.imgContChild} src={image3} alt="image3" />
          </div>
          <div className={styles.imgCont}>
            <img className={styles.imgContChild} src={image4} alt="image4" />
          </div>
        </article>
      </section>
    </>
  );
}
