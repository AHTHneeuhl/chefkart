import { styled } from "styled-components";
import { Typography } from "components/common";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  background: #f5f5f5;
  padding: 14px;
  border-radius: 7px;
`;

const StyledPicture = styled.img`
  height: 55px;
  width: 30px;
`;

type TProps = {
  name: string;
  image: string;
};

const Appliances: React.FC<TProps> = ({ name, image }) => {
  return (
    <StyledContainer>
      <StyledPicture src={image} alt={name} />
      <Typography as="p" content={name} />
    </StyledContainer>
  );
};

export default Appliances;
