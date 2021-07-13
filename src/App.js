import React, {useState} from 'react';
import data from './data';
import  MenuItems from './items'
import ButtonCategory  from './category'
const allcategory = ['all', ...new Set(data.map((items) => items.category))] 
console.log(allcategory)
function App() {
  const [item, setItem] = useState(data)
  const [categories, setCategories] =useState(allcategory);

  const filterItems =(category) => {
    if(category==='all'){
      return setItem(data)
    }
    const newItems = data.filter((items)=>items.category === category)
    return setItem(newItems)
  } 
  return(
     <main>
       <section className='menu  section'>
         <div>
           <h2 className='title'> Our Menu </h2>
           <div  className='underline'/>
         </div>
         <ButtonCategory categories={categories} filterItems ={filterItems} />
         <MenuItems item= {item}  />
       </section>

      </main>
    )

 
}
export default App;