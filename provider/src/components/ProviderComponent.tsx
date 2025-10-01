import React from 'react';
import './ProviderComponent.css';

const Provider: React.FC = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div >
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </div>

  );
};

export default Provider;
