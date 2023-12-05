import {makeAutoObservable} from "mobx";
import {AuthService} from "../services/auth.service.js";
import axios from "axios";
import {API_URL} from "../http/http.js";

export default class Store {
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    login(username, password) {
        const response = AuthService.login(username, password)
        response.then(
            (result) => {
                console.log(result)
                localStorage.setItem('token', result.data.token)
                this.setAuth(true)
            },
            (error) => {

            }
        )

        return this.isAuth

    }

    async register(username, password, role) {
        try {
            const response = await AuthService.registration(username, password, role)
            console.log(response)
            localStorage.setItem('token', response.data.token)
        } catch (err) {
            console.log(err.response?.data?.message)
        }
    }

    logout() {
        localStorage.removeItem('token')
        this.setAuth(false)
    }

    checkAuth() {
        const response = AuthService.checkToken()
        response.then(
            (result) => {
                console.log('Token is valid')
                this.setAuth(true)
            },
            (error) => {
                console.log('Token is invalid')
                this.setAuth(false)
                if (localStorage.getItem('token'))
                    localStorage.removeItem('token')
            })
        return this.isAuth

    }
}