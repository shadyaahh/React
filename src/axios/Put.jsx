import axios from "axios";
import { useState } from "react";

function Put () {
  const [name, setName] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await axios.put("https://api.example.com/users/1", {
        name: name,
      });

      console.log("Updated:", response.data);
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <input 
        type="text" 
        placeholder="Enter new name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Put
