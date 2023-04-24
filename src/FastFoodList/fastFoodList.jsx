import FastFood from "../FastFood/fastFood";

const FastFoodList = ({ fastFoodItems }) => {
  let delay = 0.5;
  return (
    <div className="row">
      {fastFoodItems.map((fastfood) => {
        delay += 0.05;
        return (
          <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastfood.id}>
            <FastFood {...fastfood} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
