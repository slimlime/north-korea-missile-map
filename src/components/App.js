const {h, Component} = require('preact');
const styles = require('./App.scss');
const worm = require('./worm.svg');

const World = require('./World');





class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        {/* <img className={styles.worm} src={worm} />
        <h1>north-korea-missile-map</h1> */}
        <World />
      </div>
    );
  }
}

module.exports = App;
