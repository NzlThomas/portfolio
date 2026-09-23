import styles from "./ProjectCard.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa6";

function ProjectCard({
  title,
  description,
  deployment,
  repository,
  backgroundColor,
  textColor,
  image,
  alt,
}) {
  return (
    <div
      className={styles.projectContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={styles.overlay}
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <p className={styles.description}>{description}</p>

        <div className={styles.linksContainer}>
          <a
            href={repository}
            className={styles.repoLink}
            title="Voir le repository sur Github"
            target="_blank"
            style={{ backgroundColor: backgroundColor }}
          >
            Github
            <AiFillGithub className={styles.iconGh} />
          </a>
          <a
            href={deployment}
            className={styles.deploymentLink}
            title="Visiter le site"
            target="_blank"
            style={{ backgroundColor: backgroundColor }}
          >
            Visiter le site
            <FaGlobe className={styles.iconPlanet} />
          </a>
        </div>
      </div>
      <img src={image} className={styles.image} alt={alt} />
      <li className={styles.projectCard} style={{ color: textColor }}>
        {title}
      </li>
    </div>
  );
}

export default ProjectCard;
