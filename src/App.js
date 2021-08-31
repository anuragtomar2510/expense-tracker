import React from 'react'
import styled from 'styled-components'
import HomeComponent from './modules/home/HomeComponent'
const Container = styled.div`

  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 30px;
  margin-bottom : 10px;

`;

const Header = styled.span`

  font-size : 25px;
  color : black;
  font-weight : bold;
  font-family: 'Montserrat', sans-serif;

`;


function App() {
  return (
        
          <Container>
            <Header>Expense Tracker</Header>
            <HomeComponent />
          </Container>
   
  )
}

export default App;
