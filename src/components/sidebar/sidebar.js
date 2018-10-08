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
								<Icon.Home size={16} className="feather"/>
								Dashboard{" "}
								<span className="sr-only">(current)</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.File size={16} className="feather"/>
								Orders
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.ShoppingCart size={16} className="feather"/>
								Products
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.Users size={16} className="feather"/>
								Customers
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.BarChart2 size={16} className="feather"/>
								Reports
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.Layers size={16} className="feather"/>
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
							<Icon.PlusCircle size={16} className="feather"/>
						</a>
					</h6>
					<Nav className="flex-column mb-2">
						<NavItem>
							<NavLink href="#">
								<Icon.FileText size={16} className="feather"/>
								Current month
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.FileText size={16} className="feather"/>
								Last quarter
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.FileText size={16} className="feather"/>
								Social engagement
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								<Icon.FileText size={16} className="feather"/>
								Year-end sale
							</NavLink>
						</NavItem>
					</Nav>
				</div>
			</Nav>
		);
	}
}
