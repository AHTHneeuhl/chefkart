import { Typography } from "components/common";
import { useDish } from "hooks";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import ingredients from "assets/ingredients2x.png";

const StyledContainer = styled.div``;

const StyledPicture = styled.img``;

const Banner: React.FC = () => {
  const { id } = useParams();
  const { dish, isLoading } = useDish(id!);

  if (isLoading) return <p>loading</p>;

  return (
    <StyledContainer>
      <Typography as="h1" content={dish?.name!} />
      <Typography as="h3" content={dish?.timeToPrepare!} />
      <StyledPicture src={ingredients} alt="ingredients" />
    </StyledContainer>
  );
};

export default Banner;
