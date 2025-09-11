import { useContext } from "react";

import FoodItem from "./FoodItem";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className=" mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-semibold text-3xl mb-4">Top dishes near you</h2>
      <div className="grid items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {food_list.map((item, i) => {
          console.log(category, item.category);
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item.id}
                id={i}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                category={item.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
