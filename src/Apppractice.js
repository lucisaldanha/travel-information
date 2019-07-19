import React, {Component} from 'react';
import './style.css';
import './img/image4.jpg';

class Apppractice extends Component {
	constructor(props){
		super(props);	
		this.state = {
			firstName: '',
			lastName: '',
			age: '',
			gender: '',
			destination: '',
			dietaryRestriction: {	
				vegetarian: false,
				kosher: false, 
				lactoseFree: false,
				vegan: false
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { name, value, type, checked } = event.target;
		type === 'checkbox' ? 
			this.setState({
				dietaryRestriction: {
					[name]: checked
				}
			}) : this.setState({ [name]: value });
		
	}

	handleSubmit(event) {
		alert(
		`Passenger info
		Name: ${this.state.firstName} ${this.state.lastName}
		Age: ${this.state.age}
		Gender: ${this.state.gender}
		Destination: ${this.state.destination}
		Dietary Restrictions:\n ${(this.state.dietaryRestriction.vegetarian)? 'Vegetarian' : ''}\n ${this.state.dietaryRestriction.kosher ? 'Kosher' : null}\n ${this.state.dietaryRestriction.lactoseFree ? 'Lactose Free' : null}\n ${this.state.dietaryRestriction.vegan ? 'Vegan' : null}
		` );
	}

	render() {
		let arr = [ 
			this.state.dietaryRestriction.vegetarian, 
			this.state.dietaryRestriction.kosher, 
			this.state.dietaryRestriction.lactoseFree,
			this.state.dietaryRestriction.vegan
		];
		let [veg, kos, lact, ven] = arr;
		let veggie;
		let kosh;
		let lacto;
		let vega;
		if(veg) {
			veggie = 'Vegetarian';
		}
		if(kos) {
			kosh = 'Kosher';
		}
		if(lact) {
			lacto = 'Lactose Free';
		}
		if(ven) {
			vega = 'Vegan';
		}

		let edad = this.state.age;
		let textAge = edad >= 1 ? (edad + ' years old') : null;

		return (
			<main>
				<div className='info'>
					<h1>Travel form information</h1>
					<h2>Please complete the form below so we can better serve you.</h2>
					<hr />
				</div>
				<div className='form' >
					<form onSubmit={this.handleSubmit} >
						<label><p className='passenger'>Passenger information</p>
							<label>First Name:
								<input 
									value={this.state.firstName}
									type='text' 
									placeholder='First Name' 
									name='firstName' 
									onChange={this.handleChange}
								/>
								<br />
							</label>
							<label>Last Name:
								<input 
									value={this.state.lastName} 
									type='text' 
									placeholder='Last Name' 
									name='lastName' 
									onChange={this.handleChange}
								/>
								<br />
							</label>
							<label>Age:
								<input 
									value={this.state.age}  
									type='number' 
									min='1'
									placeholder='Age' 
									name='age' 
									onChange={this.handleChange}
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
											checked={this.state.gender === 'female'} 
											onChange={this.handleChange} 
										/>Female<br />
									</div>
									<div className='smallerbox'>
										<input 
											type='radio' 
											value='male' 
											name='gender' 
											checked={this.state.gender === 'male'} 
											onChange={this.handleChange} 
										/>Male<br />
									</div>	
									<div className='smallerbox'>
										<input 
											type='radio' 
											value='unknown' 
											name='gender' 
											checked={this.state.gender === 'unknown'} 
											onChange={this.handleChange} 
										/>Preferred not to answer<br /><br />
									</div>
								</div>
							</label>
							<label>Please select destination: <br />
								<select value={this.state.destination} name='destination' onChange={this.handleChange}>
									<option value=''> - Please select a destination</option>
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
									checked={this.state.dietaryRestriction.vegetarian} 
									onChange={this.handleChange} 
								/>Vegetarian
								<input 
									type='checkbox' 
									name='kosher' 
									checked={this.state.dietaryRestriction.kosher} 
									onChange={this.handleChange} 
								/>Kosher
								<input 
									type='checkbox' 
									name='lactoseFree' 
									checked={this.state.dietaryRestriction.lactoseFree} 
									onChange={this.handleChange} 
								/>Lactose Free
								<input 
									type='checkbox' 
									name='vegan' 
									checked={this.state.dietaryRestriction.vegan} 
									onChange={this.handleChange} 
								/>Vegan
							</label>
						</label> 
						<br /><br />
						<button type='submit'>Submit</button>
					</form>
				</div>
				<hr />
				<div className='completed'>
					<h4>The information you are going to submit:</h4>
					<p>Your name: <span style={{color:'white',backgroundColor: 'rgba(171,176,181, 0.4)', fontWeight: 700, textTransform:'uppercase', borderRadius:'2px'}}>{this.state.firstName} {this.state.lastName}</span></p>
					<p>Age: <span style={{color:'white',backgroundColor: 'rgba(171,176,181, 0.4)', fontWeight: 700, textTransform:'uppercase', borderRadius:'2px'}}>{textAge}</span></p>
					<p>Gender: <span style={{color:'white',backgroundColor: 'rgba(171,176,181, 0.4)', fontWeight: 700, textTransform:'uppercase', borderRadius:'2px'}}>{this.state.gender}</span></p>
					<p>Destination: <span style={{color:'white',backgroundColor: 'rgba(171,176,181, 0.4)', fontWeight: 700, textTransform:'uppercase', borderRadius:'2px'}}>{this.state.destination}</span></p>
					<p>Dietary restriction(s): <span style={{color:'white',backgroundColor: 'rgba(171,176,181, 0.4)', fontWeight: 700, textTransform:'uppercase', borderRadius:'2px'}}>{veggie} {kosh} {lacto} {vega}</span> </p>
				</div>
			</main>
		)
	}
}


export default Apppractice;