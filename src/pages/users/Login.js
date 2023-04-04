import {useNavigate} from "react-router-dom";
import {auth} from "../../utils/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../../components/form/FormFields';
import isNotAuth from "../../hoc/isNotAuth";

const Login = (props) => {

	const navigate  = useNavigate();

	const SubmitHandler = (values) => {
		signInWithEmailAndPassword(auth, values.email, values.password)
		.then(userCredential => {
			navigate("/")
		}).catch(e => console.log(e))
	};

	const LoginSchema = Yup.object().shape({		
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().min(6, 'The password must be at least 6 characters!').required('Required')
	});

    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="billing-details">
							<div className="section-title">
								<h2 className="title">Log In</h2>
							</div>
							<Formik 
								initialValues={{
									email: '',
									password: ''
								}}
								validationSchema={LoginSchema}
								onSubmit={SubmitHandler}>
								<Form>
									<div className="form-group">
										<MyTextInput className="input" type="email" name="email" placeholder="Email" />
									</div>
									<div className="form-group">
										<MyTextInput className="input" type="password" name="password" placeholder="Enter Your Password" />
									</div>
									<div className="form-group">
										<button className='primary-btn' type="submit" >Submit</button>
									</div>
								</Form>
							</Formik>
						</div>
					</div>
					
				</div>
			</div>
		</div>
    )
};

export default isNotAuth(Login);