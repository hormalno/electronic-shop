import Aside from "./aside/Aside";
import Content from "./content/Content";


const Store = ({category}) => {
    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<Aside />
					<Content category={category} />
				</div>
			</div>
		</div>
    )
}

export default Store;