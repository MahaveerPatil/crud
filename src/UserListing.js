/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
    const [userdata, userdatachange] = useState(null);
    const navigate = useNavigate();

    const GetDetails = (id) => {
        navigate("/user/detail/" + id);
    }
    const UpdateUser = (id) => {
        navigate("/user/update/" + id);
    }
    const Deletefunction = (id) => {
        if (window.confirm('Do you want to Delete User?')) {
            fetch("http://localhost:4000/user/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Deleted User successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:4000/user").then((res) => {
            return res.json();
        }).then((resp) => {
            userdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Users Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="user/create" className="btn btn-success">Add New User(+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {userdata &&
                                userdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={() => { UpdateUser(item.id) }} className="btn btn-success">Update User</a>
                                            <a onClick={() => { Deletefunction(item.id) }} className="btn btn-danger">Delete User</a>
                                            <a onClick={() => { GetDetails(item.id) }} className="btn btn-primary">Get User</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserList;