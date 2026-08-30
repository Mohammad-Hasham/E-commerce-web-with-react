function ProductDetails() {
  return (
    <section className="product-details">
      <div className="imges-slide"></div>
      <div className="product-details-img"></div>
      <div className="product-details-informations">
        <h2> product name </h2>
        <div className="product-information-rate"></div>
        <div className="product-information-price"></div>
        <p></p>
        <dl className="products-informations-deals">
          <dd>Brand:</dd>
          <dt>Sumsung</dt>

          <dd>SKU:</dd>
          <dt>wh-it2900</dt>

          <dd>Avability:</dd>
          <dt>inStock</dt>

          <dd>Color:</dd>
          <dt>black</dt>

          <dd>Quantity</dd>
          <dt>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </dt>
        </dl>
        <div>
          <button>Add to Cart</button>
          <button>Buy Now</button>
          <p>Add to Wishlist</p>
        </div>
      </div>
      <div>
        {/* hi */}
    
      </div>
    </section>
  );
}

export default ProductDetails;
