import React from 'react';

function Page2(props) {

  const loc = JSON.stringify(props.location);

  return (
    <div className="container">
      <h3>This is page 2</h3>
      <p className="flow-text">{loc}</p>
    </div>
  );
}

export default Page2;
