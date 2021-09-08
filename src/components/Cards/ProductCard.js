import React from 'react';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import classes from './ProductCard.module.css'

function ProductCard (props){
    return(
        <div className={classes.card}>
            <img src={props.img} alt="sample71"/>
            <div className={classes.price}>${props.price}</div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description} </p>
                <div className={classes.bottomNav}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <Button variant="outlined">Add to Cart</Button>
                    
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard;