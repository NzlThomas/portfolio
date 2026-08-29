import styles from "./App.module.css";

import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";
import { FaCopy } from "react-icons/fa";

import skills from "../../../data/skills.json";
import projects from "../../../data/projects.json";

import SkillCard from "../SkillCard/SkillCard";
import ProjectCard from "../ProjectCard/ProjectCard";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTextCopied, setIsTextCopied] = useState(false);

  function dropDownMenu() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <>
      <div className={styles.nav}>
        <p>Thomas</p>
        <RxHamburgerMenu className={styles.icon} />
      </div>
      <section className={styles.greeting}>
        <p>Salut !</p>
        <p>Moi c'est Thomas, Développeur Web Fullstack</p>
        <p>Bienvenue sur mon Portfolio 🫡</p>
      </section>
      <section className={styles.skills}>
        <h2>Compétences</h2>

        <p>Frontend</p>
        <br />
        <ul className={styles.frontendContent}>
          {skills.frontend.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} />
          ))}
        </ul>
        <br />
        <p>Backend</p>
        <br />
        <ul className={styles.backendContent}>
          {skills.backend.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} />
          ))}
        </ul>
        <br />
        <div className={styles.dropdownMenu} onClick={() => dropDownMenu()}>
          <IoIosArrowUp
            className={`${styles.leftArrow} ${
              isDropdownOpen ? styles.leftArrowOpen : ""
            }`}
          />
          <p>Autres Outils</p>
          <IoIosArrowUp
            className={`${styles.rightArrow} ${isDropdownOpen ? styles.rightArrowOpen : ""}`}
          />
        </div>

        <br />

        {isDropdownOpen && (
          <ul className={styles.toolsContent}>
            {skills.tools.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} />
            ))}
          </ul>
        )}
      </section>

      <section className={styles.projects}>
        <h3>Projets</h3>
        <ul>
          {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} />
          ))}
        </ul>
      </section>

      <section className={styles.contact}>
        <h4>Contact</h4>

        <img src="#" />
        <div
          onClick={async () => {
            await navigator.clipboard.writeText(
              "tfortinbourget.thomas@gmail.com",
              setIsTextCopied(true),
            );
            setTimeout(() => {
              setIsTextCopied(false);
            }, "2000");
          }}
          className={styles.emailContainer}
        >
          <p>tfortinbourget.thomas@gmail.com</p>
          <FaCopy />
          {isTextCopied && <p>Copié !</p>}
        </div>

        <a
          target="_blank"
          href="https://github.com/NzlThomas"
          title="Profil Github"
        >
          Retrouvez moi sur Github
        </a>
      </section>
    </>
  );
}

export default App;
