import { menu_list } from "../../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log(category);
  return (
    <div id="menu" className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-semibold text-3xl mb-4">Explore our menu</h2>
      <p className="font-medium text-sm mb-8 max-w-2xl">
        Choose from a diverse menu featuring a delectable array. Our mission is
        to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="flex items-center justify-between gap-6 overflow-x-auto pb-4">
        {menu_list.map((item, i) => {
          const isActive = category === item.menu_name;
          return (
            <div
              key={i}
              className="flex-shrink-0 w-24 hover:scale-102"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                className={`w-full h-24 object-cover rounded-full  transition-all cursor-pointer ${
                  isActive ? "border-2 border-orange-500 shadow-amber-200" : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p
                className={`text-center mt-2 cursor-pointer  ${
                  isActive ? "text-orange-500" : ""
                }`}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mb-2 h-0.5 bg-gray-300 border-none" />
    </div>
  );
};

export default ExploreMenu;
