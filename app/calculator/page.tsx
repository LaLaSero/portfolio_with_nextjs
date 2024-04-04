"use client"

import Calculator from '../../components/calculator_comp';
import styled from 'styled-components';
import Sidebar from '../../components/sidebar';
import React, { useState } from 'react';

const PageLayout = styled.div`
  display: flex; /* Side by side layout for sidebar and content */
  background: black;
`;

const ContentContainer = styled.div`
  flex-grow: 1; /* Ensures content takes the remaining space */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-left: 250px; /* Add padding to avoid overlap with the sidebar */
`;

const Content = styled.div`
  text-align: center;
  padding: 40px;
  border-radius: 15px;
  background: #1a1a1a;
  border: 3px solid #d4af37;
  box-shadow: 0 0 15px #d4af37;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #d4af37; /* Gold color for the text */
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #d4af37; /* Gold color for the text */
`;

export default function Page() {
	return (
	  <PageLayout>
		<Sidebar />
		<ContentContainer>
		  <Content>
			<div>
				<Title>Calculator</Title>
				<Title><Calculator /></Title>
			</div>
			<Description></Description>
		  </Content>
		</ContentContainer>
	  </PageLayout>
	);
  }