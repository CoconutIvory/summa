import PageHome from "./pages/PageHome";
import PageEditor from "./pages/PageEditor";

import { useAuth } from "./hooks/useAuth";

import "./App.css";

export default function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      { user ? <PageEditor /> : <PageHome />}
    </div>
  );
}