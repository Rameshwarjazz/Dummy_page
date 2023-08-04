import { NavLink,useParams } from "react-router-dom";
import { ITEMS } from "../data/ItemData";

function ItemDetails() {
  const { id } = useParams();
  console.log(id);
  const item = ITEMS.find((item) => item.id === id);
  return (
    <>
      <main>
        <h1>ItemDetails</h1>
      </main>
      <h2>{item.title}</h2>
      <h3>{item.detail} </h3>
      <NavLink to='/Item'>Back</NavLink>
    </>
  );
}

export default ItemDetails;
