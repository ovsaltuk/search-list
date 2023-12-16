import "./App.css";
import { SearchableList } from "./components/SearchableList./SearchableList";

function App() {
  const list = [
    {
      id: "1",
      title: "title-1",
    },
    {
      id: "2",
      title: "title-2",
    },
  ];

  return (
    <>
      <SearchableList list={list} />
    </>
  );
}

export default App;
