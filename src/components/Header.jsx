import { assets } from "../../assets/frontend_assets/assets";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <div
        id="home"
        className="relative min-h-[70vh] w-full overflow-hidden rounded-xl bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="h-full flex flex-col gap-6">
            <h1 className="max-w-lg text-6xl font-semibold leading-snug text-white">
              Order your favorite food here.
            </h1>
            <p className="max-w-2xl text-sm font-semibold text-white">
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              main mission is to satisfy your cravings and elevate your dining
              experience, one delicious meal at a time.
            </p>
            <Button
              className="px-6 py-2 max-w-36 rounded-full border border-gray-300
              text-gray-500 bg-gray-100 cursor-pointer hover:scale-103"
              name="View Menu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
