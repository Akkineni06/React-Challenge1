import itemsData from "../itemsData.json";

function Shop({ name, price, imageUrl }) {

    
  return (
    <div className="card">
      {itemsData.map((item) => (
        <div>
          <img
            className="card-image"
            src={item.imageUrl}
            alt="no pic"
            width={"150"}
          />
          <h4>{item.name}</h4>
          <h4>{item.price.toFixed(2)}</h4>
          <h4>Add to cart</h4>
        </div>
      ))}
    </div>
  );
}

export default Shop;
