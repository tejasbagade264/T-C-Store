import '../styles/filter.css';
import { useValue } from "../itemContext";



function Filter() {
     const Opt = [ "Categories", "About Us" ,"Contact" ];
    // const [selectedCategories, setSelectedCategories] = useState([]);

    // const toggleCategory = (category) => {
    //     if (selectedCategories.includes(category)) {
    //         setSelectedCategories(selectedCategories.filter((c) => c !== category));
    //     } else {
    //         setSelectedCategories([...selectedCategories, category]);
    //     }
    // };

    // return (
    //     <div className="filter-container">
    //         {categories.map((category, index) => (
    //             <div
    //                 className={`filter-item ${selectedCategories.includes(category) ? 'selected' : ''}`}
    //                 key={index}
    //                 onClick={() => toggleCategory(category)}
    //             >
    //                 {category}
    //             </div>
    //         ))}
    //     </div>
    // );

    
    const { addFilter , categories, selectedCategories, scrollToBody} = useValue();

    return (
        <>
        <div className="filter-container">

        {Opt.map((options, index) => (
            <>
                 <div  key={index} className='types' >
                    {options}
                </div>

                </>
                
        ))}

             <div style={{ display: 'none' , color:'red'}} className="data-box">
                            Data to display
                         </div>
            </div>
        </>
    )

}

export default Filter;
