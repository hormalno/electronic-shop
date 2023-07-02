const ProductListItem = ({viewType,product}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <h4>{product.category}</h4>
        </div>
    )
};

export default ProductListItem;