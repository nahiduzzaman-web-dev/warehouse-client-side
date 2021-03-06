import React from 'react';
import logo from '../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Headers.css';

const Headers = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} alt="" style={{ width: '50px' }} /> <span>Clason</span> <span>Warehouse</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="manageitems">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="additems">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                                    <Nav.Link className='user-name mx-2' as={Link} to="myitems" disabled>{user?.displayName}</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button onClick={handleLogout} className='log-out'>Log Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;