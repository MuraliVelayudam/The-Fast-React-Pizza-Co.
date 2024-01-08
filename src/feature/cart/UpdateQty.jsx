import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseQty } from "./CartSlice";
import { decreaseQty } from "./CartSlice";

export default function UpdateQty({ pizzaId, currentQty }) {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseQty(pizzaId));
  }

  function handleDecrease() {
    dispatch(decreaseQty(pizzaId));
  }

  return (
    <div className="space-x-4">
      <Button onClick={() => handleIncrease()}>+</Button>
      <span className="text-sm font-semibold">{currentQty}</span>
      <Button onClick={() => handleDecrease()}>-</Button>
    </div>
  );
}
