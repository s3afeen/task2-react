// Task 1: Form Handling
import React, { useState, useEffect } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email });
  };

  useEffect(() => {
    console.log("Name:", name);
    console.log("Email:", email);
  }, [name, email]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;












// Task 2: Counter App

// import React, { useState, useEffect } from 'react';

// function CounterApp() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   useEffect(() => {
//     setCount2(count1 * 2);
//     console.log("Count1:", count1);
//     console.log("Count2:", count2);
//   }, [count1]);

//   return (
//     <div>
//       <div>
//         <h3>Counter 1: {count1}</h3>
//         <button onClick={() => setCount1(count1 + 1)}>Increase</button>
//         <button onClick={() => setCount1(count1 - 1)}>Decrease</button>
//       </div>

//       <div>
//         <h3>Counter 2 (double of Counter 1): {count2}</h3>
//       </div>
//     </div>
//   );
// }

// export default CounterApp;













// Task 3: Fetch Data from an API

// import React, { useState, useEffect } from 'react';

// function FetchData() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Error fetching data');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h3>Fetched Data:</h3>
//       <ul>
//         {data.map(user => (
//           <li key={user.id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FetchData;

