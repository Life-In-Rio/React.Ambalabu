export default function Rendering() {
  const name = [
    { Id: 1, name: "Abyan" },
    { Id: 2, name: "Eshan" },
    { Id: 3, name: "Achmed" },
  ];

  const filteredUsers = name.filter ((user) => user.name.endsWith("n") || user.name.endsWith("d"));

  return (
    <div>
      <ul>
        {name.map((item) => (
          <li key={item.Id}>{item.Id}</li>
        ))}

        {filteredUsers.map((user) => (
          <li key={user.Id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
