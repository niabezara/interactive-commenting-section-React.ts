import styled from "styled-components";

const Button = styled.button`
  border-radius: 8px;
  background: var(--moderate-blue, #5357b6);
  border: none;
  color: #fff;
  padding: 12px 30px;
  &:hover {
    background: var(--light-grayish-blue, #c5c6ef);
    cursor: pointer;
  }
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
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  border: 1px solid var(--light-gray, #e9ebf0);
  background: var(--white, #fff);
  margin-left: 16px;
  margin-right: 16px;
  height: 96px;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--moderate-blue, #5357b6);
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
  cursor: pointer;
  &:before {
    content: url("/images/icon-reply.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
  &:hover {
    color: var(--light-grayish-blue, #c5c6ef);
    font-feature-settings: "clig" off, "liga" off;
  }
`;

const Edit = styled.button`
  color: var(--moderate-blue, #5357b6);
  font-feature-settings: "clig" off, "liga" off;
  border: none;
  background: transparent;
  cursor: pointer;
  /* Body (M Bold) */
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  &:before {
    content: url("/images/icon-edit.svg");
    background-repeat: no-repeat;
  }
`;

const Delete = styled.button`
  margin-right: 16px;
  border: none;
  color: var(--soft-red, #ed6368);
  font-feature-settings: "clig" off, "liga" off;
  cursor: pointer;
  background: transparent;
  &:before {
    content: url("/images/icon-delete.svg");
    background-repeat: no-repeat;
  }
`;

const PopUp = styled.div`
  border-radius: 8px;
  background: var(--white, #fff);
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  height: 163px;
  gap: 20px;
  text-align: center;
  padding: 32px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Buttons = styled.div`
  display: flex;
  gap: 14px;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  .button1 {
    border-radius: 8px;
    background: var(--soft-red, #ed6368);
    border: none;
    width: 161px;
    height: 48px;
    color: var(--white, #fff);
    cursor: pointer;
  }
  .button2 {
    border-radius: 8px;
    background: var(--grayish-blue, #67727e);
    color: var(--white, #fff);
    text-align: center;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    width: 161px;
    height: 48px;
    border: none;
    cursor: pointer;
  }
`;

export {
  Button,
  Replay,
  ReplaySection,
  ReplaySubCard,
  SubCard,
  Info,
  Card,
  Edit,
  Delete,
  Input,
  PopUp,
  Overlay,
  Buttons,
};
