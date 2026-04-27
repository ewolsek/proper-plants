function PlantGrid({ product, addPlants }) {
  return (
    <div>
      {" "}
      <b>{product.productName}</b> {" "}
      <button onClick={() => addPlants(product)}>Add to Cart</button>
    </div>
  );
}

export default PlantGrid;
