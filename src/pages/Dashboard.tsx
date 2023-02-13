import React from "react";
import Drawer from "../components/Drawer";
import chart from "../images/chart.jpg";

function Dashboard() {
	return (
		<div className="page-main">
			<Drawer />
			<div className="page-body">Dashboard
			<div className="row my-4">
			<div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
				<div className="card">
					<h5 className="card-header">Developers</h5>
					<div className="card-body">
						<h5 className="card-title">345k</h5>
						<p className="card-text">Feb 1 - Apr 1</p>
						<p className="card-text text-success">18.2% increase since last month</p>
					</div>
					</div>
			</div>
			<div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
				<div className="card">
					<h5 className="card-header">QA</h5>
					<div className="card-body">
						<h5 className="card-title">$2.4k</h5>
						<p className="card-text">Feb 1 - Apr 1</p>
						<p className="card-text text-success">4.6% increase since last month</p>
					</div>
					</div>
			</div>
			<div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
				<div className="card">
					<h5 className="card-header">Bug List</h5>
					<div className="card-body">
						<h5 className="card-title">43</h5>
						<p className="card-text">Feb 1 - Apr 1</p>
						<p className="card-text text-danger">2.6% decrease since last month</p>
					</div>
					</div>
			</div>
			<div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
				<div className="card">
					<h5 className="card-header">Comments</h5>
					<div className="card-body">
						<h5 className="card-title">64k</h5>
						<p className="card-text">Feb 1 - Apr 1</p>
						<p className="card-text text-success">2.5% increase since last month</p>
					</div>
					</div>
			</div>
			</div>

			
			<div className="row">
				<div className="col-12 col-xl-8 mb-4 mb-lg-0">
					<div className="card">
						<h5 className="card-header">Latest Solved Bugs</h5>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
										<th scope="col">Bug Id</th>
										<th scope="col">Title</th>
										<th scope="col">Developer</th>
										<th scope="col">Date</th>
										<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">17371705</th>
											<td>Dashboard Design</td>
											<td>bhavika@gmail.com</td>
											<td>Feb 3 2023</td>
											<td><a href="#" className="btn btn-sm dashboard-button">View</a></td>
										</tr>
										<tr>
											<th scope="row">17370540</th>
											<td>Bug Testing</td>
											<td>bug@humber.com</td>
											<td>Feb 2 2023</td>
											<td><a href="#" className="btn btn-sm dashboard-button">View</a></td>
										</tr>
										<tr>
											<th scope="row">17370540</th>
											<td>Feedback Button Issue</td>
											<td>bug@humber.com</td>
											<td>Feb 1 2023</td>
											<td><a href="#" className="btn btn-sm dashboard-button">View</a></td>
										</tr>
									</tbody>
								</table>
							</div>
								<a href="#" className="btn btn-block btn-light">View all</a>
						</div>
					</div>
				</div>
				<div className="col-12 col-xl-4">
					<div className="card">
						<h5 className="card-header">Bug notified last 6 months</h5>
						<div className="card-body">
							<div id="traffic-chart">
								<img src={chart} width="350px" />
							</div>
						</div>
					</div>
					<div className="card">
						<h5 className="card-header">Bug notified last 6 months</h5>
						<div className="card-body">
							<div id="traffic-chart">
								<img src={chart} width="350px" />
							</div>
						</div>
					</div>
				</div>
				</div>

				
				
			</div>
		</div>
	);
}

export default Dashboard;
