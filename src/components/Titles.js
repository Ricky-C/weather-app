import React from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
const Titles = props => (
	<Grid>
		<Row>
			<Col xs={12} className="header">
				<div>
					<PageHeader>
						Forecastronaut
						<p className="lead">Get your 5 day forecast</p>
					</PageHeader>
				</div>
			</Col>
		</Row>
	</Grid>
);

export default Titles;