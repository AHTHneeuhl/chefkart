import { Typography } from "components/common";
import { useAppSelector } from "redux/store/hooks";
import { styled } from "styled-components";
import ThemeHelper from "theme/themeHelper";

const helper = new ThemeHelper();

const StyledCart = styled.div`
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
        <Typography content={`${total} food items selected`} />
      </StyledLeft>
    </StyledCart>
  );
};

export default Cart;
