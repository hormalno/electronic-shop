import "./ProductWidget.css"

const ProductWidget = () => {

    return (  
        <div className="product-widget">
            <div className="product-img">
                <img src="../img/product16.png" alt="" />
            </div>
            <div className="product-body">
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
            </div>
            <button className="delete"><i className="fa fa-close"></i></button>
        </div>
    );
}
 
export default ProductWidget;