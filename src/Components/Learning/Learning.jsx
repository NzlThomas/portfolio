import styles from "./Learning.module.css";
import SkillCard from "../SkillCard/SkillCard";
import { AiFillGithub } from "react-icons/ai";
import skills from "../../../data/skills.json";

function Learning() {
  return (
    <div className={styles.learningContainer}>
      <h4 className={styles.title} id="learning">
        En progression
      </h4>
      <div className={styles.learningCard}>
        <ul className={styles.learningContent}>
          {skills.learning.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
        <p className={styles.description}>
          Je travaille actuellement sur TypeScript et le TDD à travers un projet
          personnel de recettes de cuisine.
        </p>
        <a
          target="_blank"
          href="https://github.com/NzlThomas/recipes-backend"
          title="Profil Github"
          className={styles.githubLink}
        >
          Voir le repository
          <AiFillGithub className={styles.githubIcon} />
        </a>
      </div>
    </div>
  );
}

export default Learning;
