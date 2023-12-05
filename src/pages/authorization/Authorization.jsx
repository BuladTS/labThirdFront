import {Button, Form} from "react-bootstrap";
import {BlockWrapper} from "../../wrappers/BlockWrapper.jsx";
import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {Context} from "../../main.jsx";
import {observer} from "mobx-react-lite";
import {Link, useNavigate} from "react-router-dom";

const Authorization = () => {

    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,

    } = useForm({
        mode: "onSubmit"
    })

    const {store} = useContext(Context)

    const submit = (data) => {
        if (store.login(data.username, data.password))
            navigate('/')
        console.log(data)

    }

    const body = <Form noValidate validated={validated} onSubmit={handleSubmit(submit)}>
        <div className="row align-items-center pt-4 pb-3">
            <div className="col-md-3 ps-5">
                <h6 className="mb-0">Username</h6>
            </div>
            <div className="col-md-9 pe-5">
                <Form.Group controlId={"inputUsername"}>
                    <Form.Control
                        required
                        type={"text"}
                        placeholder={"Enter your username"}
                        {...register("username")}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </div>
        </div>
        <hr className="mx-n3"/>
        <div className="row align-items-center py-3">
            <div className="col-md-3 ps-5">

                <h6 className="mb-0">Password</h6>

            </div>
            <div className="col-md-9 pe-5">
                <Form.Group className={"mb-3"} controlId={"inputPassword"}>
                    <Form.Control
                        type={"password"}
                        placeholder={"Enter your password"}
                        {...register("password")}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </div>
        </div>
        <hr className="mx-n3"/>
        <div className="px-5 py-4 d-flex justify-content-between">
            <Button type="submit" className="btn btn-primary btn-lg">Authenticate</Button>
            <Link to="/register" className="btn btn-primary btn-lg">Register</Link>
        </div>
    </Form>
    return <BlockWrapper children={body} title={"Authentication"}/>
}

export default observer(Authorization);