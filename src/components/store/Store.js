import AsideFilter from "./asideFilter/AsideFilter";
import Content from "./content/Content";
import TopFilter from "./topFilter/TopFilter";

const Store = () => {
    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<AsideFilter />
					<div id="store" className="col-md-9">
						<TopFilter />
						<Content />
					</div>
				</div>
			</div>
		</div>
    )
}

export default Store;