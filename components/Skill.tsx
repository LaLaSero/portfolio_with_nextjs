import React from 'react';
import styles from './skill_board.module.css';

type Skill = {
  name: string;
  experience: string;
  level: number;
};

type SkillProps = {
  skill: Skill;
};

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillName}>{skill.name}</div>
      <div className={styles.skillExperience}>{skill.experience}</div>
      <div className={styles.skillLevel}>
        {'★'.repeat(skill.level) + '☆'.repeat(5 - skill.level)}
      </div>
    </div>
  );
};

export default Skill;
