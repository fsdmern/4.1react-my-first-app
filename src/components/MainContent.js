import React from 'react';

function MainContent(props) {
  console.log(props)
  return <div>Thanks, my name is: {props.name}</div>;
}

export default MainContent;
