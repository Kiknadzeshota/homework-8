import "./App.css";
import GlobalStyle from "./components/Globalstyle";
import Header from "./components/Header/Header";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/planets/planet";
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/Earth"}/>}></Route>
        <Route path="/:planet" element={<Planet/>}></Route>
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.main`
  margin:  auto;
  max-width: 1440px;
  min-height: 100vh;
`;
