import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  function detailsClick() {
    navigate("/task");
  }
  return (
    <>
      <h1 className="text-gray-950">Hello World!</h1>
      <button onClick={detailsClick}>Mudar Pagina</button>
    </>
  );
}

export default App;
