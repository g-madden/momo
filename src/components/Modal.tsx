import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 800px;
    height: calc(100vh - 100px);
    background: #fff;
    padding: 30px;
  }
`;

export const Modal = () => {
  return (
    <Styled>
      <div>the modal</div>
    </Styled>
  );
};
