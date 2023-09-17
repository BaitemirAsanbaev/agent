import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductsList.module.scss'
const ProductsList = () => {
  return (
    <div className={classes.ProductsList}>
      {[{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'},{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'},{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'},{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'},{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'},{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'},{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'},{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'},{title:'Cola classic 2l', price: 100, category: 'drink', company:'CocaCola corp'}].map((item, id)=>{
        return <ProductCard key={id} data={item}/>
      })}
    </div>
  );
}

export default ProductsList;
