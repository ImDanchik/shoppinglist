import { Row } from "react-bootstrap";
import ShopItem from "./components/ShopItem";

const App = () => {
  const items = [
    {
      image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
      title: "Milk",
      text: "Whole 3% milk",
      price: '5'
    },
    {
      image:
        "https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6910091/Catalog/6910091_7290006567048_Enlarge.jpg",
      title: " קוסקוס",
      text: "זה כולה קוסקוס אחי",
      price: '10'
    },
    {
      image: "https://m.pricez.co.il/ProductPictures/7290008409100.jpg",
      title: "שניצל",
      text: "זה טעים",
      price: '14'
    },    {
      image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
      title: "Milk",
      text: "Whole 3% milk",
      price: '5'
    },
    {
      image:
        "https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6910091/Catalog/6910091_7290006567048_Enlarge.jpg",
      title: " קוסקוס",
      text: "זה כולה קוסקוס אחי",
      price: '10'
    },
    {
      image: "https://m.pricez.co.il/ProductPictures/7290008409100.jpg",
      title: "שניצל",
      text: "זה טעים",
      price: '14'
    },    {
      image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
      title: "Milk",
      text: "Whole 3% milk",
      price: '5'
    },
    {
      image:
        "https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6910091/Catalog/6910091_7290006567048_Enlarge.jpg",
      title: " קוסקוס",
      text: "זה כולה קוסקוס אחי",
      price: '10'
    },
    {
      image: "https://m.pricez.co.il/ProductPictures/7290008409100.jpg",
      title: "שניצל",
      text: "זה טעים",
      price: '14'
    },    {
      image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
      title: "Milk",
      text: "Whole 3% milk",
      price: '5'
    },
    {
      image:
        "https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6910091/Catalog/6910091_7290006567048_Enlarge.jpg",
      title: " קוסקוס",
      text: "זה כולה קוסקוס אחי",
      price: '10'
    },
    {
      image: "https://m.pricez.co.il/ProductPictures/7290008409100.jpg",
      title: "שניצל",
      text: "זה טעים",
      price: '14'
    },

  ];

  return (
    <div
      style={{
        margin: `50px`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
      }}>
      <Row md={4}>
      {items.map((item) => (
        <ShopItem image={item.image} title={item.title} text={item.text} price={item.price}/>
      ))}
      </Row>
    </div>
  );
};

export default App;
