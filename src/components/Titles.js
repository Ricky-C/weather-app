import React from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
const Titles = props => (
	<Grid>
		<Row>
			<Col xs={12} className="header">
				<div>
					<PageHeader>
						<h1>Weather Finder</h1>
						<p className="lead">Find out temperature, conditions, and more...</p>
					</PageHeader>
				</div>
			</Col>
		</Row>
	</Grid>
);

export default Titles;