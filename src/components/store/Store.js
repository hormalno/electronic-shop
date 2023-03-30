import Aside from "./aside/Aside";
import Content from "./content/Content";


const Store = () => {
    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<Aside />
					<Content />
				</div>
			</div>
		</div>
    )
}

export default Store;