import { styled } from "styled-components";
import { Typography } from "components/common";

const StyledDish = styled.div`
  width: 307px;
  height: 89px;

  display: flex;
  justify-content: space-between;
`;

const StyledContent = styled.div`
  width: 156px;
  height: 73px;
`;

const StyledDishPicture = styled.img`
  width: 92px;
  height: 68px;
  object-fit: cover;
  border-radius: 6px;
`;

const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddItemButton = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 4px #00000029;
  border: 0.5px solid #ff9a26;
  border-radius: 3px;
  padding: 4px 12px;
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
        <Typography as="h3" fontWeight="semiBold" content={name} />
        <Typography content={rating} />
        <Typography size="xs" variant="doveGray" content={description} />
      </StyledContent>
      <PicWrapper>
        <StyledDishPicture src={image} alt={name} />
        <AddItemButton>
          <Typography variant="westSide" fontWeight="semiBold" content="add" />
        </AddItemButton>
      </PicWrapper>
    </StyledDish>
  );
};

export default Dish;
