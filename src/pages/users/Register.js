import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../../components/form/FormFields';
import { db, auth } from '../../utils/firebase';

const Register = () => {

	const navigate  = useNavigate();

	const onSubmitHandler = (values) => {
		let data = {
			firstname: values.firstname,
			lastname: values.lastname,
			address: values.address,
			city: values.city,
			country: values.country
		};

		createUserWithEmailAndPassword(auth, values.email, values.password)
		.then((cred) => setDoc(doc(db, "users", cred.user.uid),data)
						.then(() => navigate("/"))
						.catch(e => console.log(e)))
		.catch(e => console.log(e));		
	};	

	const RegisterSchema = Yup.object().shape({		
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().min(6, 'The password must be at least 6 characters!').required('Required'),
		repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
		firstname: Yup.string().required('Required'),
		lastname: Yup.string().required('Required'),
		address: Yup.string().required('Required'),
		city: Yup.string().required('Required'),
		country: Yup.string().required('Required')
	});

    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="billing-details">
							<div className="section-title">
								<h3 className="title">Register</h3>
							</div>
						</div>
						<Formik 
							initialValues={{
								email: '',
								password: '',
								repeatPassword: '',
								firstname: '',
								lastname: '',
								address: '',
								city: '',
								country: '',
							}}
							validationSchema={RegisterSchema}
							onSubmit={onSubmitHandler}>
							<Form>
								<MyTextInput type="email" name="email" placeholder="Email" />
								<MyTextInput type="password" name="password" placeholder="Enter Your Password" />
								<MyTextInput type="password" name="repeatPassword" placeholder="Repeat Your Password" />
								<MyTextInput type="text" name="firstname" placeholder="First Name" />
								<MyTextInput type="text" name="lastname" placeholder="Last Name" />
								<MyTextInput type="text" name="address" placeholder="Address" />
								<MyTextInput type="text" name="city" placeholder="City" />
								<MyTextInput type="text" name="country" placeholder="Country" />									
								<div className="form-group">
									<button type="submit" className="primary-btn">Submit</button>
								</div>
							</Form>
						</Formik>
					</div>					
				</div>
			</div>
		</div>
    )
};

export default Register;