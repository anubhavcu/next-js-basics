import { useRouter } from 'next/router';
const ProductDetail = () => {
  const router = useRouter();
  const id = router.query.productId;
  return <h1>Product Detail about product : {id}</h1>;
};
export default ProductDetail;
