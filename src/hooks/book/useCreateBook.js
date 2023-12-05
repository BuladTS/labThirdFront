import {useMutation, useQueryClient} from "react-query";
import {BookService} from "../../services/book.service.js";

export const useCreateBook = ({reset}) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create book'], data =>
    BookService.createBook(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('books')
            reset()
        }
    })

    const createBook = (data) => {
        mutate(data)
    }
    return {createBook}
}