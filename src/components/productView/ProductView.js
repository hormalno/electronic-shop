import ProductOverview from './productOverview/ProductOverview';
import ProductInformation from './productInformation/ProductInformation';
import ProductImages from './productImages/ProductImages';

function ProductView({product}) {
    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<ProductImages images={product.images} />
					<ProductOverview product={product} />
					<ProductInformation product={product} />
				</div>
			</div>
		</div>
    )
};

export default ProductView;