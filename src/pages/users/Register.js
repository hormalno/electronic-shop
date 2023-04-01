import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import {db, auth} from "../../utils/firebase";
import { useState } from "react";

const Register = ({history}) => {
	let defaultObj = {
		email: '',
		password: '',
		repeatPassword: '',
		firstname: '',
		lastname: '',
		address: '',
		city: '',
		country: ''
	}
	const [errors, setErrors] = useState(defaultObj);
	const [touched, setTouched] = useState(defaultObj);
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');

	const onSubmitHandler = (e) => {

		e.preventDefault()
		let result = {
			firstname: firstname,
			lastname: lastname,
			address: address,
			city: city,
			country: country
		};

		createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			console.log("User created!");
			setDoc(doc(db, "users", userCredential.user.uid),result)
			.then(console.log("User added to database!"));
		})
		.catch(e => {
			console.log(e);
		});
	};


	const validate = (event) => {



		// let errors = {};
		// // email
		// if (!email) {
		// 	errors.email = "Required field";
		// } else if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
		// 	errors.email = "The email is not valid!";
		// } else {
		// 	errors.email = '';
		// };

		// //password
		// if (!password) {
		// 	errors.password = "Required field";
		// } else if (password.length < 6) {
		// 	errors.password = "The password must be at least 3 character!";
		// } else {
		// 	errors.password = "";
		// };

		// //repeat passwords
		// if (!repeatPassword) {
		// 	errors.repeatPassword = "Required field";
		// } else if (password !== repeatPassword) {
		// 	errors.repeatPassword = "The passwords doesn't match";
		// } else {
		// 	errors.repeatPassword = "";
		// };

		// //first name
		// if (!firstname) {
		// 	errors.firstname = "Required field"; 
		// } else {
		// 	errors.firstname = "";
		// };

		// // last name
		// if (!lastname) {
		// 	errors.lastname = "Required field";
		// } else {
		// 	errors.lastname = "";
		// };

		// if (!address) {
		// 	errors.address = "Required field"; 
		// } else {
		// 	errors.address = "";
		// };

		// if (!city) {
		// 	errors.city = "Required field";
		// } else {
		// 	errors.city = "";
		// };

		// if (!country) {
		// 	errors.country = "Required field";
		// } else {
		// 	errors.country = "";
		// };

		if (!errors.email && !errors.password && !errors.repeatPassword && !errors.firstname && !errors.lastname && !errors.address && !errors.city && !errors.country) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		};
	};


    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="billing-details">
							<div className="section-title">
								<h3 className="title">Register</h3>
							</div>
							<form onSubmit={onSubmitHandler}>
								{errors.submitError && <div className="alert-danger">{errors.submitError}</div>}
								<div className="form-group">
									<input className="input" type="email" name="email" placeholder="Email" value={email}
									onChange={e=>setEmail(e.target.value)} 
									onBlur={validate} />
									{touched.email && <div className="alert-danger">Touched</div>}
								</div>
								<div className="form-group">
									<input className="input" type="password" name="password" placeholder="Enter Your Password" value={password}
									onChange={e=>setPassword(e.target.value)} 
									onBlur={validate} />
									{errors.password && touched.password && <div className="alert-danger">{errors.password}</div>}
								</div>
								<div className="form-group">
									<input className="input" type="password" name="repeatPassword" placeholder="Repeat Your Password" value={repeatPassword}
									onChange={e=>setRepeatPassword(e.target.value)}
									onBlur={validate} />
									{errors.repeatPassword && touched.repeatPassword && <div className="alert-danger">{errors.repeatPassword}</div>}
								</div>
								<div className="form-group">
									<input className="input" type="text" name="firstname" placeholder="First Name" value={firstname}
									onChange={e => setFirstname(e.target.value)} 
									onBlur={validate} />
									{errors.firstname && touched.firstname && <div className="alert-danger">{errors.firstname}</div>}
								</div>
								<div className="form-group">
									<input className="input" type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={e=>setLastname(e.target.value)} onBlur={validate} />
									{errors.lastname && touched.lastname && <div className="alert-danger">{errors.lastname}</div>}
								</div>						
								<div className="form-group">
									<input className="input" type="text" name="address" placeholder="Address" onChange={e=>setAddress(e.target.value)} value={address} onBlur={validate} />
									{errors.address && touched.address && <div className="alert-danger">{errors.address}</div>}
								</div>
								<div className="form-group">
									<input className="input" type="text" name="city" placeholder="City" onChange={e=>setCity(e.target.value)} value={city} onBlur={validate} />
									{errors.city && touched.city && <div className="alert-danger">{errors.city}</div>}
								</div>
								<div className="form-group">
									<input className="input" type="text" name="country" placeholder="Country" onChange={e=>setCountry(e.target.value)} value={country} onBlur={validate} />
									{errors.country && touched.country && <div className="alert-danger">{errors.country}</div>}
								</div>
								<div className="form-group">
									<button type="submit" className="primary-btn" disabled={buttonDisabled} >Submit</button>
								</div>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
    )

}

export default Register;