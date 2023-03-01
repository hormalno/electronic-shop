import { Link } from 'react-router-dom';
import './Breadcrumb.css'

function Breadcrumb() {
    return (
		<div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">Page not found</h3>
						<ul className="breadcrumb-tree">
							<li><Link to="/">Home</Link></li>
							<li className="active">Blank</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Breadcrumb;