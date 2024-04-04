// components/Sidebar.tsx
import styled from 'styled-components';
import React, { useState } from 'react';

interface SidebarProps {
	isOpen: boolean;
  }
 
  const SidebarContainer = styled.div<SidebarProps>`
  width: 250px;
  height: 100vh;
  position: fixed;
  left: ${props => props.isOpen ? '0' : '-250px'}; 
  top: 0;
  background-color: #1a1a1a; /* Dark background for the sidebar */
  color: #d4af37; /* Gold color for the text */
  transition: left 0.3s ease; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  border-bottom: 1px solid #d4af37; /* Gold underline for the logo */
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const MenuItem = styled.a`
  font-size: 1.2rem;
  color: #d4af37;
  padding: 10px 20px;
  text-decoration: none; /* リンクの下線を消す */
  display: block; /* これにより各メニューアイテムが新しい行に表示される */
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff; /* ホバー時の色を変更 */
  }
`;

const ToggleButton = styled.button<SidebarProps>`
  position: fixed;
  left: ${props => props.isOpen ? '250px' : '0'};
  top: 20px;
  z-index: 100;
  cursor: pointer;
  padding: 10px 15px;
  background-color: #d4af37; /* 金色の背景 */
  color: #000080; /* 紺色のテキスト */
  border: none;
  border-radius: 3px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b2972e; /* ホバー時の背景色を暗めの金色に */
  }

`;



export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
  return (
	<>
    <SidebarContainer isOpen={isOpen}>
      <div>
        <Logo>Gorgeous</Logo>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
      </div>
      <MenuItem>Logout</MenuItem>
    </SidebarContainer>
	      <ToggleButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
		  {isOpen ? 'Close' : 'Menu'}
		</ToggleButton>
	</>
  );
}

