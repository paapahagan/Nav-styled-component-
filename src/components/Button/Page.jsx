import React from "react";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";

function Page() {
  return (
    <div>
      Hello World
      <div>
        <StyledButton>Open</StyledButton>
      </div>
      <br />
      <div>
        <StyledButton variant="outline">Open</StyledButton>
      </div>
      <br />
      <div>
        <FancyButton>Fancy</FancyButton>
      </div>
      <br />
      <div>
        <SubmitButton>Submit</SubmitButton>
      </div>
    </div>
  );
}

export default Page;
