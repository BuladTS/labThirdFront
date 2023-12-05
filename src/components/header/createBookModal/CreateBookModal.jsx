import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Context} from "../../../main.jsx";
import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {useCreateBook} from "../../../hooks/book/useCreateBook.js";

export const CreateBookModal = ({show, setShow}) => {
    const [validated, setValidated] = useState(false);
    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        mode: "onSubmit",

    })

    const handleClose = () => setShow(false);

    const {createBook} = useCreateBook({reset})

    const submit = (data, event) => {
        console.log(data)
        console.log(event.target)
        const form = event.target;
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            handleClose()
            createBook(data)
            setValidated(false)
        }
        setValidated(true);
    }

    return <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit(submit)} id="new-book">
                    <Form.Group className="mb-3" controlId="author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter author"
                            {...register("author")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter author
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter book Title"
                            {...register("title")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter title
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="genre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter book Genre"
                            {...register("genre")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter genre
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pages">
                        <Form.Label>Pages</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            min="1"
                            max="1000"
                            placeholder="Enter book pages"
                            {...register("pages")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Pages must be between 1 and 1000
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="weight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            min="0" max="5" step="0.1"
                            placeholder="Enter book weight"
                            {...register("weight")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Weight must be between 0 and 5, format x.y
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button form="new-book" variant="primary" type="submit">
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}