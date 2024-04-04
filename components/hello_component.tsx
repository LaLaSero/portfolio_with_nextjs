import styled from 'styled-components';

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
  return (
    <PageContainer>
      <Title>Hello World</Title>
      <Button>Learn More</Button>
      <Button>Contact Us</Button>
    </PageContainer>
  );
}

export default Hello;
