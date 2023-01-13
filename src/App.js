import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Router/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
