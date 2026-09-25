import styles from "./App.module.css";
import { useState, useEffect } from "react";

import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Twirl as Hamburger } from "hamburger-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <BurgerMenu handleCloseModal={() => setIsOpen(false)} isOpen={isOpen} />

      <div className={styles.nav}>
        <img
          src="/images/pfp_chat_1.png"
          className={styles.logo}
          alt="Dessin de chat"
          draggable="false"
        />
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          className={styles.burgerIcon}
        />
      </div>
      <section className={styles.greeting} id="top">
        <p className={styles.dev}>
          <span>Développeur Web</span> <span>Fullstack</span>
        </p>
        <div className={styles.presentation}>
          <p>Enchanté, moi c'est Thomas ! </p>
          <p>
            J'ai commencé mon aventure de développeur web en 2024, vous vous
            trouvez actuellement sur mon Portfolio.
          </p>
          <p>Je vous souhaite une bonne visite 👋🏻</p>
        </div>
      </section>
      <Projects />
      <Skills />
      <Contact />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          © {currentYear} Thomas Fortin-Bourget. Tous droits réservés.
        </p>

        <a
          href="https://github.com/NzlThomas/portfolio#cr%C3%A9dits"
          target="_blank"
        >
          Crédits
        </a>
      </footer>
    </>
  );
}

export default App;
