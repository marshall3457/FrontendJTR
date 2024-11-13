import Header from "./Components/Header/Index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: start;

`

function App() {
    return (
      <>
        <Router>
          <Container>
            <Header/>
            <Routes>
              {/*  <Route path='/' element={<Home/>} /> */}

            </Routes>
          </Container>
        </Router>
      </>
  
  
    );
}
  
export default App;