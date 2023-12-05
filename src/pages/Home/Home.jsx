import {Button, Container, Nav, Navbar, Spinner} from "react-bootstrap";
import {Header} from "../../components/header/Header.jsx";
import {BookCatalog} from "../../components/bookCatalog/BookCatalog.jsx";
import {useQuery} from "react-query";
import {BookService} from "../../services/book.service.js";
import {observer} from "mobx-react-lite";

const Home = () => {

    const {data, isLoading} = useQuery(['books'], () => BookService.getAll())

    if (isLoading)
        return <>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <Spinner animation="border" variant="primary" />
                    </div>
                </div>
            </section>
        </>
    return <>
        <Header books={data}/>
        <BookCatalog books={data}/>
    </>
}

export default observer(Home)