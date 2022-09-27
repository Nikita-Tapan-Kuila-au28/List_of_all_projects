import './App.css';
import FormInput from "./components/formInput"
import List from "./components/list"
import Delete from "./components/delete";
import DataProvider from "./components/dataprovider";
function App() {
  return (
    <DataProvider>
    <div className="App">
      <h1>TO DO LIST</h1>

      <FormInput />
      <List />
      <Delete />

    </div>
    </DataProvider>



  );
}

export default App;
