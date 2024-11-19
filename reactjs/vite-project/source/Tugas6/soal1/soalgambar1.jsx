export default function Pengguna() {
    const person = [
      { id: 17, name: "Abyan", age: 17 },
      { id: 18, name: "Achmed", age: 28 },
      { id: 19, name: "Hanin", age: 27 },
      { id: 20, name: "Alfath", age: 29 },
      { id: 21, name: "Atha", age: 20 },
      { id: 22, name: "Darrell", age: 15 },
      { id: 23, name: "Fathir", age: 30 },
      { id: 24, name: "Rayyan", age: 20 },
      { id: 25, name: "Abdillah", age: 32 },
      { id: 26, name: "Abduh", age: 40 },
      { id: 27, name: "Riska", age: 15 },
    ];
  
    const filterName = person.filter((user) => user.name.startsWith("A"));
    const filteredUsers = person.filter((user) => user.age >= 25);
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">All Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {person.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">Age: {item.age}</p>
            </div>
          ))}
        </div>
  
        <h2 className="text-xl font-bold mt-6 mb-4">Users with names starting with "A"</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filterName.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">Age: {user.age}</p>
            </div>
          ))}
        </div>
  
        <h2 className="text-xl font-bold mt-6 mb-4">Users with ages greater than or equal to 25</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">Age: {user.age}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  