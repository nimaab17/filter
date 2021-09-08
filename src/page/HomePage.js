
import ProductCard from '../components/Cards/ProductCard';
import classes from './HomePage.module.css'
import { cardItems } from "../data/mockData";
import Filter from '../components/filter/Filter';

function HomePage () {
    return(
        <div className={classes.main}>
            <div className={classes.main__content}>
                {cardItems.map(item=><ProductCard img={item.img} title={item.title} price={item.price} description={item.desc} /> )}
            </div>
            <div className={classes.main__filter}>
                <Filter />
            </div>
        </div>
    )
}
export default HomePage;