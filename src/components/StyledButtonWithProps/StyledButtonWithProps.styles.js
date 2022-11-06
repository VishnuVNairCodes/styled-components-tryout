import styled from "styled-components";

const StyledButtonWithProps = styled.button`
  border: 2px solid red;
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "orange"};
  color: ${(props) => (props.variant === "outline" ? "orange" : "white")};
  font-size: 32px;
  padding: 15px 32px;
  border-radius: 9px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s all;
`;

export { StyledButtonWithProps };
