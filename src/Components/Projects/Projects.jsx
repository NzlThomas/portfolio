import styles from "./Projects.module.css";

import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../../data/projects.json";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title} id="projects">
        Projets
      </h2>
      <ul className={styles.listContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            deployment={project.deployment}
            repository={project.repository}
            backgroundColor={project.backgroundColor}
            textColor={project.textColor}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
