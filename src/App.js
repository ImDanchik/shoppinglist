import ShopItem from "./components/ShopItem";
import { Row, Col } from "react-bootstrap";

const App = () => {
  const items = [
    {
      image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
      title: "Milk",
      text: "Whole 3% milk",
    },
    {
      image:
        "https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6910091/Catalog/6910091_7290006567048_Enlarge.jpg",
      title: " קוסקוס",
      text: "זה כולה קוסקוס אחי",
    },
    {
      image: "https://m.pricez.co.il/ProductPictures/7290008409100.jpg",
      title: "שניצל",
      text: "זה טעים",
    },    {
      image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
      title: "Milk",
      text: "Whole 3% milk",
    },
    {
      image:
        "https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6910091/Catalog/6910091_7290006567048_Enlarge.jpg",
      title: " קוסקוס",
      text: "זה כולה קוסקוס אחי",
    },
    {
      image: "https://m.pricez.co.il/ProductPictures/7290008409100.jpg",
      title: "שניצל",
      text: "זה טעים",
    },    {
      image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
      title: "Milk",
      text: "Whole 3% milk",
    },
    {
      image:
        "https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6910091/Catalog/6910091_7290006567048_Enlarge.jpg",
      title: " קוסקוס",
      text: "זה כולה קוסקוס אחי",
    },
    {
      image: "https://m.pricez.co.il/ProductPictures/7290008409100.jpg",
      title: "שניצל",
      text: "זה טעים",
    }
  ];

  return (
    <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
      {
        items.map(item => <ShopItem image={item.image} title={item.title} text={item.text} />)
      }
    </div>
  );
};

export default App;
