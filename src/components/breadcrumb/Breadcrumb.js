import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import './Breadcrumb.css'

const Breadcrumb = () => {

	const {pathname} = useLocation();
	const {productId} = useParams();
	const [crumbs, setCrumbs] = useState([]);
	const [title, setTitle] = useState('');
	

	useEffect(() => {
		const getProductName =  async () => {		
			if (productId) {
				const productSnap = await getDoc(doc(db, "products", productId))
				return productSnap.data().name;
			};
			return '';
		};
		getProductName().then((productName) => {
			let currentLink = "";
			let paramCrumbs = pathname.split('/')
			.filter((crumb) => crumb !== '')
			.map((crumb,index) => {
				currentLink += "/" + crumb;
				return {
					id: index,
					crumb: currentLink === pathname && productName ? productName : crumb,
					link: currentLink === pathname ? "" : currentLink
				}
			});
			setCrumbs(paramCrumbs)
			setTitle(paramCrumbs[paramCrumbs.length-1].crumb)
		})
	}, [pathname,productId])

    return (
		<div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">{title}</h3>
						<ul className="breadcrumb-tree">
							<li><Link to='/'>Home</Link></li>
							{crumbs && crumbs.map(({id,crumb,link}) => {
								return (link ? <li key={id}><Link to={link}>{crumb}</Link></li> : <li key={id}>{crumb}</li>)
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Breadcrumb;