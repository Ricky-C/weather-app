import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "0565b23c805429da798da3549d77c15f";

class App extends React.Component {
state = {
	temperature: undefined,
	city: undefined,
	country: undefined,
	humidity: undefined,
	description: undefined,
	error: undefined
}

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}id=524901&APPID=${API_KEY}&units=imperial`);
		const data = await api_call.json()
		if (city && country) {
			console.log(data);
			
			
			this.setState({
					
						temperaturemax1: data.list[0].main.temp_max,
						temperaturemin1: data.list[0].main.temp_min,
						date1: data.list[0].dt_txt,
						city1: data.city.name,
						country1: data.city.country,
						humidity1: data.list[0].main.humidity,
						description1: data.list[0].weather[0].description,
						error1: "",

						temperaturemax2: data.list[8].main.temp_max,
						temperaturemin2: data.list[8].main.temp_min,
						date2: data.list[8].dt_txt,
						city2: data.city.name,
						country2: data.city.country,
						humidity2: data.list[8].main.humidity,
						description2: data.list[8].weather[0].description,
						error2: "",
					
						temperaturemax3: data.list[16].main.temp_max,
						temperaturemin3: data.list[16].main.temp_min,
						date3: data.list[16].dt_txt,
						city3: data.city.name,
						country3: data.city.country,
						humidity3: data.list[16].main.humidity,
						description3: data.list[16].weather[0].description,
						error3: "",
								
						temperaturemax4: data.list[24].main.temp_max,
						temperaturemin4: data.list[24].main.temp_min,
						date4: data.list[24].dt_txt,
						city4: data.city.name,
						country4: data.city.country,
						humidity4: data.list[24].main.humidity,
						description4: data.list[24].weather[0].description,
						error4: "",
					
						temperaturemax5: data.list[32].main.temp_max,
						temperaturemin5: data.list[32].main.temp_min,
						date5: data.list[32].dt_txt,
						city5: data.city.name,
						country5: data.city.country,
						humidity5: data.list[32].main.humidity,
						description5: data.list[32].weather[0].description,
						error5: ""
					
			});
		
		} else {
			this.setState({
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: "Please enter the values."
			})
			
		}
	};
	render() {
		return (
			<div>
				<Titles />
				<Form getWeather={this.getWeather}/>
				<Weather 
				temperaturemax1={this.state.temperaturemax1}
				temperaturemin1={this.state.temperaturemin1}
				date1={this.state.date1}
				city1={this.state.city1}
				country1={this.state.country1}
				humidity1={this.state.humidity1}
				description1={this.state.description1}
				error1={this.state.error1}

				temperaturemax2={this.state.temperaturemax2}
				temperaturemin2={this.state.temperaturemin2}
				date2={this.state.date2}
				city2={this.state.city2}
				country2={this.state.country2}
				humidity2={this.state.humidity2}
				description2={this.state.description2}
				error2={this.state.error2}

				temperaturemax3={this.state.temperaturemax3}
				temperaturemin3={this.state.temperaturemin3}
				date3={this.state.date3}
				city3={this.state.city3}
				country3={this.state.country3}
				humidity3={this.state.humidity3}
				description3={this.state.description3}
				error3={this.state.error3}

				temperaturemax4={this.state.temperaturemax4}
				temperaturemin4={this.state.temperaturemin4}
				date4={this.state.date4}
				city4={this.state.city4}
				country4={this.state.country4}
				humidity4={this.state.humidity4}
				description4={this.state.description4}
				error4={this.state.error4}

				temperaturemax5={this.state.temperaturemax5}
				temperaturemin5={this.state.temperaturemin5}
				date5={this.state.date5}
				city5={this.state.city5}
				country5={this.state.country5}
				humidity5={this.state.humidity5}
				description5={this.state.description5}
				error5={this.state.error5}
				/>
			</div>
		);
	}
};

export default App;