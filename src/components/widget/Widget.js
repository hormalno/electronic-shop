import WidgetSection from './widgetSection/WidgetSection';

function Widget(props) {
	
    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<WidgetSection mockData={props.mockData} />
					<WidgetSection mockData={props.mockData} />
					<div className="clearfix visible-sm visible-xs"></div>
					<WidgetSection mockData={props.mockData} />
				</div>
			</div>
		</div>
    )
}

export default Widget;