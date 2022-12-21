import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../app.css'
import './navbar.css'
// import logo from '../images/logo.jpeg'
import logo from '../../images/logo.jpeg'

const AdminNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
          <Link to="/">   <Navbar.Brand  className='navbr_brand'>  Inventory Managment System</Navbar.Brand></Link> 
              <img src={logo} className="navabar_logo" alt="" / >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Add User</Nav.Link>
                <Nav.Link href="#link">Add Produuts</Nav.Link> */}
                <NavDropdown title="Selection" id="basic-nav-dropdown">
                <Link to="/adminpanel"><NavDropdown.Item href="#action/3.1">Add User</NavDropdown.Item></Link>  
                <Link to="/addproducts">   <NavDropdown.Item href="#action/3.1">Add Products</NavDropdown.Item></Link>
                <Link to="/Addsuppliers">    <NavDropdown.Item href="#action/3.2">
                    Add Supllier
                  </NavDropdown.Item></Link>
                  <Link to="/Addloactaion">       <NavDropdown.Item href="#action/3.3">Add Location</NavDropdown.Item></Link>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
}

export default AdminNavbar