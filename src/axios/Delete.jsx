import axios from "axios";

function Delete() {
  const handleDelete = async () => {
    try {
      const response = await axios.delete("https://api.example.com/users/1");

      console.log("Deleted:", response.data);
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Delete;
