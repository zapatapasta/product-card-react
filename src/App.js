import './App.css';
import Product from './Product/Product';
import img1 from './images/images.jpg';
import img2 from './images/imagesds.jpg';
import img3 from './images/Untitled.png';

function App() {

  const allProducts=[
    {id:1, title: 'aaa', image: img1 , price: 230, count: 20},
    {id:1, title: 'abb', image: img2 , price: 130, count: 50},
    {id:1, title: 'abc', image: img3 , price: 30, count: 2},
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
