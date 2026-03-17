import "./css/Style.css";
import Card from "./Components/Card";
import Cart from "./Components/Cart";

function App() {

  let products=[
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
    }
  ];
  // let prod;
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <Cart/>
        </div>
      </header>

      <main>
        <div className="wrapper">

          {
            products.map(prod=>(
              <Card key={prod.pid} pDetails={prod}/>
            ))
          }



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
