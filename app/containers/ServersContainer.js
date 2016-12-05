const React = require('react');
const Servers = require('../components/servers');
const ServersContainer = React.createClass({
  getInitialState() {
    return {
      servers: [
        {
          name: 'Local',
          type: 'couchbaselite',
          adminPort: 4985,
          port: 4984,
          host: '127.0.0.1',
        },
        {
          name: 'Local2',
          type: 'couchbaselite',
          adminPort: 4985,
          port: 4984,
          host: '127.0.0.1',
        },
        {
          name: 'Local3',
          type: 'couchbaselite',
          adminPort: 4985,
          port: 4984,
          host: '127.0.0.1',
        },
      ],
    };
  },
  render() {
    return (<div className="panel col-md-offset-2 col-md-8">
      <Servers servers={this.state.servers} />
    </div>);
  },
});

module.exports = ServersContainer;
