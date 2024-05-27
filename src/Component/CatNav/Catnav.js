import { useSelector } from "react-redux";
import "./_cat-nav.scss";
import categorySlice from "../../Store/Slices/CategorySlice";
const Catnav = () => {
  const categories = useSelector(categorySlice.getInitialState);
  return (
    <div className="cat-nav-container container">
      <ul>
        {categories.map((category) => {
          return (
            <li className="list-items">
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Catnav;
