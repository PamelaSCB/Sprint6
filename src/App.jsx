import { Escena } from "./components/escena/Escena";
import { historyText } from "./data/historyText";

function App() {
  return (
    <div>
      <div>
        {historyText.map((element) => (
          <Escena text={element.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
