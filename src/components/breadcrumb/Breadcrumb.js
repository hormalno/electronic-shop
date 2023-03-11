import { Link } from 'react-router-dom';
import './Breadcrumb.css'

function Breadcrumb(props) {
	const paths = props.path.split('/')
	.map((path) => {
		let pathObj = {};
		switch (true) {
			case path === "all categories":
				pathObj.title = "categories"
				pathObj.link = "categories"
				pathObj.isActive = false;
				break;
			case path === "blank":
				pathObj.title = "blank"
				pathObj.link = "active"
				pathObj.isActive = true;
				break;
			case path === "home":
					pathObj.title = "home"
					pathObj.link = "/"
					pathObj.isActive = false;
					break;
			default:
				pathObj.title = path;
				pathObj.link = "/" + path;
				pathObj.isActive = false;
		}
		return pathObj;
	})

    return (
		<div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">{props.title}</h3>
						<ul className="breadcrumb-tree">
							{paths.map(x => {
								if (x.isActive) {
									return (<li className={x.isActive ? "active" : undefined}>{x.title}</li>)
								} else {
									return (<li><Link to={x.link} >{x.title}</Link></li>)
								}	
							})};
						</ul>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Breadcrumb;