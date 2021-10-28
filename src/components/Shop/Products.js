import ProductItem from './ProductItem';
import classes from './Products.module.css';

const NiKOLA_PRODUCTS = [
 {
  id:'b1',
  price:5,
  title:'My First Page',
  description:'My first code I ever wrote'
},
 {id:'b2',
  price:4,
  title:'My Second Page',
  description:'The second code I ever wrote'}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {NiKOLA_PRODUCTS.map(item => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;