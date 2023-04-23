import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Header/Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoods] = useState([]);

  const fetchData = () => {
    setLoading(true);
    const response = async (categoryID = null) => {
      await axios.get(
        `/FastFood/list/${categoryID ? "?categoryID=" + categoryID : ""}`
      );
    };
    setLoading(false);
    setFastFoods(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) return <Loading theme={"dark"} />;
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
