import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyles';

class App extends React.Component {
  render() {
    return (
      <>
        <AppContainer>
          <GameWindow>
            {/* <Game /> */}
          </GameWindow>
        </AppContainer>
        <GlobalStyle />
      </>
    );
  }
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const GameWindow = styled.div`
  width: 1200px;
  height: 800px;
  background: #000;
`;

export default App;
