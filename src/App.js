import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";

function App() {
  const [dataItems, setDataItems] = useState(null);
  const calculatedHandler = (data) => {
    setDataItems(data);
  };
  return (
    <div>
      <Header />
      <Form onCalculated={calculatedHandler} />
      <ResultTable items={dataItems} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
