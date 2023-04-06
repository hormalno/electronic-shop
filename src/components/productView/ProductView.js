import ProductOverview from './productOverview/ProductOverview';
import ProductInformation from './productInformation/ProductInformation';
import ProductImages from './productImages/ProductImages';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import ProductContext from '../../contexts/ProductContext';

function ProductView() {

	let {productId} = useParams();
    const product = useProduct(productId);

    return (
		<ProductContext.Provider value={product}>
			<div className="section">
				<div className="container">
					<div className="row">
						<ProductImages />
						<ProductOverview />
						<ProductInformation />
					</div>
				</div>
			</div>
		</ProductContext.Provider>
    )
};

export default ProductView;