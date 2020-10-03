import React, { useState } from "react";
import Form from "../screens/Form/";
import Success from "../screens/Success/"
import { AppContainer } from "./styles";

function App() {
  const [result, setResult] = useState()

  return (
    <AppContainer>
      {result ? <Success data={result} /> : <Form submitResult={setResult} />}
    </AppContainer>
  );
}

export default App;
