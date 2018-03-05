import React from "react";
import Bootstrap from "react-bootstrap";
import {Button, Grid, Row, Col, FormGroup, FormControl} from 'react-bootstrap';
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
			name="country" 
			placeholder="Country..."
			/>
			<Button type="submit" bsStyle="primary">Get Weather</Button>
		</FormGroup>
	</form>
		
	
);

export default Form;