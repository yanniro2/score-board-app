import React from "react";

interface Users {
  id: string;
  name: string;
}

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10,
    },
  });

  const users: Users[] = await res.json();
  return (
    <div>
      {users.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
};

export default page;
