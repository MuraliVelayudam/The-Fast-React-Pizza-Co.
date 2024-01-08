import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, onClick }) {
  const className =
    "inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold uppercase tracking-widest transition-colors duration-300 hover:bg-yellow-300  focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-4 sm:py-2";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={className}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
