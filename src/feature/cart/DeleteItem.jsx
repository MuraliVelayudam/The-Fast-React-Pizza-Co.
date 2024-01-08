import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./CartSlice";

export default function DeleteItem({ pizzaId }) {
  const disPatch = useDispatch();

  function handleDeleteItem() {
    disPatch(deleteItem(pizzaId));
  }
  return <Button onClick={() => handleDeleteItem()}>Delete</Button>;
}
