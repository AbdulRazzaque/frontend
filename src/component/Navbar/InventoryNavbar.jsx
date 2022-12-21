import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../app.css'
import './navbar.css'
import logo from '../../images/logo.jpeg'
const InventoryNavbar = () => {
  return (
    <div>
           
        <Navbar bg="light" expand="lg" className=''>
          <Container>
          
        <Link to="/">   <Navbar.Brand  className='navbr_brand'>  Inventory Managment System</Navbar.Brand></Link> 
        <img src={logo} className="navabar_logo" alt="" / >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Add User</Nav.Link>
                <Nav.Link href="#link">Add Produuts</Nav.Link> */}
                <NavDropdown title="Transection" id="basic-nav-dropdown">
                <Link to="/stockin">   <NavDropdown.Item href="#action/3.1">Stock-in</NavDropdown.Item></Link>
                <Link to="/stockout">    <NavDropdown.Item href="#action/3.2">Stock-out</NavDropdown.Item></Link>
                  <Link to="/stockoutsearch">       <NavDropdown.Item href="#action/3.4">Stock-out Search</NavDropdown.Item></Link>
                <Link to="/productslist"><NavDropdown.Item href="#action/3.0">Products List</NavDropdown.Item></Link>  

                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>


                <NavDropdown title="Inventory" id="basic-nav-dropdown">

                  <Link to="/stockinventoty">       <NavDropdown.Item href="#action/3.3">Stock-inventoty</NavDropdown.Item></Link>
                  <Link to="/monthlyreport">       <NavDropdown.Item href="#action/3.4">Monthly Report</NavDropdown.Item></Link>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
    </div>
    );
}

export default InventoryNavbar