import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount>0){
            alert('user updated successful')
        }
    })
  };
  return (
    <div>
      <h3>Update info of {loadedUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser?.name} />
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email} />
        <br />
        <input type="submit" name="Update" />
      </form>
    </div>
  );
};

export default Update;
