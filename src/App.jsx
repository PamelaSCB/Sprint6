import NormalizeModern from "./components/NormalizeModern";
import { Escena } from "./components/escena/Escena";
import { historyText } from "./data/historyText";
import { Botones } from "./components/botones/Botones";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState(1);

  const activeNext = () =>
    position !== historyText.length && setPosition((position) => position + 1);

  const activeBack = () =>
    position !== 1 && setPosition((position) => position - 1);

  return (
    <div className="App">
      <NormalizeModern />

      <Botones activeBack={activeBack} activeNext={activeNext} />
      {historyText.map((element) => (
        <Escena
          key={element.id}
          text={element.text}
          isActive={element.id === position}
        />
      ))}
    </div>
  );
}

export default App;
