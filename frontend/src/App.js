import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Layout>
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
            </Routes>
          </Container>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
