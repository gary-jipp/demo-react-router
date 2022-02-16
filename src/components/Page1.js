import React from 'react';

function Page1(props) {

  const hist = JSON.stringify(props.history);

  return (
    <div className="container">
      <h3>This is page 1</h3>
      <p className="flow-text">{hist}</p>
      <button onClick={() => props.history.replace("/page2")}>Page 2</button>
    </div >
  );
}

export default Page1;
