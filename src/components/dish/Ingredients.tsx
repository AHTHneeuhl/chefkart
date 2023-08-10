import { Typography } from "components/common";
import { styled } from "styled-components";

const Containeer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem 0;
`;

const Ingredients: React.FC = () => {
  return (
    <Containeer>
      <Typography fontWeight="bold" size="lg" content="Ingredients" />
      <Typography variant="silverChalice" size="xs" content="2 people" />
    </Containeer>
  );
};

export default Ingredients;
