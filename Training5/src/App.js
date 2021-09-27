import Task1 from './task1/Task1';
// import Task2 from './task2/Task2';
import './App.css';
// import { Switch, Route } from 'react-router-dom';
// import { NotFound, PrivateRoute } from './task2/components/Common';
// import { AdminLayout } from './task2/components/Layout';
// import LoginPage from './task2/features/auth/pages/LoginPage';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch> */}
      <Task1/>
    </div>
  );
}

export default App;
