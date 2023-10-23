import { createContext,useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import { useEffect } from "react";
import ProductDetail from "./pages/ProductDetails";


const itemContext = createContext();

function useValue(){
    const value= useContext(itemContext);
    return value;
  }


  /////////////////////////////////////////////////////////////////////////
function CustomItemContext({children}) {

  const navigate = useNavigate();
  const targetRef = useRef(null);


    const [cart , setCart] =useState([]);
    const [total, setTotal]=useState(0);
    const [quantity, setQuanity] =useState(0);
    const categories = [ "Mens", "Womens", "Kids" ];
    const [selectedCategories, setSelectedCategories] = useState('');
    const [categoryData, setcategoryData]= useState([]);
    
    
    const [allData, setAllData] = useState([]);
    const [currentPage, setCurrentPage] = useState(() => {
      const storedPage = localStorage.getItem('currentPage');
      return storedPage || 'home';
    });
    console.log("initailCurrentPAge:",currentPage);

  //fetch Category data
    useEffect(()=>{
      fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => setcategoryData(data.slice(0, 18)));
       
    },[])

    
    const clickHome = () => {
      localStorage.setItem('currentPage', 'home');
      navigate('/');
    };

    const addFilter=(cat) => {
      setSelectedCategories(cat);
      console.log("selectedCategories:",selectedCategories);
    }
    
  //Click on product deatails
    const clickprodDetails=(item)=>{
      localStorage.setItem('currentPage','ProductDetailPage');
      console.log('currentPage:',currentPage);
        navigate(`/${item.id}/productDetails`);
    }

    const CatClick = (categ) =>{
      setSelectedCategories(categ); 
      console.log("selectedCtegory", selectedCategories);
    }



    const scrollToMiddle = () => {
      const windowHeight = window.innerHeight;
      const margin = 100; // Adjust this value to set your desired margin
    
      // Calculate the scroll position to reach the middle of the page with margin above the target element
      const scrollPosition = targetRef.current.offsetTop - (windowHeight / 4) + margin;
    
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    };
    

  

   //Navigate to cart
      const handleCart =() =>{
        localStorage.setItem('currentPage','cart');
        console.log('currentPage:',currentPage);
        navigate("/cart");
        }


  //LOgoutbutton
      const handleLogOut = async () => {
        const auth = getAuth(); // Get the authentication object
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.setItem('currentPage','Login');
        navigate("/login"); // Use lowercase "navigate"
      }

      const handleAddToCart = (prod) => {  
        const index= cart.findIndex((item) => item.id===prod.id);

        if(index === (-1)){
        
        setCart((prevCart) => {
          const updatedCart = [...prevCart, { ...prod,qty:1 }];
          console.log(updatedCart); // Log the updated cart
          toast.success(` ${prod.name}Added to cart`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setTotal(total+prod.price);
          setQuanity(quantity+1);
          return updatedCart; // Return the updated cart as the new state
        });
      }else{
        const updatedCart = [...cart];
        updatedCart[index].qty += 1;
        setCart(updatedCart);
        setTotal(total+prod.price);
        setQuanity(quantity+1);
        toast.success(`${prod.name}Added to cart`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
     }
      }
      

    return(
        <>
        <itemContext.Provider value={{ allData,setAllData,clickHome,currentPage,setCurrentPage,categories,selectedCategories,quantity,total,cart,targetRef,categoryData,setcategoryData,clickprodDetails,CatClick,scrollToMiddle,addFilter, handleCart, handleLogOut, handleAddToCart }}>
            {children}
        </itemContext.Provider>
        <ToastContainer /> {/* Should be outside the context provider */}
    </>
    );
}

export {itemContext, useValue}
export default CustomItemContext;