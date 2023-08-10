import { styled } from "styled-components";
import { Typography } from "components/common";

const StyledStat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type TProps = {
  name: string;
  quantity: string;
};

const Stat: React.FC<TProps> = ({ name, quantity }) => {
  return (
    <StyledStat>
      <Typography content={name} />
      <Typography content={quantity} />
    </StyledStat>
  );
};

export default Stat;
