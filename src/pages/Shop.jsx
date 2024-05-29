
const ShopSlip = ({ name, price, imageUrl }) => {

    
  return (
    <div className="card">
        <div>
          <img className="card-image" src={imageUrl} alt="no pic" width={150} />
        </div>

          <h4>{name}</h4>
          <h4>£{price.toFixed(2)}</h4>

         <div>
          <button onClick>Add to cart </button>
         </div>      
    </div>
  );
}

export default ShopSlip
