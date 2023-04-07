import { Formik, Form, Field } from "formik";
import isAuth from "../../../../../hoc/isAuth";
import { MyTextInput } from "../../../../form/FormFields";
import {collection, doc, increment, setDoc, updateDoc, serverTimestamp} from "firebase/firestore"
import { db } from "../../../../../utils/firebase";
import './ReviewForm.css'

const ReviewForm = ({productId}) => {

    const SubmitHandler = async (values) => {

        await updateDoc(doc(db,"products",productId), {reviewsCount: increment(1)})

        const reviewRef = doc(collection(db, "products", productId, "reviews"))
        await setDoc(reviewRef, {
            id: reviewRef.id,
            email: values.email,
            name: values.name,
            rating: values.rating,
            text: values.text,
            createdAt: serverTimestamp()
        });

        console.log("Review added!");
	};
    
	const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = '*The name is required!'
        };
      
        if (!values.email) {
          errors.email = '*The email is required!';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = '*Invalid email address!';
        };        

        if (!values.text) {
            errors.text = '*Please give the review text!'
        };

        if (values.rating === 0) {
            errors.rating = '*Please give a rating!'
        };
      
        return errors;
      };
    
    return (
        <div className="col-md-3">
            <div id="review-form">
                <Formik
                    initialValues={{name: '', email: '', text: '', rating: 0}}
                    validate={validate}
					onSubmit={SubmitHandler}>
                    {({errors,touched, isSubmitting}) => (
                        <Form className="review-form">
                            <MyTextInput className="input" name="name" type="text" placeholder="Your Name" />
                            <MyTextInput className="input" name="email" type="email" placeholder="Your Email" />
                            <MyTextInput className="input" name="text" as="textarea" placeholder="Your Review" />
                            <div className="input-rating">
                                <span>Your Rating: </span>
                                <div className="stars" role="group" aria-labelledby="my-radio-group">
                                    <Field id="star5" name="rating" value="5" type="radio"/><label htmlFor="star5"></label>
                                    <Field id="star4" name="rating" value="4" type="radio"/><label htmlFor="star4"></label>
                                    <Field id="star3" name="rating" value="3" type="radio"/><label htmlFor="star3"></label>
                                    <Field id="star2" name="rating" value="2" type="radio"/><label htmlFor="star2"></label>
                                    <Field id="star1" name="rating" value="1" type="radio"/><label htmlFor="star1"></label>
                                </div>
                                {touched.rating && errors.rating ? (<div className="errorClass">{errors.rating}</div>) : null}
                            </div>
                            <button className="primary-btn" type="submit" disabled={isSubmitting}>Submit</button>
                        </Form>)}
                </Formik>
            </div>
        </div>
    )
};

export default isAuth(ReviewForm);