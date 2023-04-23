import FastFood from "../FastFood/fastFood";

const FastFoodList = ({ fastFoodItems }) => {
  return (
    <div className="row">
      {fastFoodItems.map((fastfood) => {
        return (
          <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastfood.id}>
            <FastFood {...fastfood} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
