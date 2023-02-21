import React, { useState } from "react";
import Drawer from "../components/Drawer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminModal from "../components/AdminModal";

type Props = {
	name: string;
	email: string;
	role: string;
	_id: string;
	password: string;
};

function Admin() {
	const [memberData, setMemberData] = useState<Props[]>([]);
	const [selectedMember, setSelectedMember] = useState<Props>({
		name: "",
		email: "",
		role: "",
		_id: "",
		password: "",
	});
	const [modalType, setModalType] = useState("");
	const [showAdminModal, setShowAdminModal] = useState(false);
	React.useEffect(() => {
		getMember();
	}, []);
	const addMember = async () => {
		try {
			const response = await axios({
				method: "post",
				url: "http://localhost:8000/swaroop/member",
				data: {},
			});
			console.log(response.data[0]._id);
			setMemberData(response.data);
		} catch {
			console.log("error fetching api");
		}
	};
	const getMember = async () => {
		try {
			const response = await axios.get("http://localhost:8000/swaroop/member");
			console.log(response.data[0]._id);
			setMemberData(response.data);
		} catch {
			console.log("error fetching api");
		}
	};

	const deleteMember = async (id: string) => {
		try {
			const response = await axios.delete(
				`http://localhost:8000/swaroop/member/${id}`
			);
			console.log(response);
			getMember();
		} catch {
			console.log("error fetching api");
		}
	};
	const openUpdateUserModal = (data: Props) => {
		setModalType("update");
		setSelectedMember(data);
		setShowAdminModal(true);
	};
	const openAddUserModal = () => {
		setModalType("add");
		setSelectedMember({
			name: "",
			email: "",
			role: "",
			_id: "",
			password: "",
		});
		setShowAdminModal(true);
	};

	const closeModal = () => {
		getMember();
		setShowAdminModal(false);
	};
	return (
		<div className="page-main">
			<Drawer />
			<div className="page-body">
				{showAdminModal ? (
					<AdminModal
						type={modalType}
						member={selectedMember}
						onClose={closeModal}
					/>
				) : (
					<></>
				)}
				<div className="page-heading">Admin</div>
				<div className="page-main-body">
					<div className="page-sub-heading">
						<div className="text">Users</div>
						<button className="btn btn-custom-theme" onClick={() => openAddUserModal()}>Add User</button>
					</div>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th className="text-center">Actions</th>
							</tr>
						</thead>
						<tbody>
							{memberData.map((data, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{data.name}</td>
									<td>{data.email}</td>
									<td>{data.role}</td>
									<td className="text-center">
										<button
											type="button"
											className="btn btn-custom-theme mr-2"
											data-toggle="modal"
											data-target="#exampleModalCenter"
											onClick={() => openUpdateUserModal(data)}
										>
											Update
										</button>
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => deleteMember(data._id)}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Admin;
