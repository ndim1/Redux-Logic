import ProductItem from './ProductItem';
import classes from './Products.module.css';

const NiKOLA_PRODUCTS = [
 {
  id:'b1',
  price:5,
  title:'My First Book',
  description:'My first book I ever wrote'
},
 {id:'b2',
  price:4,
  title:'My Second Book',
  description:'The second book I ever wrote'}
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