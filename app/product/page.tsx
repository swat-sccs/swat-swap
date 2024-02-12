import style from './Product.module.css';

export default function Product() {
  return (
    <main className={style.mainContainer}>
      <div className={style.subText}>Home &gt; C1 &gt; C2</div>
      <div>Image</div>
      <div>Product Name</div>
      <div>Price</div>
      <div>Product Description</div>
      <div>Contact Details</div>
      <div>Post date</div>
    </main>
  );
}
