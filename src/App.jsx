import { useState } from "react";
import "./css/Style.css";
import Card from "./Components/Card";
import Cart from "./Components/Cart";


function App() {
  let [products, setProducts] = useState([
    {
      pid: 1,
      pname: "Strawberry Shake",
      pdesc: "Finest Strawberries, Milk, Sugar",
      pimage: "./product1.jpg",
      price: 200,
      quantity: 10,
    },
    {
      pid: 2,
      pname: "Chocolate Fantasy",
      pdesc: "Brownie with chocolate sauce topped with Vanilla Ice cream",
      price: 250,
      quantity: 0,
    },
    {
      pid: 3,
      pname: "Mediterranean Delight",
      pdesc: "Nuts and Dates from the soils of Algeria",
      price: 300,
      quantity: 0,
    },
  ]);

  function onQuantityIncrease(e, prod) {
    e.stopPropagation();
    // console.log(prod);
    let selectedProducts = [...products];
    // console.log(selectedProducts);

    let prodIndex = selectedProducts.indexOf(prod);
    // console.log(prodIndex);

    selectedProducts[prodIndex].quantity++;
    console.log(selectedProducts[prodIndex].quantity);

    // alert('Inc working properly');

    if(selectedProducts[prodIndex].quantity>9)
    {
      alert('Maxmimum 10 Products only add to the cart !!!');
      selectedProducts[prodIndex].quantity=10;
    }

    setProducts(selectedProducts);
  }



  function onQuantityDecrease(e,prod){
    e.stopPropagation();
    // console.log(prod);

    let selectedProducts=[...products];
    // console.log(selectedProducts);
    
    let prodIndex=selectedProducts.indexOf(prod);
    // console.log(prodIndex);
    
    selectedProducts[prodIndex].quantity--;    
    console.log(selectedProducts[prodIndex].quantity);

    if(selectedProducts[prodIndex].quantity<0);
    {
    //     alert('Add the product to your cart !!!');
        selectedProducts[prodIndex].quantity=0;
    }
    
    setProducts(selectedProducts);

    // alert('Dec working properly');
  }



  // let prod;
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <Cart products={products}/>
        </div>
      </header>

      <main>
        <div className="wrapper">
          {products.map((prod) => (
            <Card
              key={prod.pid}
              pDetails={prod}
              onQuanInc={(e) => onQuantityIncrease(e, prod)}
              onQuanDec={(e)=>onQuantityDecrease(e, prod)}
            />
          ))}

          {/* <Card
            prodName="Strawberry Shake"
            prodDetails="Finest Strawberries, Milk, Sugar"
          />

          <Card
            prodName="Chocolate Fantasy"
            prodDetails="Brownie with chocolate sauce topped with Vanilla Ice cream"
          />

          <Card
            prodName="Mediterranean Delight"
            prodDetails="Nuts and Dates from the soils of Algeria"
          /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
