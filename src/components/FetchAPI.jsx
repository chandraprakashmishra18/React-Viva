import { useState } from "react";
import { useEffect } from "react";

function Details() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) =>
         response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, []);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Details of the User are Displayed here:</h1>
      <p><strong>1. Name:</strong> {user.name}</p>
      <p><strong>2. Website:</strong> {user.website}</p>
    </div>
  );
}

export default Details;