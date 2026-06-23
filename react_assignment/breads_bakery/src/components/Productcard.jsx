export default function ProductCard({product}){
    return(
        <div className="product-card">
            <div className="image-wrapper">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-card-body">
              <span className="product-card-category">{product.category}</span>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-card-details">
                {product.details.map((detail, index) => (
                  <span key={index} className="product-card-detail">{detail}</span>
                ))}
              </div>
              <div className="product-card-footer">
                <span className="price">{product.price}</span>
                <button className="cta-btn-secondary">Learn More</button>
              </div>
            </div>
        </div>
    );
} 