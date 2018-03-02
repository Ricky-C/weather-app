import React from "react";
import {Grid, Row, Col, Image} from "react-bootstrap";
const d = new Date();
const weekday = new Array(7);
weekday[0]= "Sunday";
weekday[1]= "Monday";
weekday[2]= "Tuesday";
weekday[3]= "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";



let n = weekday[d.getDay()];

const Weather = props => (
	<Grid className="fluid">
		<Row className="show-grid">
			<Col xs={3} sm={5}>
				<div>
				</div>
			</Col>
			<Col xs= {6}>
				<div>
					{props.city1 && <h2>{props.city1}</h2>}
				</div>
			</Col>
		</Row>
		
		<Row>

			<Col xs={2}  className="day">	
					<div>
						{props.date1 && <p>{props.date1.split(' ')[0].replace(/-/, " ")}</p>}
						{props.icon1 && <img src={"http://openweathermap.org/img/w/"+ props.icon1 + ".png"} className="icon"/>}
						{props.temperaturemax1 && <p>High: {Math.floor(props.temperaturemax1)}</p>}
						{props.temperaturemin1 && <p>Low: {Math.floor(props.temperaturemin1)}</p>}
						{props.humidity1 && <p>Humidity: {props.humidity1}</p>}
						{props.description1 && <p>{props.description1}</p>}
						{props.error1 && <p>{props.error1}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date2 && <p>{props.date2.split(' ')[0].replace(/-/, " ")}</p>}
						{props.icon2 && <img src={"http://openweathermap.org/img/w/"+ props.icon2 + ".png"}/>}
						{props.temperaturemax2 && <p>High: {Math.floor(props.temperaturemax2)}</p>}
						{props.temperaturemin2 && <p>Low: {Math.floor(props.temperaturemin2)}</p>}
						{props.humidity2 && <p>Humidity: {props.humidity2}</p>}
						{props.description2 && <p>{props.description2}</p>}
						{props.error2 && <p>{props.error2}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date3 && <p>{props.date3.split(' ')[0].replace(/-/, " ")}</p>}
						{props.icon3 && <img src={"http://openweathermap.org/img/w/"+ props.icon3 + ".png"}/>}
						{props.temperaturemax3 && <p>High: {Math.floor(props.temperaturemax3)}</p>}
						{props.temperaturemin3 && <p>Low: {Math.floor(props.temperaturemin3)}</p>}
						{props.humidity3 && <p>Humidity: {props.humidity3}</p>}
						{props.description3 && <p>{props.description3}</p>}
						{props.error3 && <p>{props.error3}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date4 && <p>{props.date4.split(' ')[0].replace(/-/, " ")}</p>}
						{props.icon4 && <img src={"http://openweathermap.org/img/w/"+ props.icon4 + ".png"}/>}
						{props.temperaturemax4 && <p>High: {Math.floor(props.temperaturemax4)}</p>}
						{props.temperaturemin4 && <p>Low: {Math.floor(props.temperaturemin4)}</p>}
						{props.humidity4 && <p>Humidity: {props.humidity4}</p>}
						{props.description4 && <p>{props.description4}</p>}
						{props.error4 && <p>{props.error4}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
				
					<div>
						{props.date5 && <p>{props.date5.split(' ')[0].replace(/-/, " ")}</p>}
						{props.icon5 && <img src={"http://openweathermap.org/img/w/"+ props.icon5 + ".png"}/>}
						{props.temperaturemax5 && <p>High: {Math.floor(props.temperaturemax5)}</p>}
						{props.temperaturemin5 && <p>Low: {Math.floor(props.temperaturemin5)}</p>}
						{props.humidity5 && <p>Humidity: {props.humidity5}</p>}
						{props.description5 && <p>{props.description5}</p>}
						{props.error5 && <p>{props.error5}</p>}
					</div>
			</Col>	
		</Row>		
			
			
		
	</Grid>
);

export default Weather;