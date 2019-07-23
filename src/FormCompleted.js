import React from 'react';

function FormCompleted (props){
	let veggie = props.dietaryRestriction.vegetarian ? 'Vegetarian': null;
	let kosh = props.dietaryRestriction.kosher ? 'Kosher': null;
	let lacto = props.dietaryRestriction.lactoseFree ? 'Lactose Free': null;
	let vega = props.dietaryRestriction.vegan ? 'Vegan': null;
	
	let edad = props.age;
	let textAge = edad >= 1 ? (edad + ' years old') : null;

	const styled = {
		color:'white',
		backgroundColor: 'rgba(171,176,181, 0.4)', 
		fontWeight: 700, 
		textTransform:'uppercase', 
		borderRadius:'2px'
	}
	
	return (
		<div className='completed'>
				<h4>The information you are going to submit:</h4>
				<p>Your name: <span style={styled}>{props.firstName} {props.lastName}</span></p>
				<p>Age: <span style={styled}>{textAge}</span></p>
				<p>Gender: <span style={styled}>{props.gender}</span></p>
				<p>Destination: <span style={styled}>{props.destination}</span></p>
				<p>Dietary restriction(s): <span style={styled}>{veggie} {kosh} {lacto} {vega}</span> </p>
		</div>
	)
}

export default FormCompleted;