import Global from "./Global";
import Header from "./Components/Header/Index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: start;

`

function App() {
    return (
      <>
        <Global/>
        <Router>
          <Container>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />

            </Routes>
            <Footer/>
          </Container>
        </Router>
      </>
  
  
    );
}
  
export default App;