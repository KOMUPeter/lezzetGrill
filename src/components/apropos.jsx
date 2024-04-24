export default function AproposComponent() {
    
    const scrollToContact = () => {
        const contactSection = document.getElementById("carte");
        if (contactSection) {
          const yOffset =
            contactSection.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: yOffset, behavior: "smooth" });
        }
      }; 

  return (
    <>
      <section id="apropos">
        <div className="container">
          <h2 className="text-center p-3">À propos</h2>
          <p className="p-3 m-3 mb-4">
            Laissez-vous séduire par une expérience culinaire exquise au
            restaurant Lezzet Grill, où chaque plat est préparé avec dévouement
            et précision, offrant un goût authentique du fait maison. <br />
            <br />
            Situé de manière stratégique près du dynamique Intermarche en Face
            de la Marie, Lezzet Grill vous invite à découvrir l&apos;essence
            authentique de notre cuisine.
            <br />
            <br />À la tombée de la nuit, un parking en sur sol offre à nos
            clients des stationnement exclusifs, garantissant une
            expérience culinaire sans souci. Chez Lezzet Grill, votre confort et
            votre satisfaction sont notre priorité absolue.<br/><br/><button className="p-2" onClick={scrollToContact}><span>Retour à la carte</span></button>
          </p>

          <iframe
            className="container text-center mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.5224742756713!2d6.128847015729374!3d45.90075003630899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b9d8551e3e1ff%3A0x10dddbdcf02ad7a3!2s9%20Passage%20des%20Halles%2C%2074960%20Annecy%2C%20France!5e0!3m2!1sen!2sus!4v1649990468481"
            title="Google Map showing Lezzet Grill location"
            height="450"
            style={{ border: 3 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
