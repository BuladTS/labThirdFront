import api from "../http/http.js";

export const AuthService = {

    async login(username, password) {

        return api.post('auth/authenticate', {
            username: username,
            password: password
        })
        // const response = await axios.post('http://localhost:8080/api/auth/authenticate', {
        //     username: username,
        //     password: password
        // })
        // return response.data
    },

    async registration(username, password, role) {
        return api.post('auth/register', {username, password, role})
    },

    checkToken() {
        return api.get('/auth/check-token')
        // const response = api.get('/auth/check-token')
        // console.log('response', response)
        // response.then(
        //     function (result) {
        //         console.log(result)
        //         console.log('res ' + result.data)
        //         return true
        //     },
        //     function (error) {
        //         return false
        //     })

    }
}

// http://localhost:8080/api/auth/authenticate
// http://localhost:8080/api/auth/authenticate