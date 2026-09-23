import styles from "./SkillCard.module.css";

function SkillCard({ name, icon }) {
  return (
    <div className={styles.cardContainer}>
      <li className={styles.cardName}>{name}</li>
      <img src={icon} alt={`Logo ${name}`} className={styles.skillLogo} />
    </div>
  );
}

export default SkillCard;
