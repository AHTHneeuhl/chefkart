import { styled } from "styled-components";
import { Typography } from "components/common";

const StyledDish = styled.div`
  width: 307px;
  height: 89px;
`;

const StyledContent = styled.div`
  width: 156px;
  height: 73px;
`;

const StyledDishPicture = styled.img`
  width: 92px;
  height: 68px;
  border-radius: 6px;
`;

const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type TProps = {
  name: string;
  description: string;
  image: string;
  rating: number;
  equipments: string[];
};

const Dish: React.FC<TProps> = ({
  name,
  description,
  image,
  rating,
  equipments,
}) => {
  return (
    <StyledDish>
      <StyledContent>
        <Typography content={description} />
      </StyledContent>
      <PicWrapper>
        <StyledDishPicture src={image} alt={name} />
      </PicWrapper>
    </StyledDish>
  );
};

export default Dish;
