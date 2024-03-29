import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import { getCurrentQty } from "../cart/CartSlice";
import UpdateQty from "../cart/UpdateQty";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  const currentQty = useSelector(getCurrentQty(id));

  const isInCart = currentQty > 0;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-20 grayscale" : ""}`}
      />
      <div className="flex  grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-slate-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <div className="space-x-6">
            {!soldOut && !isInCart && (
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            )}
            {isInCart && (
              <div className="flex gap-6">
                <UpdateQty currentQty={currentQty} pizzaId={id} />
                <DeleteItem pizzaId={id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
