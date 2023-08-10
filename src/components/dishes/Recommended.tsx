import { Button, Typography } from "components/common";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 0;
`;

const Recommended: React.FC = () => {
  return (
    <StyledContainer>
      <Typography as="h2" size="lg" fontWeight="bold" content="Recommended" />
      <Button content="Menu" />
    </StyledContainer>
  );
};

export default Recommended;
