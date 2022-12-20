import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../app.css'
const InventoryNavbar = () => {
  return (
    <div>
           
        <Navbar bg="light" expand="lg">
          <Container>
     <Link to="/">   <Navbar.Brand >  Tharb-Inventory</Navbar.Brand></Link> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Add User</Nav.Link>
                <Nav.Link href="#link">Add Produuts</Nav.Link> */}
                <NavDropdown title="Stock-Selection" id="basic-nav-dropdown">
                <Link to="/productslist"><NavDropdown.Item href="#action/3.0">Products List</NavDropdown.Item></Link>  
                <Link to="/stockin">   <NavDropdown.Item href="#action/3.1">Stock-in</NavDropdown.Item></Link>
                <Link to="/stockout">    <NavDropdown.Item href="#action/3.2">
                    Stock-out
                  </NavDropdown.Item></Link>
                  <Link to="/stockinventoty">       <NavDropdown.Item href="#action/3.3">Stock-inventoty</NavDropdown.Item></Link>
                  <Link to="/monthlyreport">       <NavDropdown.Item href="#action/3.4">Monthly Report</NavDropdown.Item></Link>
                  <Link to="/stockoutsearch">       <NavDropdown.Item href="#action/3.4">Stock-out Search</NavDropdown.Item></Link>
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