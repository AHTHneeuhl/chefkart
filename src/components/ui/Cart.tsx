import { Typography } from "components/common";
import { useAppSelector } from "redux/store/hooks";
import { styled } from "styled-components";
import ThemeHelper from "theme/themeHelper";

import { ReactComponent as DrinkIcon } from "assets/icons/drink.svg";

const helper = new ThemeHelper();

const StyledCart = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);

  width: 240px;
  height: 40px;

  ${helper.betweenContent()};
  background: #1c1c1c 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 9px #00000017;
  border-radius: 7px;
  padding: 12px;
`;

const StyledLeft = styled.div`
  ${helper.centerContent()};
  gap: 8px;
`;

const Cart: React.FC = () => {
  const total = useAppSelector((state) => state.cart.total);

  return (
    <StyledCart>
      <StyledLeft>
        <DrinkIcon />
        <Typography
          variant="white"
          fontWeight="semiBold"
          content={`${total} food items selected`}
        />
      </StyledLeft>
    </StyledCart>
  );
};

export default Cart;
