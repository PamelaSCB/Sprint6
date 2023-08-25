import NormalizeModern from "./components/NormalizeModern";
import { useState } from "react";
import { history } from "./data/History";
import { Escena } from "./components/Escena/Escena";
import { Botones } from "./components/Botones/Botones";
import { Welcome } from "./components/Bienvenida/Bienvenida";
import { StyledHistory } from "./components/GlobalStyles/History.styled";

function App() {
  const [position, setPosition] = useState(1);
  const [welcomePage, setPage] = useState(true);

  const activeNext = () =>
    position !== history.length && setPosition((position) => position + 1);

  const activeBack = () =>
    position !== 1 && setPosition((position) => position - 1);

  const nextPage = () => {
    setPage(false);
  };

  return (
    <div>
      <NormalizeModern />
      {welcomePage === true ? (
        <>
          <Welcome següent={nextPage} />
        </>
      ) : (
        <>
          <StyledHistory history={history} position={position} />
          <Botones activeBack={activeBack} activeNext={activeNext} />
          <Escena history={history} position={position} />
        </>
      )}
    </div>
  );
}

export default App;
