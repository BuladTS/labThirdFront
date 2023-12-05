import {useMutation, useQueryClient} from "react-query";
import {BookService} from "../../services/book.service.js";

export const useDeleteBook = () => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation(['delete book'], id =>
        BookService.deleteBook(id), {
        onSuccess: () => {
            queryClient.invalidateQueries('books')
        }
    })

    const deleteBook = (id) => {
        mutate(id)
    }
    return {deleteBook}
}