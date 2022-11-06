import { StyledButtonWithProps } from "../components/StyledButtonWithProps/StyledButtonWithProps.styles";

const UsingProps = () => {
  return (
    <>
      <h1>Using Props</h1>
      <StyledButtonWithProps variant="outline">
        Styled Button With Props
      </StyledButtonWithProps>
      <StyledButtonWithProps>
        Styled Button With Props (no variant prop)
      </StyledButtonWithProps>

      <br />
      <br />
      <br />
    </>
  );
};

export { UsingProps };
