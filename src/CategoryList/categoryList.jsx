import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Header/Loading/loading";

const CategoryList = () => {
  const [loading, setloading] = useState("true");
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setcategories(response.data);
      setloading(false);
    };
    fetchCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading theme={"dark-blue"} />;
    }
    return (
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#.">
            همه فست فودها
          </a>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <a className="nav-link" href="#.">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
