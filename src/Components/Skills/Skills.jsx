import styles from "./Skills.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

import skills from "../../../data/skills.json";

import SkillCard from "../SkillCard/SkillCard";

function Skills() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function dropDownMenu() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <section className={styles.skills}>
      <h3 className={styles.title} id="skills">
        Compétences
      </h3>

      <p className={styles.skillTitle}>Frontend</p>
      <hr className={styles.separator} />
      <ul className={styles.frontendContent}>
        {skills.frontend.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </ul>
      <p className={styles.skillTitle}>Backend</p>
      <hr className={styles.separator} />
      <ul className={styles.backendContent}>
        {skills.backend.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </ul>
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

      {isDropdownOpen && (
        <ul className={styles.toolsContent}>
          {skills.tools.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Skills;
