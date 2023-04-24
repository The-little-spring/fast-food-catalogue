import { useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import Loading from "./Header/Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./Header/assests/images/404.png";
import useAxios from "./useAxios";

function App() {
  const [url, setUrl] = useState("/FastFood/list");
  const [fastFoodItems, , loading] = useAxios({ url });

  const searchItems = async (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
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
    setUrl(`/FastFood/list/${categoryID ? "?categoryID=" + categoryID : ""}`);
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
