import React from "react";
import {Grid, Row, Col, Image} from "react-bootstrap";


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
						{props.date1 && <h3>{props.date1.split(' ')[0].replace(/-/, " ").substr(props.date1.indexOf("")+5)}</h3>}
						{props.icon1 && <img src={"http://openweathermap.org/img/w/"+ props.icon1 + ".png"} className="icon"/>}
						{props.temperaturemax1 && <p>Temp: {Math.round(props.temperaturemax1)}</p>}
						{props.humidity1 && <p>Humidity: {props.humidity1}</p>}
						{props.description1 && <p>{props.description1}</p>}
						{props.error1 && <p>{props.error1}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date2 && <h3>{props.date2.split(' ')[0].replace(/-/, " ").substr(props.date2.indexOf("")+5)}</h3>}
						{props.icon2 && <img src={"http://openweathermap.org/img/w/"+ props.icon2 + ".png"}/>}
						{props.temperaturemax2 && <p>Temp: {Math.round(props.temperaturemax2)}</p>}
						{props.humidity2 && <p>Humidity: {props.humidity2}</p>}
						{props.description2 && <p>{props.description2}</p>}
						{props.error2 && <p>{props.error2}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date3 && <h3>{props.date3.split(' ')[0].replace(/-/, " ").substr(props.date3.indexOf("")+5)}</h3>}
						{props.icon3 && <img src={"http://openweathermap.org/img/w/"+ props.icon3 + ".png"}/>}
						{props.temperaturemax3 && <p>Temp: {Math.round(props.temperaturemax3)}</p>}
						{props.humidity3 && <p>Humidity: {props.humidity3}</p>}
						{props.description3 && <p>{props.description3}</p>}
						{props.error3 && <p>{props.error3}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
					<div>
						{props.date4 && <h3>{props.date4.split(' ')[0].replace(/-/, " ").substr(props.date4.indexOf("")+5)}</h3>}
						{props.icon4 && <img src={"http://openweathermap.org/img/w/"+ props.icon4 + ".png"}/>}
						{props.temperaturemax4 && <p>Temp: {Math.round(props.temperaturemax4)}</p>}
						{props.humidity4 && <p>Humidity: {props.humidity4}</p>}
						{props.description4 && <p>{props.description4}</p>}
						{props.error4 && <p>{props.error4}</p>}
					</div>
			</Col>
			<Col xs={2}  className="day">
				
					<div>
						{props.date5 && <h3>{props.date5.split(' ')[0].replace(/-/, " ").substr(props.date5.indexOf("")+5)}</h3>}
						{props.icon5 && <img src={"http://openweathermap.org/img/w/"+ props.icon5 + ".png"}/>}
						{props.temperaturemax5 && <p>Temp: {Math.round(props.temperaturemax5)}</p>}
						{props.humidity5 && <p>Humidity: {props.humidity5}</p>}
						{props.description5 && <p>{props.description5}</p>}
						{props.error5 && <p>{props.error5}</p>}
					</div>
			</Col>	
		</Row>		
			
			
		
	</Grid>
);

export default Weather;