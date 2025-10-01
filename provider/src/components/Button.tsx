import React from 'react';

const Button: React.FC = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div >
      <p>this is the second button</p>
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </div>

  );
};

export default Button;
