import { useState, useEffect, useMemo } from "react";
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

  const items = useMemo(
    () => [
      "Sauce Blanche",
      "Harissa",
      "Samourai",
      "Algérienne",
      "Mayonnaise",
      "Ketchup",
      "Barbecue",
      "Moutarde",
      "Tartare",
      "Andalouse",
      "Biggy",
      "Biggy Burger",
    ],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedItems((prevItems) => {
        const nextIndex =
          prevItems[0] === items[0] && prevItems.length > 0 ? 6 : 0;
        return items.slice(nextIndex, nextIndex + 4);
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [items]);

  return (
    <section id="carte" className={`${styles.allCartes} container`}>
      <hr />
      <hr />
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
                      <h2>Menu Tacos</h2>
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
                      <h2>Menu Enfant</h2>
                      <div className="d-flex justify-content-between">
                        <p>Classique</p>
                        <p className={styles.price}>9.00 €</p>
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
          <h2 className={styles.sauce}>SAUCES</h2>
          <div className={styles.souceList}>
            {displayedItems.map((item, index) => (
              <p key={index}>{"* " + item + " *"}</p>
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
            <div className={styles.sandwichBorder}>
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
                      <h2>
                        NOS
                        <br />
                        SANDWICHS
                      </h2>
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
                        {"(Viande Au Choix)"}<br/>
                        {"(Kebab, Steak Haché, Köfte, Escalope, Tenders, Cordon bleu, Nuggets, Merguez)"}
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
              <article className={styles.asideLeftCenter}>
                <h2>BURGER</h2>
                <p>{"(Steak Haché Fait Maison)"}</p>
                <div>
                  <p>Cheese</p>
                  <p className={styles.price}>6.50 €</p>
                </div>
                <div>
                  <p>Chicken</p>
                  <p className={styles.price}>6.50 €</p>
                </div>
                <div>
                  <p>Köfte</p>
                  <p className={styles.price}>6.50 €</p>
                </div>
                <div>
                  <p>Veggie</p>
                  <p className={styles.price}>6.00 €</p>
                </div>
              </article>
              <article className={styles.asideLeftCenter}>
                <span>*****</span>
                <p>Supplément</p>
                <div className={styles.ingredient}>
                  <p>Ingrédient</p>
                  <p>+1.00 €</p>
                </div>
                <span>*****</span>
              </article>
              <article className={styles.asideLeftCenter}>
                <h2>BARQUETTE</h2>
                <div>
                  <p>FRITE</p>
                  <p>VIANDE</p>
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
          <h2 className={styles.sauce}>SAUCES</h2>
          <div className={styles.souceList}>
            {displayedItems.map((item, index) => (
              <p key={index}>{"* " + item + " *"}</p>
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
                  <p className={styles.price}>13.00 €</p>
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
                  <img className={styles.assieteImg} src={assiette} alt="burger" />
                  <div className={styles.smallSandwich}>
                    {/* tacosSandwich */}
                    <div className={styles.screen1024}>
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
                  <p>VIANDE</p>
                  <p>+3.50 €</p>
                </div>
                <div className={styles.ingredient}>
                  <p>SAUCE</p>
                  <p>+1.00 €</p>
                </div>
                <span>*****</span>
              </article>
              <article id="dessert" className={styles.dessert}>
                <h2>NOS DESSERTS</h2>
                <div>
                  <p>Cheesecake </p>
                  <p className={styles.price}>4.00 €</p>
                </div>
                <div>
                  <p>Tiramisu</p>
                  <p className={styles.price}>4.00 €</p>
                </div>
                <div>
                  <p>Fondant au chocolat</p>
                  <p className={styles.price}>4.00 €</p>
                </div>
                <div>
                  <p>Tarte au daim</p>
                  <p className={styles.price}>4.00 €</p>
                </div>
                <div>
                  <p>Baklava</p>
                  <p className={styles.price}>4.00 €</p>
                </div>
              </article>
            </div>
          </div>
          <h2 className={styles.sauce}>SAUCES</h2>
          <div className={styles.souceList}>
            {displayedItems.map((item, index) => (
              <p key={index}>{"* " + item + " *"}</p>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}
