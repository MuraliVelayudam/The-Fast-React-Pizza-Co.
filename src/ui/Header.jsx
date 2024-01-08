import { Link } from "react-router-dom";
import SearchOrder from "../feature/order/SearchOrder";
import UserName from "../feature/user/UserName";

export default function Header() {
  return (
    <header className="flex items-center justify-between font-pizza border-b border-stone-500 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza & Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
