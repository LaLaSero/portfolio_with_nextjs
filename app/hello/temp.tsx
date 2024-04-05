"use client";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import '@splidejs/splide/css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Navbar from '../../components/navbar';
import React, { useEffect, useState } from 'react';

const Hello = () => {
	// const [windowWidth, setWindowWidth] = useState(0); // 初期値を0に設定
	// useEffect(() => {
	// 	// コンポーネントがマウントされた後にウィンドウ幅を設定
	// 	setWindowWidth(window.innerWidth);
	
	// 	// ウィンドウサイズが変わったらウィンドウ幅を更新
	// 	const handleResize = () => {
	// 	  setWindowWidth(window.innerWidth);
	// 	};
	
	// 	window.addEventListener('resize', handleResize);
	
	// 	// クリーンアップ関数
	// 	return () => window.removeEventListener('resize', handleResize);
	//   }, []);
	return (
	  <>
		<Navbar />
		<h1>I'm yutakagi</h1>
		<p>This is my portfolio page.</p>
		<style>
		  {`
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
			width: window.innerWidth / 1,
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
		<h1>Recent news</h1>
		<p>here is my news</p>
	  </>
	);
  }

export default Hello;

