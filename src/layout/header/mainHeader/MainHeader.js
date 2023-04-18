import Logo from './fragments/Logo'
import SearchBar from './fragments/SearchBar'
import Wishlist from './fragments/Wishlist'
import CartWidget from './fragments/cart/CartWidget'
import './MainHeader.css'

function MainHeader() {
	return (
		<div id="header">
			<div className="container">
				<div className="row">
					<Logo/>
					<SearchBar />
					<div className="col-md-3 clearfix">
						<div className="header-ctn">
							<Wishlist />
							<CartWidget />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainHeader;