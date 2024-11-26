import { useState } from "react";
import { io } from "socket.io-client";

function JoiningPage() {
  const socket = io("url");
  const [formData, setFormData] = useState({ Username: "", Role: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };
  const handleJoin = () => {
    socket.emit("userRegister", {
      username: formData.Username,
      role: formData.Role,
    });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="p-10 border-2 border-black m-10 w-1/5 rounded-xl">
        <div>
          <h2 className="my-2">Username</h2>
          <input
            className="border-2 border-black p-3 rounded-xl"
            type="text"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className="mt-5">
          <h2 className="my-2">Role</h2>
          <select
            className="border-2 border-black p-3 rounded-xl "
            name="Role"
            value={formData.Role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="Attacker">Attacker</option>
            <option value="Civilian">Civilian</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="p-3 border-2 border-blue-700 m-4 rounded-lg"
            onClick={handleJoin}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
export default JoiningPage;
