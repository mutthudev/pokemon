import styled from "styled-components";

export const StyledLeftPanel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 5px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.8);
`;

export const StyledRightPanel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 5px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.8);
`;

export const StyledCard = styled.div`
  color: #00000099;
  display: flex;
  justify-content: space-evenly;
  border: 5px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.8);
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCardName = styled.h2`
  text-transform: capitalize;
`;

export const StyledImage = styled.img`
  height: 7rem;
  width: 7rem;
`;
