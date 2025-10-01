import React from 'react';

const Button: React.FC = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div >
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </div>

  );
};

export default Button;
