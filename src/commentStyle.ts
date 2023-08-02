import styled from "styled-components";

const Button = styled.button`
  border-radius: 8px;
  background: var(--moderate-blue, #5357b6);
  border: none;
  color: #fff;
  padding: 12px 30px;
`;

const Card = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  p {
    font-weight: 400;
    color: var(--grayish-blue, #67727e);
    font-feature-settings: "clig" off, "liga" off;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const SubCard = styled.div`
  background: var(--white, #fff);
  padding: 24px;
  border-radius: 8px;
`;

const ReplaySubCard = styled(SubCard)`
  margin: 15px 0 15px 50px;
  padding-left: 15px;
`;

const ReplaySection = styled(ReplaySubCard)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  input {
    width: 100%;
    border: none;
    border-radius: 8px;
    border: 1px solid var(--light-gray, #e9ebf0);
    background: var(--white, #fff);
    margin-left: 16px;
    margin-right: 16px;
    height: 96px;
  }
`;

const Replay = styled.button`
  color: var(--moderate-blue, #5357b6);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  background: transparent;
  border: none;
  &:before {
    content: url("/images/icon-reply.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export { Button, Replay, ReplaySection, ReplaySubCard, SubCard, Info, Card };
