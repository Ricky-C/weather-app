import React from "react";
import Bootstrap from "react-bootstrap";
import {Button, Grid, Row, Col, FormGroup} from 'react-bootstrap';
const Form = props => (
	<form onSubmit={props.getWeather}>
		<FormGroup>
			<input type="text" name="city" placeholder="City..."/>
			<input type="text" name="country" placeholder="Country..."/>
			<Button type="submit" bsStyle="success">Get Weather</Button>
		</FormGroup>
	</form>
		
	
);

export default Form;