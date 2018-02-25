import React from "react";

const Weather = props => (

	<ol>
		<li>
			<div>
				{props.city1 && props.country1 && <p>Location: {props.city1}, {props.country1}</p>}
				{props.date1 && <p>Date: {props.date1} UTC</p>}
				{props.temperaturemax1 && <p>High: {props.temperaturemax1}</p>}
				{props.temperaturemin1 && <p>Low: {props.temperaturemin1}</p>}
				{props.humidity1 && <p>Humidity: {props.humidity1}</p>}
				{props.description1 && <p>Conditions: {props.description1}</p>}
				{props.error1 && <p>{props.error1}</p>}
			</div>
		</li>
		<li>
			<div>
				{props.city2 && props.country2 && <p>Location: {props.city2}, {props.country2}</p>}
				{props.date2 && <p>Date: {props.date2} UTC</p>}
				{props.temperaturemax2 && <p>High: {props.temperaturemax2}</p>}
				{props.temperaturemin2 && <p>Low: {props.temperaturemin2}</p>}
				{props.humidity2 && <p>Humidity: {props.humidity2}</p>}
				{props.description2 && <p>Conditions: {props.description2}</p>}
				{props.error2 && <p>{props.error2}</p>}
			</div>
		</li>
		<li>
			<div>
				{props.city3 && props.country3 && <p>Location: {props.city3}, {props.country3}</p>}
				{props.date3 && <p>Date: {props.date3} UTC</p>}
				{props.temperaturemax3 && <p>High: {props.temperaturemax3}</p>}
				{props.temperaturemin3 && <p>Low: {props.temperaturemin3}</p>}
				{props.humidity3 && <p>Humidity: {props.humidity3}</p>}
				{props.description3 && <p>Conditions: {props.description3}</p>}
				{props.error3 && <p>{props.error3}</p>}
			</div>
		</li>
		<li>
			<div>
				{props.city4 && props.country4 && <p>Location: {props.city4}, {props.country4}</p>}
				{props.date4 && <p>Date: {props.date4} UTC</p>}
				{props.temperaturemax4 && <p>High: {props.temperaturemax4}</p>}
				{props.temperaturemin4 && <p>Low: {props.temperaturemin4}</p>}
				{props.humidity4 && <p>Humidity: {props.humidity4}</p>}
				{props.description4 && <p>Conditions: {props.description4}</p>}
				{props.error4 && <p>{props.error4}</p>}
			</div>
		</li>
		<li>
			<div>
				{props.city5 && props.country5 && <p>Location: {props.city5}, {props.country5}</p>}
				{props.date5 && <p>Date: {props.date5} UTC</p>}
				{props.temperaturemax5 && <p>High: {props.temperaturemax5}</p>}
				{props.temperaturemin5 && <p>Low: {props.temperaturemin5}</p>}
				{props.humidity5 && <p>Humidity: {props.humidity5}</p>}
				{props.description5 && <p>Conditions: {props.description5}</p>}
				{props.error5 && <p>{props.error5}</p>}
			</div>
		</li>
	</ol>
);

export default Weather;