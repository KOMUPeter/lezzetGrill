import { useState, useEffect } from "react";
import styles from "../styles/CarteComponent.module.css"; // Correct import for styles
import logoHalal from "../assets/img/logoHalal.png";
import menuTacos from "../assets/img/tacosMenu.png";
import burger from "../assets/img/burger.png";
import menuEnfant from "../assets/img/menuEnfant.png";
import sandwichTacosImg from "../assets/img/sandwichmenu.png";
import assiette from "../assets/img/assiette.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarteComponent() {
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const items = [
      "*",
      "Sauce Blanche",
      "*",
      "Harissa",
      "*",
      "Samourai",
      "*",
      "Algérienne",
      "*",
      "Mayonnaise",
      "*",
      "Ketchup",
      "*",
      "Barbecue",
      "*",
      "Moutarde",
      "*",
      "Tartare",
      "*",
      "Andalouse",
      "*",
      "Biggy",
      "*",
      "Biggy Burger",
      "*",
    ];

    let currentIndex = 0;
    let isUpdating = false;
    let intervalId;

    function updateDisplayedItems() {
      if (isUpdating) return;
      isUpdating = true;
      const endIndex = Math.min(currentIndex + 3, items.length);
      const newItems = items.slice(currentIndex, endIndex);
      setDisplayedItems(newItems);
      currentIndex = endIndex === items.length ? 0 : endIndex;
      setTimeout(() => {
        isUpdating = false;
      }, 100); // Delay to ensure previous update is completed
    }

    function handleResize() {
      if (window.innerWidth < 700) {
        intervalId = setInterval(updateDisplayedItems, 2000);
      } else {
        clearInterval(intervalId);
        setDisplayedItems(items); // Display whole list on screens larger than 700px
      }
    }

    handleResize(); // Initial call to handle screen size on component mount

    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      clearInterval(intervalId); // Clear interval when component unmounts
      window.removeEventListener("resize", handleResize); // Remove event listener
    };
  }, []);

  return (
    <section id="carte" className={styles.allCartes}>
      <h1 className={styles.cartesH1}>Nos Carte</h1>
      <ul>
        {/* FIRST MENUS CARTE */}
        <li id="menus">
          <div className={styles.menuContainer}>
            {/* right */}
            <div className={styles.menuRight}>
              <h2>MENUS</h2>
              <article>
                <div>
                  <p>Falafel Veggie</p>
                  <p className={styles.price}>10.00 €</p>
                </div>
                <div>
                  <p>Galette</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Kebab</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Köfte</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Merguez</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Américain</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Escalope</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Saucisse</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Cordon Bleu</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Tenders</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Panini</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Adana</p>
                  <p className={styles.price}>11.50 €</p>
                </div>
                <div>
                  <p>Agneau</p>
                  <p className={styles.price}>11.50 €</p>
                </div>
              </article>
            </div>

            {/* center */}
            <div className={styles.MenuCenter}>
              <article>
                <img
                  className={styles.halalLogo}
                  src={logoHalal}
                  alt="logoHalal"
                />
                <h1>LEZZET GRILL</h1>
                <div>
                  <div className={styles.barAline}>
                    <div>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                    </div>
                    <div>
                      <h2>NOS MENUS</h2>
                    </div>
                    <div>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                    </div>
                  </div>
                  <img src={burger} alt="burger" />
                  <div className={styles.smallMenus}>
                    {/* tacosMenu */}
                    <div className={styles.tacosMenu}>
                      <h4>Menu Tacos</h4>
                      <div>
                        <p>Classique</p>
                        <p className={styles.price}>12.00 €</p>
                      </div>
                      <div>
                        <p>Maxi Tacos</p>
                        <p className={styles.price}>16.00 €</p>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        {" "}
                        {/* Center the image */}
                        <img src={menuTacos} alt="menu tacos" />
                      </div>
                    </div>
                    {/* menu enfant */}
                    <div className={styles.enfantMenu}>
                      <h4>Menu Enfant</h4>
                      <div className="d-flex justify-content-between">
                        <p>Classique</p>
                        <p className={styles.price}>12.00 €</p>
                      </div>
                      <div>
                        <p>Frites</p>
                        <p>Nuggets Ou Tenders et Boisson</p>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        {" "}
                        {/* Center the image */}
                        <img src={menuEnfant} alt="menu enfant" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* left */}
            <div className={styles.menuLeft}>
              <article>
                <h2>
                  MENUS <br />
                  BURGERS
                </h2>
                <p>{"(Steak Haché Fait Maison)"}</p>
                <div>
                  <p>Double Cheese</p>
                  <p className={styles.price}>16.00 €</p>
                </div>
                <div>
                  <p>Cheese</p>
                  <p className={styles.price}>10.00 €</p>
                </div>
                <div>
                  <p>Chicken</p>
                  <p className={styles.price}>10.00 €</p>
                </div>
                <div>
                  <p>Köfte</p>
                  <p className={styles.price}>10.00 €</p>
                </div>
                <div>
                  <p>Veggie Burger</p>
                  <p className={styles.price}>9.00 €</p>
                </div>
              </article>
              <article>
                <span>*****</span>
                <p>Supplément</p>
                <div className={styles.ingredient}>
                  <p>Ingrédient</p>
                  <p>+1.00 €</p>
                </div>
                <span>*****</span>
              </article>
              <article>
                <h2>TEX MEX</h2>
                <span>{"(PAR X6"}</span>
                <div>
                  <p>Stick Mozza</p>
                  <p className={styles.price}>8.00 €</p>
                </div>
                <div>
                  <p>Chili Cheese</p>
                  <p className={styles.price}>8.00 €</p>
                </div>
                <div>
                  <p>Onion Rings</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Nuggets</p>
                  <p className={styles.price}>8.00 €</p>
                </div>
                <div>
                  <p>Tenders</p>
                  <p className={styles.price}>9.00 €</p>
                </div>
              </article>
            </div>
          </div>
          <h2 className={styles.sauce}>SAUCE</h2>
          <div className={styles.souceList}>
            {displayedItems.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </li>

        {/* SECOND SANDWICHS CARTE */}
        <li id="sandwich">
          <div className={styles.menuContainer}>
            {/* right */}
            <div className={styles.menuRight}>
              <h2>SANDWICHS</h2>
              <article>
                <div>
                  <p>Galette</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Kebab</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Köfte</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Merguez</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Américain</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Escalope</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Saucisse</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Cordon Bleu</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Tenders</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Panini</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Falafel Veggie</p>
                  <p className={styles.price}>7.00 €</p>
                </div>
                <div>
                  <p>Adana</p>
                  <p className={styles.price}>7.50 €</p>
                </div>
                <div>
                  <p>Agneau</p>
                  <p className={styles.price}>7.50 €</p>
                </div>
              </article>
            </div>

            {/* center */}
            <div  className={styles.sandwichBorder}>
              <article>
                <img
                  className={styles.halalLogo}
                  src={logoHalal}
                  alt="logoHalal"
                />
                <h1>LEZZET GRILL</h1>
                <div className={styles.sandWichesCenter}>
                  <div className={styles.barAline}>
                    <div>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                    </div>
                    <div>
                      <h2>NOS<br/>SANDWICHS</h2>
                    </div>
                    <div>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                    </div>
                  </div>
                  <img src={sandwichTacosImg} alt="burger" />
                  <div className={styles.smallSandwich}>
                    {/* tacosSandwich */}
                    <div>
                      <h2>TACOS</h2>
                      <span className={styles.sandwichTacos}>
                        {"(Viende Au Choix)"}
                      </span>
                      <div>
                        <p>Classique</p>
                        <p className={styles.price}>9.00 €</p>
                      </div>
                      <div>
                        <p>Maxi Tacos</p>
                        <p className={styles.price}>13.00 €</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* left */}
            <div className={styles.menuLeft}>
              <article>
                <h2>BURGER</h2>
                <p>{"(Steak Haché Fait Maison)"}</p>
                <div>
                  <p>Cheese</p>
                  <p className={styles.price}>16.00 €</p>
                </div>
                <div>
                  <p>Chicken</p>
                  <p className={styles.price}>10.00 €</p>
                </div>
                <div>
                  <p>Köfte</p>
                  <p className={styles.price}>10.00 €</p>
                </div>
                <div>
                  <p>Veggie</p>
                  <p className={styles.price}>9.00 €</p>
                </div>
              </article>
              <article>
                <span>*****</span>
                <p>Supplément</p>
                <div className={styles.ingredient}>
                  <p>Ingrédient</p>
                  <p>+1.00 €</p>
                </div>
                <span>*****</span>
              </article>
              <article>
                <h2>BARQUETTE</h2>
                <div>
                  <p>FRITE</p>
                  <p>VIENDE</p>
                </div>

                <div className={styles.sandwichBarquette}>
                  <div>
                    <p className={styles.price}>2.00 €</p>
                    <p>Petite</p>
                    <p className={styles.price}>6.50 €</p>
                  </div>
                  <div>
                    <p className={styles.price}>2.50 €</p>
                    <p>Moyenne</p>
                    <p className={styles.price}>7.50 €</p>
                  </div>
                  <div>
                    <p className={styles.price}>3.50 €</p>
                    <p>Grande</p>
                    <p className={styles.price}>9.50 €</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <h2 className={styles.sauce}>SAUCE</h2>
          <div className={styles.souceList}>
            {displayedItems.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </li>

        {/* SECOND ASSIETES CARTE */}
        <li id="assiettes">
          <div className={styles.menuContainer}>
            {/* right */}
            <div className={styles.menuRight}>
              <h2>NOS ASSIETTES</h2>
              <article>
                <div>
                  <p>Kebab</p>
                  <p className={styles.price}>13.00 €</p>
                </div>
                <div>
                  <p>Köfte</p>
                  <p className={styles.price}>13.00 €</p>
                </div>
                <div>
                  <p>Merguez</p>
                  <p className={styles.price}>13.00 €</p>
                </div>
                <div>
                  <p>Steak</p>
                  <p className={styles.price}>13.00 €</p>
                </div>
                <div>
                  <p>Escalope</p>
                  <p className={styles.price}>11.00 €</p>
                </div>
                <div>
                  <p>Saucisse</p>
                  <p className={styles.price}>13.00 €</p>
                </div>
                <div>
                  <p>Cordon Bleu</p>
                  <p className={styles.price}>13.00 €</p>
                </div>
                <div>
                  <p>Tenders</p>
                  <p className={styles.price}>13.00 €</p>
                </div>
                <div>
                  <p>Brochette De Poulet</p>
                  <p className={styles.price}>17.00 €</p>
                </div>
                <div>
                  <p>Adana</p>
                  <p className={styles.price}>17.00 €</p>
                </div>
                <div>
                <p>Brochette D&apos;agneau</p>
                  <p className={styles.price}>18.00 €</p>
                </div>
                <div>
                  <p>Brochette De Veau</p>
                  <p className={styles.price}>18.00 €</p>
                </div>
              </article>
            </div>

            {/* center */}
            <div className={styles.MenuCenter}>
              <article className={styles.middle}>
                <img
                  className={styles.halalLogo}
                  src={logoHalal}
                  alt="logoHalal"
                />
                <h1>LEZZET GRILL</h1>
                <div>
                  <div className={styles.barAline}>
                    <div>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                    </div>
                    <div>
                      <h2>ASSIETTES</h2>
                    </div>
                    <div>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                      <span className={styles.verticalLine}></span>
                    </div>
                  </div>
                  <img src={assiette} alt="burger" />
                  <div className={styles.smallSandwich}>
                    {/* tacosSandwich */}
                    <div>
                      <h2>Assiette Spéciale</h2>
                      <div>
                        <p>Mix Lezzet Grill</p>
                        <p className={styles.price}>18.00 €</p>
                      </div>
                      <div>
                        <p>Spéciale Lezzet Grill</p>
                        <p className={styles.price}>26.00 €</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* left */}
            <div className={styles.menuLeft}>
              <article>
                <h2>ASSIETTES WEGGIES</h2>
                <p>{"(Steak Haché Fait Maison)"}</p>
                <div>
                  <p>Salade fromage feta</p>
                  <p className={styles.price}>12.00 €</p>
                </div>
                <div>
                  <p>Salade Thon</p>
                  <p className={styles.price}>12.50 €</p>
                </div>
              </article>


              <article>
                <span>*****</span>
                <p>Supplément</p>
                <div className={styles.ingredient}>
                  <p>VIENDE</p>
                  <p>+3.50 €</p>
                </div>
                <div className={styles.ingredient}>
                  <p>SAUCE</p>
                  <p>+1.00 €</p>
                </div>
                <span>*****</span>
              </article>
            </div>
          </div>
          <h2 className={styles.sauce}>SAUCE</h2>
          <div className={styles.souceList}>
            {displayedItems.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}
