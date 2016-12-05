const React = require('react');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const ServersContainer = require('../containers/ServersContainer');
const Main = require('../components/main');

const routes = (
  <Router history={ReactRouter.browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={ServersContainer} />
    </Route>
  </Router>
);

module.exports = routes;
