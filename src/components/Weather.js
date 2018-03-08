import React from "react";
import {Grid, Row, Col} from "react-bootstrap";


const Weather = props => (
	<Grid className="fluid">
		<Row className="show-grid">
			<Col xs={3} sm={5}>
				<div>
				</div>
			</Col>
			<Col xs= {12}>
				<div className="cityhead">
					{props.city1 && <h2>{props.city1}</h2>}
				</div>
			</Col>
		</Row>
		
		<Row className="fade-in days">

			<Col xs={2}  className="day">	
					<div>
						{props.date1 && <h3>{props.date1}</h3>}
						{props.icon1 && <img src={props.icon1} alt=''/>}
						{props.temperaturemax1 && <p>High: {props.temperaturemax1}</p>}
						{props.temperaturemin1 && <p>Low: {props.temperaturemin1}</p>}
						{props.humidity1 && <p>Humidity: {props.humidity1}</p>}
						{props.condition1 && <p>{props.condition1}</p>}
						{props.error1 && <p>{props.error1}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date2 && <h3>{props.date2}</h3>}
						{props.icon2 && <img src={props.icon2} alt=''/>}
						{props.temperaturemax2 && <p>High: {props.temperaturemax2}</p>}
						{props.temperaturemin2 && <p>Low: {props.temperaturemin2}</p>}
						{props.humidity2 && <p>Humidity: {props.humidity2}</p>}
						{props.condition2 && <p>{props.condition2}</p>}
						{props.error2 && <p>{props.error2}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date3 && <h3>{props.date3}</h3>}
						{props.icon3 && <img src={props.icon3} alt=''/>}
						{props.temperaturemax3 && <p>High: {props.temperaturemax3}</p>}
						{props.temperaturemin3 && <p>Low: {props.temperaturemin3}</p>}
						{props.humidity3 && <p>Humidity: {props.humidity3}</p>}
						{props.condition3 && <p>{props.condition3}</p>}
						{props.error3 && <p>{props.error3}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date4 && <h3>{props.date4}</h3>}
						{props.icon4 && <img src={props.icon4} alt=''/>}
						{props.temperaturemax4 && <p>High: {props.temperaturemax4}</p>}
						{props.temperaturemin2 && <p>Low: {props.temperaturemin4}</p>}
						{props.humidity4 && <p>Humidity: {props.humidity4}</p>}
						{props.condition4 && <p>{props.condition4}</p>}
						{props.error4 && <p>{props.error4}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
				
					<div>
						{props.date5 && <h3>{props.date5}</h3>}
						{props.icon5 && <img src={props.icon5} alt=''/>}
						{props.temperaturemax5 && <p>High: {props.temperaturemax5}</p>}
						{props.temperaturemin2 && <p>Low: {props.temperaturemin5}</p>}
						{props.humidity5 && <p>Humidity: {props.humidity5}</p>}
						{props.condition5 && <p>{props.condition5}</p>}
						{props.error5 && <p>{props.error5}</p>}
					</div>
			</Col>	
		</Row>		
			
			
		
	</Grid>
);

export default Weather;