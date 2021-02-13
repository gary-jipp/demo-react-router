import React from 'react';

function Home(props) {

  const loc = JSON.stringify(props.location);

  return (
    <div className="container">
      <h3>Home Page</h3>
      <p className="flow-text">{loc}</p>
    </div>
  );
}

export default Home;

