import styled from "styled-components";

export const Title = styled.h1`
  font-size: 32px;
  color: #f00;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 200px;
  padding: 8px;
  border: none;
  border-radius: 3px;
  background: #f00;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #b70404;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;
