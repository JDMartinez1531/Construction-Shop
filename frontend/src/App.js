import { Container } from "react-bootstrap";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <main className="py-3">
          <Container>
            <h1>Welcome to Construction Shop</h1>
          </Container>
        </main>
      </Layout>
    </div>
  );
}

export default App;
