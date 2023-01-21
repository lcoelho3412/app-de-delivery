import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, NotFound, Registro } from '../pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/signup" component={ Registro } />

        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
