import React, { Component } from "react";
import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import * as Icon from "react-feather";

export class HomeScreen extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 className="h2">Dashboard</h1>
				<ButtonToolbar className="mb-2 mb-md-0">
					<ButtonGroup className="mr-2" size="sm">
						<Button outline color="secondary">
							Share
						</Button>
						<Button outline color="secondary">
							Export
						</Button>
					</ButtonGroup>
					<ButtonDropdown
						isOpen={this.state.dropdownOpen}
						toggle={this.toggle}
					>
						<DropdownToggle caret size="sm" outline color="secondary"><Icon.Calendar size={16} className="feather"/> This Week</DropdownToggle>
						<DropdownMenu>
							<DropdownItem header>This Day</DropdownItem>
							<DropdownItem header>This Month</DropdownItem>
							<DropdownItem header>This Year</DropdownItem>
						</DropdownMenu>
					</ButtonDropdown>
				</ButtonToolbar>
			</div>
		);
	}
}
