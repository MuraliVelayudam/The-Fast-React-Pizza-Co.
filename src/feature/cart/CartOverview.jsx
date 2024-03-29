import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalQty } from "./CartSlice";
import { getTotalCartPrice } from "./CartSlice";

function CartOverview() {
  const totalQty = useSelector(getTotalQty);
  const cartTotalPrice = useSelector(getTotalCartPrice);

  if (!totalQty) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base ">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQty} pizzas</span>
        <span>$ {cartTotalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
