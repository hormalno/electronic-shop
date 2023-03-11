import ProductShortView from "../productShortView/ProductShortView";
import Aside from "./aside/Aside";
import "./Store.css";

function Store() {
    return (
		// <div id="breadcrumb" class="section">
		// 	<!-- container -->
		// 	<div class="container">
		// 		<!-- row -->
		// 		<div class="row">
		// 			<div class="col-md-12">
		// 				<ul class="breadcrumb-tree">
		// 					<li><a href="#">Home</a></li>
		// 					<li><a href="#">All Categories</a></li>
		// 					<li><a href="#">Accessories</a></li>
		// 					<li class="active">Headphones (227,490 Results)</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div class="section">
			<div class="container">
				<div class="row">
					<Aside />
					<div id="store" class="col-md-9">
						<div class="store-filter clearfix">
							<div class="store-sort">
								<label>
									Sort By:
									<select class="input-select">
										<option value="0">Popular</option>
										<option value="1">Position</option>
									</select>
								</label>
								<label>
									Show:
									<select class="input-select">
										<option value="0">20</option>
										<option value="1">50</option>
									</select>
								</label>
							</div>
							<ul class="store-grid">
								<li class="active"><i class="fa fa-th"></i></li>
								<li><a href="#"><i class="fa fa-th-list"></i></a></li>
							</ul>
						</div>
						<div class="row">
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product01.png" />
							</div>
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product02.png" />
							</div>
							<div class="clearfix visible-sm visible-xs"></div>
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product03.png" />
							</div>
							<div class="clearfix visible-lg visible-md"></div>
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product04.png" />
							</div>
							<div class="clearfix visible-sm visible-xs"></div>
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product05.png" />
							</div>
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product06.png" />
							</div>
							<div class="clearfix visible-lg visible-md visible-sm visible-xs"></div>
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product07.png" />
							</div>
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product08.png" />
							</div>
							<div class="clearfix visible-sm visible-xs"></div>
							<div class="col-md-4 col-xs-6">
								<ProductShortView img="./img/product09.png" />
							</div>
						</div>
						<div class="store-filter clearfix">
							<span class="store-qty">Showing 20-100 products</span>
							<ul class="store-pagination">
								<li class="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Store;