import Product from './Product';
import './Products.css'

function Products(props) {
    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">{props.title}</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab1">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab1">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								<div id="tab1" className="tab-pane active">
									<div className="products-slick" data-nav="#slick-nav-1">
										<Product />
										<Product />										
										<Product />	
										<Product />	
										<Product />	
									</div>
									<div id="slick-nav-1" className="products-slick-nav"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Products;