import React from 'react';
import styled from 'styled-components';

export const StackBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StackContent = styled.div`
  border: 1px solid black;
  width: 50%;
  text-align: center;
  border-radius: 5px;
  padding: 10px 0px;
`;

export const Stack = () => {
  return (
    <StackBox>
      <StackContent>1</StackContent>
      <StackContent>2</StackContent>
      <StackContent>3</StackContent>
    </StackBox>
  );
};
