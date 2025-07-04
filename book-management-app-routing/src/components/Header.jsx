import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  
    <nav className="navbar">
     <Link to="/" className='logo'> Online Book Managment Application</Link>
   <ul>
   {/* <a href=''><li>Home</li></a>  */}
   <Link to='/' className='link-nav'><li>Home</li></Link>
   <Link to='/about' className='link-nav'><li>About Us</li></Link> 
      <Link to='/addBook' className='link-nav'><li>Add Book</li></Link> 
   <Link to='/bookdetailsaddBook' className='link-nav'><li>Book Details</li></Link> 

   <Link to='/contact' className='link-nav'><li>Conatct Us</li></Link> 
   </ul>
   {/* <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> */}
   </nav>
 
 
  )
}

export default Header