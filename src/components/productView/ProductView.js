import ProductOverview from './productOverview/ProductOverview';
import ProductInformation from './productInformation/ProductInformation';
import ProductImages from './productImages/ProductImages';

const ProductView = () => {

    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<ProductImages />
					<ProductOverview />
					<ProductInformation />
				</div>
			</div>
		</div>
    )
};

export default ProductView;