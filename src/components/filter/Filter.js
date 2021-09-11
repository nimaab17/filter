import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import { useState  } from 'react';
import { cardItems } from "../../data/mockData";
import classes from './Filter.module.css'

function Filter (){
    const [titleFilter , setTitleFilter] = useState('');
    const [priceFilter , setPriceFilter] = useState(0);

   
    const handleTitleFilter = (event) => {
        setTitleFilter(event.target.value);
        const titleData = cardItems.map((item) =>{
            return item.title 
        } )
        const filterData = titleData.find(item => item.includes(titleFilter))
        console.log(filterData);

      };
      
        const price =     cardItems.map(item => item.price) 
        const minPrice = Math.min(...price)
        const maxPrice = Math.max(...price)
      function handlePrice (event, newValue) {
        setPriceFilter(newValue);
        console.log(newValue);
        // const priceData = cardItems.map((item) =>{
        //     return item.title 
        // } )
        // const filterData = priceData.filter(item => item.includes(titleFilter))
        // console.log(filterData);
      }
    return (
        <div className={classes.filter}> 
            <TextField onChange={ handleTitleFilter } label="title" variant="outlined" />
            <p>{titleFilter}</p>
            <Slider
                onChange={handlePrice}
                defaultValue={20}
                
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={100}
            />
            <p>{priceFilter}</p>
        </div>
    )
   
}
export default Filter
