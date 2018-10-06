import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import * as Icon from 'react-feather';

export class SideBarScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Nav className="col-md-2 d-none d-md-block sidebar bg-light">
				<div className="sidebar-sticky">
					<Nav className="flex-column">
						<NavItem>
							<NavLink className="active" href="#">
								<Icon.Home />
								Dashboard{" "}
								<span className="sr-only">(current)</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.File />
								Orders
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<span data-feather="shopping-cart" />
								Products
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<span data-feather="users" />
								Customers
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<span data-feather="bar-chart-2" />
								Reports
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<span data-feather="layers" />
								Integrations
							</NavLink>
						</NavItem>
					</Nav>
					<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
						<span>Saved reports</span>
						<a
							className="d-flex align-items-center text-muted"
							href="#"
						>
							<span data-feather="plus-circle" />
						</a>
					</h6>
					<Nav className="flex-column mb-2">
						<NavItem>
							<NavLink href="#">
								<span data-feather="file-text" />
								Current month
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<span data-feather="file-text" />
								Last quarter
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<span data-feather="file-text" />
								Social engagement
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<span data-feather="file-text" />
								Year-end sale
							</NavLink>
						</NavItem>
					</Nav>
				</div>
			</Nav>
		);
	}
}
