import { Appliance, Typography } from "components/common";
import { useDish } from "hooks";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const StyledContainer = styled.div``;

const StyledAppliances = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`;

const Appliances: React.FC = () => {
  const { id } = useParams();
  const { dish, isLoading } = useDish(id!);

  if (isLoading) return <p>loading</p>;

  return (
    <StyledContainer>
      <Typography as="h2" fontWeight="bold" size="lg" content="Appliances" />
      <StyledAppliances>
        {dish?.ingredients.appliances.map(({ name, image }) => (
          <Appliance key={name} name={name} image={image} />
        ))}
      </StyledAppliances>
    </StyledContainer>
  );
};

export default Appliances;
