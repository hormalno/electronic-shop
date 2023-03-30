const Login = () => {

    return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="billing-details">
							<div className="section-title">
								<h2 className="title">Log In</h2>
							</div>
							<form>
								<div className="form-group">
									<input className="input" type="email" name="email" placeholder="Email" />
								</div>
								<div className="form-group">
									<input className="input" type="password" name="password" placeholder="Enter Your Password" />
								</div>
								<div className="form-group">
									<input type="submit" className="primary-btn" value="Submit" />
								</div>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
    )

}

export default Login;