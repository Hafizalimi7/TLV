import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Full Stack App</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
