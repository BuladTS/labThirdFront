import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDeleteBook} from "../../hooks/book/useDeleteBook.js";

export const BookCard = ({book}) => {

    const {deleteBook} = useDeleteBook()
    const delBook = (event) => {
        deleteBook(book.id)
    }


    return (
        <Container className="m-3">
            <div className="card">
                <div className="card-header">
                    {book.title}
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            ID: {book.id}
                        </div>
                        <div className="col">
                            Author: {book.author}
                        </div>
                        <div className="col">
                            Genre: {book.genre}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Pages: {book.pages}
                        </div>
                        <div className="col">
                            Weight: {book.weight} kg
                        </div>
                        <div className="col">

                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-3 d-grid">
                            <Link to={'/' + book.id} className="btn btn-outline-primary ">Edit</Link>
                        </div>
                        <div className="col-3 d-grid">
                            <button className="btn btn-outline-danger" onClick={delBook}>Delete</button>
                        </div>
                    </div>
                </div>

            </div>

        </Container>
    )
}