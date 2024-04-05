// const hello= () => {
// 	  return (
// 	<div>
// 	  <h1>Hello World</h1>
// 	</div>
//   );
// }*

// export default hello;
"use client"
import styled from 'styled-components';
import Modal from '../../components/modal';
import React, { useState } from 'react';

// スタイルドコンポーネントの定義
const PageContainer = styled.div`
  background: linear-gradient(to right, #ffffff, #dddddd); /* 背景のグラデーション */
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #333333;
`;

const Button = styled.button`
  background-color: #0066ff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #0055cc;
  }
`;

const Hello = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [message, setMessage] = useState('');

	const handleOpenModal = async () => {
	  setIsModalOpen(true);
	  try {
		const response = await fetch('/api/hello');
		const data = await response.json();
		setMessage(data.message);
	  } catch (error) {
		console.error('Failed to fetch hello message:', error);
	  }
	};
  
	const handleCloseModal = () => {
	  setIsModalOpen(false);
	  setMessage(''); // モーダルを閉じるときにメッセージをクリア
	};
  
	return (
	  <div>
		<button onClick={handleOpenModal}>Open Modal</button>
		<Modal show={isModalOpen} onClose={handleCloseModal}>
		  <p>{message || 'Loading...'}</p>
		</Modal>
	  </div>
	);
  }

export default Hello;
