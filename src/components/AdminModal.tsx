import React, { useState } from "react";
import "../styles/Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

type Props = {
	member: member;
	type: string;
	onClose: () => void;
};

type member = {
	name: string;
	email: string;
	role: string;
	_id: string;
	password: string;
};

const AdminModal = (props: Props) => {
	const [showError, setShowError] = useState(false);
	const [memberData, setMemberData] = useState<member>(props.member);

	const submitData = () => {
		if (
			memberData.name === "" ||
			memberData.email === "" ||
			memberData.role === ""
		)
			setShowError(true);
		else {
			setShowError(false);
			if (props.type == "add") addMember();
			else updateMember();
            props.onClose()
		}
	};
	const handleChange = (prop: string) => (event: any) => {
		setMemberData({
			...memberData,
			[prop]: event.target.value,
		});
	};
    
	const updateMember = async () => {
		try {
			const response = await axios({
				method: "put",
				url: `http://localhost:8000/swaroop/member/${memberData._id}`,
				data: {
					name: memberData.name,
					email: memberData.email,
					role: memberData.role,
                    password: memberData.password
				},
			});
		} catch {
			console.log("error fetching api");
		}
	};
	const addMember = async () => {
		try {
			const response = await axios({
				method: "post",
				url: `http://localhost:8000/swaroop/member`,
				data: {
					name: memberData.name,
					email: memberData.email,
					role: memberData.role,
                    password: memberData.password
				},
			});
		} catch {
			console.log("error fetching api");
		}
	};

	return (
		<div className="modal-page-overlay">
			<div className="admin-modal">
				<div className="modal-head">{props.type} user</div>
				<div className="modal-body">
					<div className="single-row">
						<div className="label">
							<label>Name</label>
						</div>
						<div className="full-width">
							<input
								type="text"
								className="form-control"
								value={memberData.name}
								onChange={handleChange("name")}
							/>
						</div>
					</div>
					<div className="single-row">
						<div className="label">
							<label>Email</label>
						</div>
						<div className="full-width">
							<input
								type="text"
								className="form-control"
								value={memberData.email}
								onChange={handleChange("email")}
							/>
						</div>
					</div>
                    <div className="single-row">
						<div className="label">
							<label>Password</label>
						</div>
						<div className="full-width">
							<input
								type="password"
								className="form-control"
								value={memberData.password}
								onChange={handleChange("password")}
							/>
						</div>
					</div>
					<div className="single-row">
						<div className="label">
							<label>Role</label>
						</div>
						<div className="full-width">
							<select
								name="role"
								id="role"
								className="form-select"
								defaultValue={memberData.role}
								onChange={handleChange("role")}
							>
								<option value="">Select a Role</option>
								<option value="DEV">DEV</option>
								<option value="QA">QA</option>
							</select>
						</div>
					</div>
					{showError ? (
						<div className="alert alert-danger mt-2" role="alert">
							Please fill all the fields!
						</div>
					) : (
						<></>
					)}
				</div>
				<div className="modal-footer">
					<button
						type="button"
						className="btn btn-custom-theme"
						onClick={() => submitData()}
					>
						{props.type}
					</button>
					<button
						type="button"
						className="btn btn-danger"
						onClick={() => props.onClose()}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminModal;
