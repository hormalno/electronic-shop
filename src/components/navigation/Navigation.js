import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav id="navigation">
			<div className="container">
				<div id="responsive-nav">
					<ul className="main-nav nav navbar-nav">
						<li><NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined }>Home</NavLink></li>
						<li><NavLink to="/hotdeals" className={({ isActive }) => isActive ? "active" : undefined }>Hot Deals</NavLink></li>
						<li><NavLink to="/categories" className={({ isActive }) => isActive ? "active" : undefined }>Categories</NavLink></li>
						<li><NavLink to="/laptops" className={({ isActive }) => isActive ? "active" : undefined }>Laptops</NavLink></li>
						<li><NavLink to="/smartphones" className={({ isActive }) => isActive ? "active" : undefined }>Smartphones</NavLink></li>
						<li><NavLink to="/cameras" className={({ isActive }) => isActive ? "active" : undefined }>Cameras</NavLink></li>
						<li><NavLink to="/accessories" className={({ isActive }) => isActive ? "active" : undefined }>Accessories</NavLink></li>
					</ul>
				</div>
			</div>
		</nav>
    )
}

export default Navigation;