import { useContext, useState, useEffect } from "react";
import {AuthContext} from "../../contexts/AuthContextProvider";
import authorized from "../../hoc/authorized";
import { db } from "../../utils/firebase";
import { MyCheckbox, MyRadio, MyTextInput, MyTextarea } from "../../components/form/FormFields";
import { Formik, Form, Field } from "formik";
import { getDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import CartContext from "../../contexts/cart/CartContext";

const Checkout = () => {

	const {handleCheckout} = useContext(CartContext);

	const validate = (values) => {
        const errors = {};

        if (!values.firstname) {
            errors.firstname = '*The first name is required!'
        };

		if (!values.lastname) {
            errors.lastname = '*The last name is required!'
        };
      
        if (!values.email) {
          errors.email = '*The email is required!';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = '*Invalid email address!';
        };        

        if (!values.address) {
            errors.address = '*The address is required!'
        };

		if (!values.city) {
            errors.city = '*The city is required!'
        };

		if (!values.country) {
            errors.country = '*The country is required!'
        };

		if (!values.terms) {
            errors.terms = '*You must accept the terms and conditions!'
        };

		if (!values.payment) {
            errors.payment = '*You must choose a payment!'
        };
      
        return errors;
    };

	const onSubmitHandler = (values, {isSubmitting}) => {
		console.log(values)
		handleCheckout()
		isSubmitting = false;
	}

    return (
		<Formik
			initialValues={{
				firstname: '',
				lastname: '',
				email: '',
				address: '',
				city: '',
				country: '',
				orderNotes: '',
				terms: false,
				payment: ''
			}}
			validate={validate}
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
									<MyTextInput class="input" type="text" name="firstname" placeholder="First Name" />
									<MyTextInput class="input" type="text" name="lastname" placeholder="Last Name" />
									<MyTextInput class="input" type="email" name="email" placeholder="Email" />
									<MyTextInput class="input" type="text" name="address" placeholder="Address" />
									<MyTextInput class="input" type="text" name="city" placeholder="City" />
									<MyTextInput class="input" type="text" name="country" placeholder="Country" />
								</div>
								<MyTextarea containerClass="order-notes" name="orderNotes" placeholder="Order Notes"></MyTextarea>
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
								<MyCheckbox id="terms" name="terms">
									<span></span>
									I've read and accept the <Link to="#">terms & conditions</Link>
								</MyCheckbox>
								<button type="submit" className="primary-btn order-submit" disabled={isSubmitting}>Place order</button>
							</div>
						</div>
					</div>
				</div>
			</Form>)}
		</Formik>
    )
};

export default authorized(Checkout);