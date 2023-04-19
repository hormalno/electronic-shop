import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth/AuthContext";
import CartContext from "../../contexts/cart/CartContext";
import authorized from "../../hoc/authorized";
import { db } from "../../utils/firebase";
import { setDoc, doc, serverTimestamp, collection, getDoc } from "firebase/firestore";
import { MyCheckbox, MyRadio, MyTextInput, MyTextarea } from "../../components/form/FormFields";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import OrderSummary from "./orderSummary/OrderSummary";
import { useEffect } from "react";
import { useState } from "react";

const Checkout = () => {
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const {handleCheckout,cartItems, total} = useContext(CartContext);
	const {username,id} = useContext(AuthContext);
	const checkoutSchema = Yup.object().shape({
		firstname: Yup.string().required('*The first name is required'),
		lastname: Yup.string().required('*The last name is required'),
		email: Yup.string().oneOf([username],'*You must use your username').required('*The email is required'),
		address: Yup.string().required('*The address name is required'),
		city: Yup.string().required('*The city is required'),
		country: Yup.string().required('*The country is required'),
		acceptedTerms: Yup.boolean().oneOf([true],'*You must accept the terms and conditions'),
		payment: Yup.string().required('*You must choose a payment')
	})

	useEffect(() => {
		getDoc(doc(db,"users",id))
		.then((userSnap) => {
			setUser(userSnap.data());
		})		
	},[id])

	const onSubmitHandler = async (values) => {

		let orderData = {...values};
		orderData.items = cartItems.map(product => {
			return ({
				productId: product.id,
				quantity: product.quantity
			})
		});
		orderData.totalPrice = total;
		orderData.userId = id;
		orderData.createdAt = serverTimestamp();

		const orderRef = doc(collection(db, "orders"));
		await setDoc(orderRef, {...orderData, id: orderRef.id})

		handleCheckout()
		navigate("/")
	}

    return (
		<Formik
			initialValues={{
				firstname: user.firstname,
				lastname: user.lastname,
				email: username,
				address: user.address,
				city: user.city,
				country: user.country,
				orderNotes: '',
				acceptedTerms: false,
				payment: ''
			}}
			enableReinitialize={true}
			validationSchema={checkoutSchema}
			onSubmit={onSubmitHandler}>
			{({errors,touched, isSubmitting}) => (
				<Form>
				<div className="section">
					<div className="container">
						<div className="row">					
							<div className="col-md-7">
								<div className="billing-details">
									<div className="section-title">
										<h3 className="title">Billing address</h3>
									</div>
									<MyTextInput type="text" name="firstname" placeholder="First Name" />
									<MyTextInput type="text" name="lastname" placeholder="Last Name" />
									<MyTextInput type="email" name="email" placeholder="Email" />
									<MyTextInput type="text" name="address" placeholder="Address" />
									<MyTextInput type="text" name="city" placeholder="City" />
									<MyTextInput type="text" name="country" placeholder="Country" />
								</div>
								<MyTextarea containerclass="order-notes" name="orderNotes" placeholder="Order Notes"></MyTextarea>
							</div>
							<div className="col-md-5 order-details">
								<div className="section-title text-center">
									<h3 className="title">Your Order</h3>
								</div>
								<OrderSummary />
								<div className="payment-method">								
									<MyRadio name="payment" id="payment1" value="payment1">
										<span></span>Direct Bank Transfer
									</MyRadio>
									<MyRadio name="payment" id="payment2" value="payment2">
										<span></span>Cheque Payment
									</MyRadio>
									<MyRadio name="payment" id="payment3" value="payment3">
										<span></span>Paypal System
									</MyRadio>
									{touched.payment && errors.payment && (<div className="errorClass">{errors.payment}</div>)}
								</div>
								<MyCheckbox id="acceptedTerms" name="acceptedTerms">
									<span></span>
									I've read and accept the <Link to="#">terms & conditions</Link>
								</MyCheckbox>
								<button type="submit" className="primary-btn order-submit" disabled={isSubmitting}>Place order</button>
							</div>
						</div>
					</div>
				</div>
			</Form>)}
		</Formik>)
};

export default authorized(Checkout);