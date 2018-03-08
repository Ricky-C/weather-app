import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import {Grid, Row, Col} from 'react-bootstrap';
const API_KEY = "a6d7861e81e60d37";

class App extends React.Component {
state = {
	temperature: undefined,
	city: undefined,
	state: undefined,
	humidity: undefined,
	description: undefined,
	error: undefined
}

	


	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const state = e.target.elements.state.value;
		const api_call = await fetch(`http://api.wunderground.com/api/${API_KEY}/forecast10day/q/${state}/${city}.json`);
		//const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}id=524901&APPID=${API_KEY}&units=imperial`);
		const data = await api_call.json();

		function titleCase(str) {
			var wordsArray = str.toLowerCase().split(/\s+/);
			var upperCased = wordsArray.map(function(word) {
				return word.charAt(0).toUpperCase() + word.substr(1);
			});
			return upperCased.join(" ");
}
		
		if (city && state) {
			console.log(data);
			
			this.setState({
				city1: titleCase(city),

				icon1: data.forecast.simpleforecast.forecastday[0].icon_url,
				temperaturemax1: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				temperaturemin1: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
				date1: data.forecast.simpleforecast.forecastday[0].date.weekday,
				humidity1: data.forecast.simpleforecast.forecastday[0].avehumidity,
				condition1: data.forecast.simpleforecast.forecastday[0].conditions,
				error1: "",

				icon2: data.forecast.simpleforecast.forecastday[1].icon_url,
				temperaturemax2: data.forecast.simpleforecast.forecastday[1].high.fahrenheit,
				temperaturemin2:  data.forecast.simpleforecast.forecastday[1].low.fahrenheit,
				date2: data.forecast.simpleforecast.forecastday[1].date.weekday,
				humidity2: data.forecast.simpleforecast.forecastday[1].avehumidity,
				condition2: data.forecast.simpleforecast.forecastday[1].conditions,
				error2: "",

				icon3: data.forecast.simpleforecast.forecastday[2].icon_url,
				temperaturemax3: data.forecast.simpleforecast.forecastday[2].high.fahrenheit,
				temperaturemin3:  data.forecast.simpleforecast.forecastday[2].low.fahrenheit,
				date3: data.forecast.simpleforecast.forecastday[2].date.weekday,
				humidity3: data.forecast.simpleforecast.forecastday[2].avehumidity,
				condition3: data.forecast.simpleforecast.forecastday[2].conditions,
				error3: "",

				icon4: data.forecast.simpleforecast.forecastday[3].icon_url,
				temperaturemax4: data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
				temperaturemin4:  data.forecast.simpleforecast.forecastday[3].low.fahrenheit,
				date4: data.forecast.simpleforecast.forecastday[3].date.weekday,
				humidity4: data.forecast.simpleforecast.forecastday[3].avehumidity,
				condition4: data.forecast.simpleforecast.forecastday[3].conditions,
				error4: "",

				icon5: data.forecast.simpleforecast.forecastday[4].icon_url,
				temperaturemax5: data.forecast.simpleforecast.forecastday[4].high.fahrenheit,
				temperaturemin5:  data.forecast.simpleforecast.forecastday[4].low.fahrenheit,
				date5: data.forecast.simpleforecast.forecastday[4].date.weekday,
				humidity5: data.forecast.simpleforecast.forecastday[4].avehumidity,
				condition5: data.forecast.simpleforecast.forecastday[4].conditions,
				error5: ""
				
					
			});
		
		} else {
			this.setState({
			temperaturemax: undefined,
			temperaturemin: undefined,
			icon: undefined,
			city: undefined,
			state: undefined,
			humidity: undefined,
			condition: undefined,
			error: "Please enter the values."
			})
			
		}
	};
	render() {
		return (
			<Grid>
				<Row>
					
					<Col xs={12}>
						<div>
							<Titles />
							<Form getWeather={this.getWeather}/>
							<Weather 
							icon1={this.state.icon1}
							temperaturemax1={this.state.temperaturemax1}
							temperaturemin1={this.state.temperaturemin1}
							date1={this.state.date1}
							city1={this.state.city1}
							state1={this.state.state1}
							humidity1={this.state.humidity1}
							condition1={this.state.condition1}
							error1={this.state.error1}

							icon2={this.state.icon2}
							temperaturemax2={this.state.temperaturemax2}
							temperaturemin2={this.state.temperaturemin2}
							date2={this.state.date2}
							city2={this.state.city2}
							state2={this.state.state2}
							humidity2={this.state.humidity2}
							condition2={this.state.condition2}
							error2={this.state.error2}

							icon3={this.state.icon3}
							temperaturemax3={this.state.temperaturemax3}
							temperaturemin3={this.state.temperaturemin3}
							date3={this.state.date3}
							city3={this.state.city3}
							state3={this.state.state3}
							humidity3={this.state.humidity3}
							condition3={this.state.condition3}
							error3={this.state.error3}

							icon4={this.state.icon4}
							temperaturemax4={this.state.temperaturemax4}
							temperaturemin4={this.state.temperaturemin4}
							date4={this.state.date4}
							city4={this.state.city4}
							state4={this.state.state4}
							humidity4={this.state.humidity4}
							condition4={this.state.condition4}
							error4={this.state.error4}

							icon5={this.state.icon5}
							temperaturemax5={this.state.temperaturemax5}
							temperaturemin5={this.state.temperaturemin5}
							date5={this.state.date5}
							city5={this.state.city5}
							state5={this.state.state5}
							humidity5={this.state.humidity5}
							condition5={this.state.condition5}
							error5={this.state.error5}
							/>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
};

export default App;