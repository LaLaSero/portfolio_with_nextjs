"use client";
import Navbar from '../../components/navbar';
import SkillsBoard from '../../components/skill_board';
import React from 'react';
import styles from './skill_board.module.css';
import TimelineItem from '../../components/TimelineItem';
import Image from 'next/image'; // ここで正しくインポート

const Hello = () => {
	return (
	  <>
		<div className="navbar">
			<Navbar />
		</div>
		<hr style={{ border: "1px solid #ccc", margin: "33px 0" }} />
		<div style={{textAlign: "center"}}>
			<h1>Hello!
			<span style={{ margin: "0 16px" }}>
				I&apos;m yutakagi.
			</span>
			</h1>
			<p>This is my portfolio page.</p>
		</div>
		<hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />
		<h1 style={{ textAlign: "center", margin: "20px 0" }}>My Works</h1>
		
		<style jsx>{`
			.navbar {
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 1000;
			background-color: #fff;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			}
			.main-content {
			padding-top: 60px; /* Navbarの高さに応じて調整 */
			}
			.overlay-container {
			  position: relative;
			  width: 100%;
			  height: auto;
			}
			.overlay {
			  position: absolute;
			  bottom: 0;
			  left: 5%;
			  width: 200px; /* 四角の幅を親要素の60%に */
			  height: 100px; /* 四角の高さを50pxに */
			  width: auto; 
			  background-color: rgba(0, 0, 0, 0.35); /* 半透明 */
			  padding: 10px;
			  border-radius: 15px; /* 角丸 */
			  transform: translateX(-30%);
			  transform: translateY(-30%);
			  color: white;
			  font-family: 'Arial', sans-serif; /* フォント */
			  font-size: 45px; /* フォントサイズ */
			  font-weight: bold; /* フォントの太さ */
			}
			.overlay-button {
			  display: inline-block;
			  margin-top: 5px;
			  padding: 5px 10px;
			  background-color: rgba(200, 200, 200, 0.35); /* 半透明 */
			  color: white;
			  text-decoration: none;
			  font-size: 14px;
			  border-radius: 5px;
			  float: right;
			}
			.overlay p {
				margin-top: 0; /* 最初のテキストの上マージンをなくす */
				margin-bottom: 10px; /* テキスト間の下マージンを調整する */
			  }
			  
			  .overlay a {
				margin-top: 10px; /* ボタンの上マージンを調整する */
			  }
		  `}
		</style>
		<hr style={{ border: "1px solid #ccc", margin: "30px 0" }} />
		<div id="about-me" style={{ 
			textAlign: "center",
			maxWidth: "600px",
			margin: "50px auto",
			padding: "20px",
			backgroundColor: "#f9f9f9",
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
			borderRadius: "4px"
			}}>
			<h2 style={{ 
				marginBottom: "20px",
				fontSize: "26px",
				color: "#333"
			}}>About Me</h2>
			<p style={{ 
				fontSize: "18px",
				color: "#666",
				lineHeight: "1.6"
			}}>こんにちはyutakagiです。 <br />
			現在は大学で機械工学/航空宇宙工学を学びながら，42tokyoというソフトウェアエンジニア養成期間でコンピュータサイエンスについて学んでいます。</p>
		</div>

		<div style={{ maxWidth: "800px", margin: "auto", paddingTop: "20px" }}>
			<hr style={{ border: "1px solid #ccc", margin: "30px 0" }} />
		<div style={{ maxWidth: "600px", margin: "auto" }}>
			<h1 style={{ textAlign: "center", margin: "40px 0" }}>Resume</h1>
			<TimelineItem date="\today" description="週21コマで死にかけている" />
			<TimelineItem date="2023.9" description="42Tokyo 入学" />
			<TimelineItem date="2021.4" description="名古屋大学 工学部 機械航空宇宙工学科 入学" />
			<TimelineItem date="2021.3" description="愛知県立 刈谷高等学校 卒業" />
		</div>
		</div>
		<hr style={{ border: "1px solid #ccc", margin: "40px 0" }} /> 
		<div id="skill" style={{ textAlign: "center" }}>
			<h1>My Skills</h1>
			<p>here is what I can do</p>
		</div>
		<div className={styles['skills-board']}>
		<SkillsBoard />
		</div>
	  </>
	);
}

export default Hello;
