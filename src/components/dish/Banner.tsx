import { Typography } from "components/common";
import { useDish } from "hooks";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ThemeHelper from "theme/themeHelper";

import { ReactComponent as ClockIcon } from "assets/icons/clock.svg";
import ingredients from "assets/ingredients2x.png";

const helper = new ThemeHelper();

const StyledContainer = styled.div`
  ${helper.betweenContent()};
`;

const StyledPicture = styled.img`
  height: 132px;
`;

const TimeToPrepare = styled.div`
  ${helper.centerContent()};
  justify-content: flex-start;
  gap: 8px;
  margin-top: 1rem;
`;

const Banner: React.FC = () => {
  const { id } = useParams();
  const { dish, isLoading } = useDish(id!);

  if (isLoading) return <p>loading</p>;

  return (
    <StyledContainer>
      <div>
        <Typography as="h1" fontWeight="bold" size="xl" content={dish?.name!} />
        <Typography
          variant="silverChalice"
          size="xs"
          content="Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire."
        />
        <TimeToPrepare>
          <ClockIcon />
          <Typography
            as="h3"
            fontWeight="semiBold"
            content={dish?.timeToPrepare!}
          />
        </TimeToPrepare>
      </div>
      <StyledPicture src={ingredients} alt="ingredients" />
    </StyledContainer>
  );
};

export default Banner;
