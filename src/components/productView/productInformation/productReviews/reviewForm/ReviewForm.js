import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {MyRadioStar, MyTextInput, MyTextarea} from "../../../../form/FormFields";
import {collection, doc, increment, setDoc, updateDoc, serverTimestamp, getDocs} from "firebase/firestore"
import { db } from "../../../../../utils/firebase";
import AuthContext from "../../../../../contexts/auth/AuthContext";
import * as Yup from 'yup';
import './ReviewForm.css';

const ReviewForm = ({productId}) => {

    const navigate = useNavigate();
    const {username} = useContext(AuthContext);

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

        navigate(0)
	};

    const reviewtSchema = Yup.object().shape({
		name: Yup.string().required('*The name is required'),
		email: Yup.string().oneOf([username],'*You must use your username').required('*The email is required'),
		text: Yup.string().required('*Please give the review some text'),
		rating: Yup.number().min(1,'*Please give a rating').max(5).required('*Please give a rating')
	})
    
    return (
        <div id="review-form">
            <Formik
                initialValues={{name: '', email: '', text: '', rating: 0}}
                validationSchema={reviewtSchema}
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