import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
const Layout = (props) => (
    <div>
      <Sidebar />
       <Header title={props.title} content={props.content}/>
       <div style={{backgroundColor: '#E0E0E0'}}>{props.children}</div>
      <Footer />
    </div>
)

export default Layout