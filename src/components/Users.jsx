import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loaderUsers = useLoaderData();
    const [users, setUsers] = useState(loaderUsers);

    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('delete successfully');
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map((user, idx) => <p key={idx}>{user.name}: {user.email} {user._id} <Link to={`/update/${user._id}`}><button>update</button></Link> <button onClick={() => handleDelete(user._id)}>x</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;