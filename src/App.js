import './App.css';
import Product from './Product/Product';

function App() {

  const allProducts=[
    {id:1, title: 'aaa', image: "images/Untitled.png", price: 230, count: 20},
    {id:1, title: 'abb', image: 'images/images.jpg', price: 130, count: 50},
    {id:1, title: 'abc', image: 'images/imagesds.jpg', price: 30, count: 2},
  ]
  return (
    <div className='container'>
      <Product {...allProducts[0]}></Product>
      <Product {...allProducts[1]}></Product>
      <Product {...allProducts[2]}></Product>
    </div>
  );
}

export default App;
