import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Institute/School</th>
								<th>Course</th>
								<th>Year</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>SUPREME KNOWLEDGE FOUNDATION GROUP OF INSTITUTIONS</td>
								<td>Bachelor of Technology (B.Tech), Electronics and Communication</td>
								<td>
									2017 <br></br>- 2021
								</td>
							</tr>
							<tr>
								<td>Holy Home(ISC board)</td>
								<td>Senior Secondary (XII), Science</td>
								<td>
									2017
								</td>
							</tr>
							<tr>
								<td>Jogamaya Memorial Institute(ISCE board)</td>
								<td>June 2018</td>
								<td>
									2015
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
