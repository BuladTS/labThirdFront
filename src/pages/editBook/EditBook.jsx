import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {BookService} from "../../services/book.service.js";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {BlockWrapper} from "../../wrappers/BlockWrapper.jsx";
import {useState} from "react";
import {useForm} from "react-hook-form";

const EditBook = () => {
    const id = useParams().id
    const {data, isLoading} = useQuery('book', () => BookService.getById(id));

    if (isLoading)
        return <>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <Spinner animation="border" variant="primary"/>
                    </div>
                </div>
            </section>
        </>

    const [validated, setValidated] = useState(false);
    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        mode: "onSubmit",

    })

    const submit = (data, event) => {
        console.log(data)
    }


    const body = <Form noValidate validated={validated} onSubmit={handleSubmit(submit)}>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    required
                    value={data.author}
                    placeholder="Enter Author"
                    {...register('author')}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter author
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    required
                    value={data.title}
                    placeholder="Enter Title"
                    {...register('title')}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter title
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="genre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                    required
                    value={data.genre}
                    placeholder="Enter Genre"
                    {...register('genre')}

                />
                <Form.Control.Feedback type="invalid">
                    Please enter genre
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="pages">
                <Form.Label>Pages</Form.Label>
                <Form.Control
                    required
                    type="number"
                    min="1"
                    max="1000"
                    value={data.pages} placeholder="Enter Pages"
                    {...register('pages')}
                />
                <Form.Control.Feedback type="invalid">
                    Pages must be between 1 and 1000
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="weight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                    required
                    type="number"
                    min="0" max="5" step="0.1"
                    value={data.weight} placeholder="Enter Weight"
                    {...register('weight')}
                />
                <Form.Control.Feedback type="invalid">
                    Weight must be between 0 and 5, format x.y
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button type="submit">Update</Button>
            <Link className="btn btn-danger" to={'/'} style={{marginLeft: 10}}>Back</Link>
        </div>
    </Form>

    return (
        <BlockWrapper children={body} title="Edit book"/>
    )
}

export default EditBook