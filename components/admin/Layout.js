import Header from '../admin/Header';
import Sidebar from '../admin/Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const AdminLayout = (props) => (
    <MuiThemeProvider>
    <div style={{minHeight: "400px",  paddingLeft: "256px"}}>
        <Sidebar />
        <Header title={props.title}/>
        {props.children}
    </div>
    </MuiThemeProvider>
)

export default AdminLayout