import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid blue;
  border-radius: 9px;
  background-color: #17b9b9;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 32px;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s all;
`;

const BasicStyledComponent = () => {
  return (
    <>
      <h1>Basic Styled Component</h1>
      <StyledButton>Styled Button</StyledButton>
    </>
  );
};

export { BasicStyledComponent };
