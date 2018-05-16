import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
const Layout = (props) => (
    <div>
      <Sidebar />
       <Header title={props.title} content={props.content}/>
       {props.children}
      <Footer />
    </div>
)

export default Layout