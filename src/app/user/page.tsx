import React from "react";

export const user = () => {
  return (
    <div>
      <form action="" className="flex flex-col">
      <input
        type="email"
        placeholder="Enter the email id of user"
        className="p-3"
        required
      />
      <button type="submit" className="bg-flame-400">Submit</button>
      </form>
    </div>
  );
};

export default user
