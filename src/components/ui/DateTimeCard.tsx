import { styled } from "styled-components";

import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { ReactComponent as ClockIcon } from "assets/icons/clock.svg";
import { Typography } from "components/common";

const StyledCard = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 4px #d6d6d69e;
  border-radius: 9px;
  padding: 21px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledTime = styled(StyledDate)``;

const DateTimeCard: React.FC = () => {
  return (
    <StyledCard>
      <StyledDate>
        <CalendarIcon />
        <Typography as="h3" fontWeight="bold" content="21 May 2021" />
      </StyledDate>
      <StyledTime>
        <ClockIcon />
        <Typography as="h3" fontWeight="bold" content="10:30 Pm-12:30 Pm" />
      </StyledTime>
    </StyledCard>
  );
};

export default DateTimeCard;
