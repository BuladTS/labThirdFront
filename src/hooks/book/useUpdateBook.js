import {useMutation, useQueryClient} from "react-query";
import {BookService} from "../../services/book.service.js";

export const useUpdateBook = () => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation(['update book'], ({book , id}) =>
        BookService.updateBook(book, id), {
        onSuccess: () => {
            queryClient.invalidateQueries('books')
        }
    })

    const updateBook = (book, id) => {
        mutate(book, id)
    }

    return {updateBook}
}