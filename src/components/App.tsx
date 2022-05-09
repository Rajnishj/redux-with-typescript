import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

export interface jsonData {
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [data, setData] = useState<jsonData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data.slice(0, 5));
    };
    fetchData();
  }, []);
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList name="hello" data1={data} setData={setData} />
      </div>
    </Provider>
  );
};

export default App;
