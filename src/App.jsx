import './App.css';
import React from "react";
import Button from "./assets/components/Button/Button.jsx";

function App() {
const [player,setPlayer] = React.useState("onbekend");
  return (
    <>
      <div>
          <h1>{player} is aan de beurt</h1>
        <Button
            type={"button"}
            buttonText={"Whitney"}
            onClick={() => setPlayer("Whitney")}
        />

          <Button
              type={"button"}
              buttonText={"Jeffrey"}
              onClick={() => setPlayer("Jeffrey")}
          />

          <Button
              type={"button"}
              buttonText={"Sandy"}
              onClick={() => setPlayer("Sandy")}
          />

      </div>

    </>
  )
}

export default App
