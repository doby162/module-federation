import './App.css';
import Provider from 'provider';
import Button from 'provider/Button'

const App = () => {
  return (
    <div className="content">
      <Provider />
      <Button />
    </div>
  );
};

export default App;
