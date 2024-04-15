import './App.css';
import './ImageItem'
import { BsSearch } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsBoxArrowUp } from "react-icons/bs";
import ImageItem from './ImageItem';

function App() {
  return (
    <div className="App">
     <div className="app-container">
     <h1>T A N N   T R I M</h1>
     <div className="app-container-sub">
     <BsSearch className="icon"/>
     <BsFillPersonFill />
     <BsBookmark />
     <BsBag />
     </div>
     </div>
     <div className='app-container-1'>
      <h1>Bags</h1>
      <h1>Travel</h1>
      <h1>Accesories</h1>
      <h1>Gifting</h1>
      <h1>Jwellery</h1>
     </div>
     <div className="app-container-2">
     <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/c_thumb,w_200,g_face/v1713097868/Frame_46111_1_xzzxjm.png" alt="img" />
      <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/c_thumb,w_200,g_face/v1713097889/Frame_5012_crii1g.png" alt="img"/>
      <img alt="img" src="https://res.cloudinary.com/dfodxbgfn/image/upload/c_thumb,w_200,g_face/v1713098031/Frame_4913_ddxfm2.png" />
      <img alt="img" src="https://res.cloudinary.com/dfodxbgfn/image/upload/c_thumb,w_200,g_face/v1713098054/Frame_1314_pncoqp.png" />
      <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/c_thumb,w_200,g_face/v1713098091/Frame_4915_zgggfl.png" alt="img" />
      <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/c_thumb,w_200,g_face/v1713098102/Frame_4916_kefoxy.png" alt="img" />
      <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/c_thumb,w_200,g_face/v1713098116/Frame_2217_d4jnbp.png" alt="img" />
      <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/c_thumb,w_200,g_face/v1713098126/Frame_2018_fcmqav.png" alt="img" />
     </div>
     <div className='app-container-sub-1'>
      <h1>Bags . Backpacks</h1>
      <div className='small-container'>
        <h1>13 products</h1>
        <div className="icon-1">
        <BsBoxArrowUp />
        </div>
      </div>
     </div>
    <ImageItem />
    </div>
  );
}

export default App;
