import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from './components/Card';
import { Modal } from './components/Modal';

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1fr 796px 1fr;
  max-height: 100vh;
  img {
    max-width: 100%;
    //width: 100%;
    height: auto;
  }
`;

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Styled className="App">
      <div></div>
      <main>
        <Card />
      </main>
      <div>
        <a onClick={() => setShowModal(true)}>Find Momo</a>
      </div>
      {showModal && <Modal />}
    </Styled>
  );
}

export default App;
