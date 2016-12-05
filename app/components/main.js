const React = require('react');

const Main = props =>
   (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button" className="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1" aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">Couchbase Explorer</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/documents">Documents <span className="sr-only">(current)</span></a>
              </li>
              <li><a href="/design-docs">Design Documents</a></li>
              <li><a href="/users">Users</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>);

Main.propTypes = {
  children: React.PropTypes.node,
};

module.exports = Main;
