import Header from './Header';
import Footer from './Footer';
const Layout = (props) => (
    <div>
      <Header title={props.title}/>
       {props.children}
      <Footer />
    </div>
)

export default Layout