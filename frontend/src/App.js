import { Container } from "react-bootstrap";
import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Layout>
        <main className="py-3">
          <Container>
            <HomeScreen />
          </Container>
        </main>
      </Layout>
    </div>
  );
}

export default App;
