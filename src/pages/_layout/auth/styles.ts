import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  background: linear-gradient(-180deg, #fff, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin: 30px 0;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 3px;
      color: #fff;
      height: 50px;
      margin-bottom: 15px;
      padding: 5px 15px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
        text-shadow: rgba(0, 0, 0, 0.4);
      }
    }
    span {
      color: #5bc0de;
      align-self: flex-start;
      margin: 0 0 10px 5px;
      font-weight: bold;
    }
    button {
      border: 0;
      border-radius: 3px;
      background: #0275d8;
      height: 50px;
      color: #fff;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#0275d8')};
      }
    }
    a {
      color: #333;
      opacity: 0.7;
      margin-top: 15px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
