import classes from './ProductCard.module.scss'

const ProductCard = ({data}) => {
  return (
    <div className={classes.ProductCard}>
      <span className={classes.title}>{data.title}</span>
      <span className={classes.price}>{data.price}$</span>
      <span className={classes.add}>Add</span>
      <span className={classes.company}>@{data.company}</span>
    </div>
  );
}

export default ProductCard;
