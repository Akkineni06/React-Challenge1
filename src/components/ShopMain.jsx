import itemsData from '../data/itemsData.json'
import ShopSlip from '../pages/Shop'


const ShopMain = () => {
  return (
    <>
      <h1>Our plants</h1>
      <div className="items-grid">
        {itemsData.map((item) => (
          <ShopSlip {...item} />
        ))}
      </div>
    </>
  );
}
export default ShopMain;
