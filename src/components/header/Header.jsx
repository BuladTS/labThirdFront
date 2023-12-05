import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Context} from "../../main.jsx";
import {CreateBookModal} from "./createBookModal/CreateBookModal.jsx";

export const Header = () => {

    const [show, setShow] = useState(false);

    const {store} = useContext(Context)

    const handleShow = () => setShow(true);

    const logout = (event) => {
        event.preventDefault()
        event.stopPropagation()
        store.logout()
    }


    return <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Библиотека</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Button onClick={handleShow}>Add Book</Button>
                </Nav>
                <Button onClick={logout}>Logout</Button>
            </Container>
        </Navbar>
        <CreateBookModal show={show} setShow={setShow}/>

    </>
}