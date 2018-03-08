import React from "react";
import {Button, FormGroup, FormControl} from 'react-bootstrap';
const Form = props => (
	<form onSubmit={props.getWeather}>
		<FormGroup>
			<FormControl
			className="forms"
			type="text" 
			name="city" 
			placeholder="City..."
			/>
			<FormControl
			className="forms"
			type="text" 
			name="state" 
			placeholder="State..."
			/>
			<Button type="submit" bsStyle="primary">Get Weather</Button>
		</FormGroup>
	</form>
		
	
);

export default Form;