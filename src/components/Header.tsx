import Nav from "./Nav";
import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const content = (
    <header className="header">
      <h1>Flower Shop</h1>

      <ul className="header__price">
        <li>Total Items: {totalItems}</li>
        <li>Total Price: {totalPrice}</li>
      </ul>

      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
};
export default Header;
