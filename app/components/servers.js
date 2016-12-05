const React = require('react');
const ServerRow = require('./server-row');

const Servers = function (props) {
  return (<table><tbody>
    {props.servers.map(server => <ServerRow key={server.name} server={server} />)}
  </tbody></table>);
};

module.exports = Servers;
