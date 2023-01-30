import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, NotFound, Register, Products, Checkout, Admin } from '../pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/admin/manage" component={ Admin } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

// mudar BrowserRouter para HashRouter para fazer o deploy quando terminar o projeto
