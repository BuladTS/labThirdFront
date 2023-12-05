import {Container} from "react-bootstrap";
import {BookCard} from "../bookCard/BookCard.jsx";

export const BookCatalog = ({books}) => {
    return (
        <Container>
            {
                books.length ? books.map(book => (
                    <BookCard book={book}/>
                )) : <p>No cars</p>
            }
        </Container>
    )
}