import { Formik, Form } from "formik";
import {MyRadioStar, MyTextInput, MyTextarea} from "../../../../form/FormFields";
import {collection, doc, increment, setDoc, updateDoc, serverTimestamp, getDocs} from "firebase/firestore"
import { db } from "../../../../../utils/firebase";
import './ReviewForm.css';

const ReviewForm = ({productId}) => {

    const SubmitHandler = async (values) => {
        const reviewRef = doc(collection(db, "products", productId, "reviews"))
        await setDoc(reviewRef, {
            id: reviewRef.id,
            email: values.email,
            name: values.name,
            rating: +values.rating,
            text: values.text,
            createdAt: serverTimestamp()
        });

        await updateDoc(doc(db,"products",productId), {reviewsCount: increment(1)})

        const querySnapshot = await getDocs(collection(db, "products", productId, "reviews"))

        let ratingTotal = 0;
        querySnapshot.forEach(reviewDoc => {
            ratingTotal += reviewDoc.data().rating;
        })
        let rating = ratingTotal / querySnapshot.docs.length;
        await updateDoc(doc(db,"products",productId), {rating: rating.toFixed(2)})

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
            errors.text = '*Please give the review some text!'
        };
        if (+values.rating === 0) {
            errors.rating = '*Please give a rating!'
        };
      
        return errors;
    };
    
    return (
        <div id="review-form">
            <Formik
                initialValues={{name: '', email: '', text: '', rating: 0}}
                validate={validate}
                onSubmit={SubmitHandler}>
                {({errors, touched, isSubmitting}) => (
                    <Form className="review-form">
                        <MyTextInput name="name" type="text" placeholder="Your Name" />
                        <MyTextInput name="email" type="email" placeholder="Your Email" />
                        <MyTextarea containerclass="form-group" name="text" placeholder="Your Review"></MyTextarea>
                        <div className="input-rating">
                            <span>Your Rating: </span>
                            <div className="stars" role="group" aria-labelledby="my-radio-group">
                                <MyRadioStar id="star5" name="rating" value="5" />
                                <MyRadioStar id="star4" name="rating" value="4" />
                                <MyRadioStar id="star3" name="rating" value="3" />                                
                                <MyRadioStar id="star2" name="rating" value="2" />
                                <MyRadioStar id="star1" name="rating" value="1" />
                            </div>
                            {touched.rating && errors.rating ? (<div className="errorClass">{errors.rating}</div>) : null}
                        </div>
                        <button className="primary-btn" type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>)}
            </Formik>
        </div>
    )
};

export default ReviewForm;