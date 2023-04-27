import AsideFilter from "./asideFilter/AsideFilter";
import Content from "./content/Content";

const Store = () => {
    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<AsideFilter />
					<Content />
				</div>
			</div>
		</div>
    )
}

export default Store;