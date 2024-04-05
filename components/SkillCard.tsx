import React from 'react';
import styles from './skill_board.module.css';

type Skill = {
	name: string;
	experience: string;
	level: number;
  };

type SkillCardProps = {
	category: string;
	skills: Skill[];
  };


  const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
	return (
	  <div className={styles.skillCard}>
		<h3>{category}</h3>
		{skills.map((skill, index) => (
		  <div key={index} className={styles.skill}>
			<div className={styles.skillName}>{skill.name}</div>
			<div className={styles.skillExperience}>{skill.experience}</div>
			<div className={styles.skillLevel}>
			  {'★'.repeat(skill.level) + '☆'.repeat(5 - skill.level)}
			</div>
		  </div>
		))}
	  </div>
	);
  };

export default SkillCard;