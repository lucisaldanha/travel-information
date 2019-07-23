import React from 'react';

import './img/image4.jpg';

function FormComponent(props) {
	return (
		<main>
			<div className='form' >
				<form onSubmit={props.handleSubmit} >
					<label><p className='passenger'>Passenger information</p>
						<label>First Name:
							<input 
								value={props.firstName}
								type='text' 
								placeholder='First Name' 
								name='firstName' 
								onChange={props.handleChange}
							/>
							<br />
						</label>
						<label>Last Name:
							<input 
								value={props.propslastName} 
								type='text' 
								placeholder='Last Name' 
								name='lastName' 
								onChange={props.handleChange}
							/>
							<br />
						</label>
						<label>Age:
							<input 
								value={props.age}  
								type='number' 
								min='1'
								placeholder='Age' 
								name='age' 
								onChange={props.handleChange}
								required
							/>
							<br /><br />
						</label>
						<label>Please select your gender:<br />
							<div className='flexbox'>
								<div className='smallerbox'>
									<input 
										type='radio' 
										value='female' 
										name='gender' 
										checked={props.gender === 'female'} 
										onChange={props.handleChange} 
									/>Female<br />
								</div>
								<div className='smallerbox'>
									<input 
										type='radio' 
										value='male' 
										name='gender' 
										checked={props.gender === 'male'} 
										onChange={props.handleChange} 
									/>Male<br />
								</div>	
								<div className='smallerbox'>
									<input 
										type='radio' 
										value='unknown' 
										name='gender' 
										checked={props.gender === 'unknown'} 
										onChange={props.handleChange} 
									/>Preferred not to answer<br /><br />
								</div>
							</div>
						</label>
						<label>Please select destination: <br />
							<select value={props.destination} name='destination' onChange={props.handleChange} required>
								<option value=''> - Please select a destination -</option>
								<option value='Montreal - Canada'>Montreal - Canada</option>
								<option value='Rio de Janeiro - Brazil'>Rio de Janeiro - Brazil</option>
								<option value='Tokyo - Japan'>Tokyo - Japan</option>
								<option value='Houston TX - USA'>Houston TX - USA</option>
								<option value='San Francisco CA - USA'>San Francisco CA - USA</option>
							</select> <br />
						</label>
						<br />
						<label>Dietary restriction(s):<br />
							<input type='checkbox' 
								name='vegetarian' 
								checked={props.dietaryRestriction.vegetarian} 
								onChange={props.handleChange} 
							/>Vegetarian
							<input 
								type='checkbox' 
								name='kosher' 
								checked={props.dietaryRestriction.kosher} 
								onChange={props.handleChange} 
							/>Kosher
							<input 
								type='checkbox' 
								name='lactoseFree' 
								checked={props.dietaryRestriction.lactoseFree} 
								onChange={props.handleChange} 
							/>Lactose Free
							<input 
								type='checkbox' 
								name='vegan' 
								checked={props.dietaryRestriction.vegan} 
								onChange={props.handleChange} 
							/>Vegan
						</label>
					</label> 
					<br /><br />
					<button type='submit'>Submit</button>
				</form>
			</div>
			<hr />
		</main>
	)
}

export default FormComponent;