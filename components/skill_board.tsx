import React from 'react';
import Skill from './Skill'; // Skillコンポーネントのパスを適切に設定
import styles from './skill_board.module.css';
import SkillCard from './SkillCard';

type SkillsBoardProps = {
  skills: Skill[];
};

const skillsData = [
	{
	  category: "プログラミング言語",
	  skills: [
		{ name: "C", experience: "だいたい書ける", level: 5 },
		{ name: "C++", experience: "learner", level: 1 },
		{ name: "Python", experience: "普段使い", level: 3 },
		{ name: "Rust", experience: "learner", level: 0},
	  ],
	},
	{
	  category: "バックエンド",
	  skills: [
		{ name: "Node.js", experience: "一週間", level: 1 },
		{ name: "Express", experience: "2年", level: 4 },
		// その他のバックエンドスキル...
	  ],
	},
	{
	  category: "保有資格",
	  skills: [
		{ name: "TOEIC L&R", experience: "score: 860", level: 0 }, // level プロパティを追加
		// その他のバックエンドスキル...
	  ],
	},
  ];
  
const SkillsBoard: React.FC = () => {
	return (
	  <div className={styles.skillsBoard}>
		{skillsData.map((data, index) => (
		  <SkillCard key={index} category={data.category} skills={data.skills} />
		))}
	  </div>
	);
  };
  

export default SkillsBoard;
