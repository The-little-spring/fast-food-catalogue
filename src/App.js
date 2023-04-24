import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Header/Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./Header/assests/images/404.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoods] = useState([]);

  const fetchData = async (categoryID = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryID ? "?categoryID=" + categoryID : ""}`
    );
    setLoading(false);
    setFastFoods(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoods(response.data);
  };

  const renderContent = () => {
    if (loading) return <Loading theme={"dark"} />;
    if (fastFoodItems.length === 0)
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلیدواژه فوق، آیتمی یافت نشد.
          </div>
          <img
            className="mx-auto d-block mt-5 fade-in-horiz"
            src={notFound}
            alt="not-found"
          ></img>
        </>
      );
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  const filterItems = (categoryID) => {
    fetchData(categoryID);
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
