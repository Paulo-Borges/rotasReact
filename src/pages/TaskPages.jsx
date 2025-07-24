import { useNavigate } from "react-router-dom";

function TaskPages() {
  const navigate = useNavigate();

  function VoltaClik() {
    navigate("/");
  }
  return (
    <>
      <h1 className="text-gray-950">taskPages</h1>
      <div>
        <button onClick={VoltaClik}>Voltar</button>
      </div>
    </>
  );
}

export default TaskPages;
