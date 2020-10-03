import styled from "styled-components";
import Textured from '../../assets/background.jpg';

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  form {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    text-align: center;
    align-items: center;

    &::-webkit-scrollbar {
      display: none;
}

    label {
      padding: 15px;
    }
  }
`

export const Image = styled.div`
  flex: 1;
  width: calc(100% - 50%);
  background-image: url(${Textured});
`

export const Title = styled.h1`
  font-size: 32px;
  color: #0097A7;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 200px;
  padding: 8px;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }
`;
