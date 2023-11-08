import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid red;
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "red"};
  color: ${(props) => (props.variant === "outline" ? "red" : "white")};
  padding: 3px 10px;
  text-align: center;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "white" : "red"};
    color: ${(props) => (props.variant !== "outline" ? "red" : "white")};
  }
`;

export const FancyButton = styled(StyledButton)`
  border: 1px solid green;
  background-color: green;
  pad: 3px 10px;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "white" : "green"};
    color: ${(props) => (props.variant !== "outline" ? "green" : "white")};
  }
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  border: 1px solid brown;
  background-color: brown;
  pad: 3px 10px;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "white" : "brown"};
    color: ${(props) => (props.variant !== "outline" ? "brown" : "white")};
  }
`;
