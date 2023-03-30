import { Link, useLocation, useMatches } from 'react-router-dom';
import StoreContext from '../../contexts/StoreContext';
import './Breadcrumb.css'

function Breadcrumb({pageNotFound}) {
	let location = useLocation();
	let currentLink = "";
	let splitCrumbs = location.pathname.split('/');
	let title = splitCrumbs[splitCrumbs.length-1];
	let crumbs = splitCrumbs.filter((crumb) => crumb !== '')
	.map((crumb,index) => {
		currentLink += "/" + crumb;

		if (currentLink === location.pathname) {
			return (<li key={index}>{crumb}</li>)
		} else {
			return (<li key={index}><Link to={currentLink}>{crumb}</Link></li>)
		}
	});

    return (
		<div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">{title}</h3>
						<ul className="breadcrumb-tree">
							<li><Link to='/'>Home</Link></li>
							{crumbs}
						</ul>
					</div>
				</div>
			</div>
		</div>
    )
}




export default Breadcrumb;