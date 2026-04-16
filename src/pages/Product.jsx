import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=5&skip=${page * 5}`)
      .then((res) => res.json())
      .then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, [page]);
    if (loading) return <p>Loading...</p>;
  return (
    
    <div >
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px"
        }}>
          <h4>{p.title}</h4>
          <Link to={`/product/${p.id}`}>View Details</Link>
        </div>
      ))}

      <br />
      <button onClick={() => setPage(page - 1)} disabled={page === 0} style={{
        margin: "10px",
        padding: "6px 12px",
        cursor: "pointer"
        }}>
        Prev
      </button>

      <button onClick={() => setPage(page + 1)} 
        style={{
        margin: "10px",
        padding: "6px 12px",
        cursor: "pointer"
        }}>
        Next
      </button>
    </div>
  );
}

export default Products;