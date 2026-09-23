import styles from "./Contact.module.css";
import { IoClipboardOutline } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

import { useState } from "react";

function Contact() {
  const [isTextCopied, setIsTextCopied] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [easterEggCount, setEasterEggCount] = useState(0);

  const eG1 = new Audio("/audio/eG1.m4a");

  const eG2 = new Audio("/audio/eG2.m4a");

  function easterEgg() {
    if (easterEggCount < 4) {
      eG1.play();
      setEasterEggCount(easterEggCount + 1);
    } else if (easterEggCount === 4) {
      eG2.play();
      setEasterEggCount(easterEggCount + 1);
    } else {
      setEasterEggCount(0);
      eG1.play();
    }
  }

  return (
    <section className={styles.contact}>
      <h4 className={styles.title} id="contact">
        Contact
      </h4>

      <div className={styles.profileContainer}>
        <div className={styles.profilePicture} onClick={() => easterEgg()}>
          <img
            src="/images/pfp_chat_1.png"
            className={styles.pfpNormal}
            alt="Dessin de chat"
          />
          <img
            src={
              easterEggCount === 5
                ? "/images/pfp_chat_3.png"
                : "/images/pfp_chat_2.png"
            }
            className={styles.pfpWink}
            alt={
              easterEggCount === 5 ? "Dessin de chat énervé" : "Dessin de chat"
            }
          />
        </div>

        <div
          className={`${styles.copied} ${isAnimationActive ? styles.copiedAnimation : ""}`}
        >
          Copié !
        </div>

        <div
          onClick={async () => {
            await navigator.clipboard.writeText(
              "tfortinbourget.thomas@gmail.com",
            );

            setIsAnimationActive(true);
            setIsTextCopied(true);
            setTimeout(() => setIsAnimationActive(false), 2000);
          }}
          className={styles.emailContainer}
        >
          <p>tfortinbourget.thomas@gmail.com</p>
          <div className={styles.iconContainer}>
            {isTextCopied ? (
              <FaCheck />
            ) : (
              <IoClipboardOutline className={styles.icon} />
            )}
          </div>
        </div>

        <a
          target="_blank"
          href="https://github.com/NzlThomas"
          title="Profil Github"
          className={styles.githubLink}
        >
          Mon profil Github
          <AiFillGithub className={styles.githubIcon} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
