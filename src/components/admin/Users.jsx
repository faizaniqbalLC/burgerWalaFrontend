import React from "react";
import me from "../../assets/founder.png";

const Users = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 7, 4, 3, 3, 3];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Ids</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((a) => (
              <tr key={a}>
                <td>#9%%%%^</td>
                <td>Fizan</td>
                <td>
                  <img src={me} alt="user" />
                </td>
                <td>Admin</td>
                <td>{"23-3-2023"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
