import Head from 'next/head'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
const styles = {
  title: {
    cursor: 'pointer',
  },
};
// import stylesheet from '../styles/index.scss';

export default (props) => (
  <div>
  <Head>
    <title>{props.title}</title>
    {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <meta charset="utf-8" />
    <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height" />
    <meta name="theme-color" content="#000000" />
  </Head>
  <AppBar
    title={<span style={styles.title}>Title</span>}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
</div>
)