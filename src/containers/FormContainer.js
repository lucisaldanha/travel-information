import React, {Component} from 'react';

import FormComponent from '../components/FormComponent';

import FormCompleted from '../components/FormCompleted';

import FormHeader from '../components/FormHeader';

import '../style.css';

class FormContainer extends Component {
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
			this.setState(prevState => {
				return {
					dietaryRestriction: {
						...prevState.dietaryRestriction,
						[name]: checked
					}
				}
			}) 
			: 
			this.setState({ 
				[name]: value 
			})
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
		return (
			<div>
				<FormHeader />
				<FormComponent 
					handleChange={this.handleChange}
					{...this.state}
					handleSubmit={this.handleSubmit}
				/>
				<FormCompleted 
					{...this.state}
				/>
			</div>
		)
	}
}


export default FormContainer;