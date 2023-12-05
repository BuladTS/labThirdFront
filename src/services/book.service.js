import axios from "axios";
import api from "../http/http.js";

export const BookService = {
    async getAll()  {
        const response = await api.get('/books')
        return response.data
    },

    async getById(id) {
        const response = await api.get(`books/${id}`)
        return response.data
    },

    async createBook(book) {
        return await api.post('/books', book)
    },

    async deleteBook(id){
        return await api.delete(`/books/${id}`)
    },

    async updateBook(book, id) {
        return await api.patch(`/books/${id}`, book)
    }
}