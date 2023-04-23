import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";

function App() {
  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
    </div>
  );
}

export default App;
