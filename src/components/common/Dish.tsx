import { styled } from "styled-components";
import { Typography } from "components/common";
import ThemeHelper from "theme/themeHelper";
import { useAppDispatch } from "redux/store/hooks";
import { addItemToCart } from "redux/slices/cart";

const helper = new ThemeHelper();

const StyledDish = styled.div`
  height: 96px;

  display: flex;
  justify-content: space-between;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const StyledDishPicture = styled.img`
  width: 112px;
  height: 72px;
  object-fit: cover;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 96px;
    height: 68px;
  }
`;

const PicWrapper = styled.div`
  position: relative;
`;

const StyledHeader = styled.div`
  ${helper.centerContent()}
  gap: 8px;
`;

const StyledRating = styled.div`
  background: #51c452 0% 0% no-repeat padding-box;
  width: 32px;
  text-align: center;
  border-radius: 2px;
`;

const AddItemButton = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 4px #00000029;
  border: 0.5px solid #ff9a26;
  border-radius: 3px;
  padding: 4px 16px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
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
  const dispatch = useAppDispatch();

  return (
    <StyledDish>
      <StyledContent>
        <StyledHeader>
          <Typography as="h3" fontWeight="semiBold" content={name} />
          <StyledRating>
            <Typography
              size="xs"
              fontWeight="semiBold"
              variant="white"
              content={rating}
            />
          </StyledRating>
        </StyledHeader>
        <Typography size="xs" variant="doveGray" content={description} />
      </StyledContent>
      <PicWrapper>
        <StyledDishPicture src={image} alt={name} />
        <AddItemButton onClick={() => dispatch(addItemToCart(1))}>
          <Typography variant="westSide" fontWeight="semiBold" content="add" />
        </AddItemButton>
      </PicWrapper>
    </StyledDish>
  );
};

export default Dish;
