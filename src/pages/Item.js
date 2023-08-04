import { Link } from "react-router-dom";
import { ITEMS } from "../data/ItemData";
function Item() {
  return (
    <>
      <main>
        <h1>Item Page</h1>
      </main>
      <ul>
        {ITEMS.map((item) => (
          <Link to={`/item/${item.id}`}>
            <li>{item.id}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Item;
