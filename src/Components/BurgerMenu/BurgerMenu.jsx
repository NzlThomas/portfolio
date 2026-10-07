import styles from "./BurgerMenu.module.css";
import { FocusTrap } from "focus-trap-react";

function BurgerMenu({ handleCloseModal, isOpen }) {
  return (
    <FocusTrap
      active={isOpen}
      focusTrapOptions={{
        clickOutsideDeactivates: true,
      }}
    >
      <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`}>
        <div
          inert={!isOpen}
          className={`${styles.menuContainer} ${isOpen ? styles.burgerAnimation : ""}`}
        >
          <a href="#top" onClick={handleCloseModal}>
            Présentation
          </a>
          <hr className={styles.separator} />
          <a href="#projects" onClick={handleCloseModal}>
            Projets
          </a>
          <hr className={styles.separator} />
          <a href="#skills" onClick={handleCloseModal}>
            Compétences
          </a>
          <hr className={styles.separator} />
          <a href="#learning" onClick={handleCloseModal}>
            En progression
          </a>
          <hr className={styles.separator} />
          <a href="#contact" onClick={handleCloseModal}>
            Contact
          </a>
        </div>
      </div>
    </FocusTrap>
  );
}

export default BurgerMenu;
