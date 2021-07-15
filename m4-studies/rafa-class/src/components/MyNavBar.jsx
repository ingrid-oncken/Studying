import {
  Button,
  Form,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavBar = ({ search, filtered }) => (
  <Navbar bg="success" expand="lg">
    <Navbar.Brand href="#home">Rafa's Class</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link href="#home">Home</Link>
        <Link href="#link">Link</Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={search}
          onChange={(e) => filtered(e.target.value)}
        />
        <Button variant="success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)
export default MyNavBar
