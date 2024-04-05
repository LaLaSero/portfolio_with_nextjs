"use client";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import '@splidejs/splide/css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Navbar from '../../components/navbar';
import SkillsBoard from '../../components/skill_board';
import React, { useEffect, useState } from 'react';
import styles from './skill_board.module.css';

const Hello = () => {
	const [windowWidth, setWindowWidth] = useState(0); // 初期値を0に設定
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth); // ウィンドウの幅を更新
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		// クリーンアップ関数
		return () => window.removeEventListener('resize', handleResize);
	  }, []);
	return (
	  <>
		<div className="navbar">
			<Navbar />
		</div>
		<hr style={{ border: "1px solid #ccc", margin: "33px 0" }} /> {/* 区切り用の横線 */}
		<div style={{textAlign: "center"}}>
			<h1>I'm yutakagi</h1>
			<p>This is my portfolio page.</p>
		</div>
		<style>
		  {`
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
		<Splide
		  options={{
			rewind: true,
			width: windowWidth,
			perPage: 2,
			type: "loop",
			autoplay: true,
			perMove: 1,
		  }}
		>
		  <SplideSlide>
			<div className="overlay-container">
			  <img src="/images/fuji_boat.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
			  <div className="overlay">
				<p>Mt.fuji</p>
				<a href="https://example.com/link1" className="overlay-button">see more</a>
			  </div>
			</div>
		  </SplideSlide>
		  <SplideSlide>
			<div className="overlay-container">
			  <img src="/images/fuji_dakt.JPG" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
			  <div className="overlay">
				<p>MagicHour</p>
				<a href="https://example.com/link2" className="overlay-button">see more</a>
			  </div>
			</div>
		  </SplideSlide>
		  <SplideSlide>
			<div className="overlay-container">
			  <img src="/images/sakura.JPG" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
			  <div className="overlay">
				<p>Sakura</p>
				<a href="https://example.com/link3" className="overlay-button">see more</a>
			  </div>
			</div>
		  </SplideSlide>
		  <SplideSlide>
			<div className="overlay-container">
			  <img src="/images/highland.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
			  <div className="overlay">
				<p>Highland</p>
				<a href="https://example.com/link4" className="overlay-button">see more</a>
			  </div>
			</div>
		  </SplideSlide>
		</Splide>
		<hr style={{ border: "1px solid #ccc", margin: "30px 0" }} /> {/* 区切り用の横線 */}
			<div id="about-me" style={{ textAlign: "center" }}>
				<h2>About Me</h2>
				<p>こんにちは、ゆたかぎです。</p>
				<p>新しい技術</p>
			</div>
		<hr style={{ border: "1px solid #ccc", margin: "40px 0" }} /> {/* 区切り用の横線 */}
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

