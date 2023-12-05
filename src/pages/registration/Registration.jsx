import {Button, Form} from "react-bootstrap";
import {BlockWrapper} from "../../wrappers/BlockWrapper.jsx";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const Registration = () => {

    const body = <Form>
        <div className="row align-items-center pt-4 pb-3">
            <div className="col-md-3 ps-5">
                <h6 className="mb-0">Username</h6>
            </div>
            <div className="col-md-9 pe-5">
                <Form.Group controlId={"inputUsername"}>
                    <Form.Control type={"text"} placeholder={"Enter your username"}/>
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
                    <Form.Control type={"password"} placeholder={"Enter your password"}/>
                </Form.Group>
            </div>
        </div>
        <hr className="mx-n3"/>
        <div className="row align-items-center py-3">
            <div className="col-md-3 ps-5">

                <h6 className="mb-0">Role</h6>

            </div>
            <div className="col-md-9 pe-5">
                <Form.Group>
                    <Form.Select>
                        <option>User</option>
                        <option>Admin</option>
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
        <hr className="mx-n3"/>
        <div className="px-5 py-4 d-flex justify-content-between">
            <Button type="submit" className="btn btn-primary btn-lg">Register</Button>
            <Link to="/login" className="btn btn-primary btn-lg">Authenticate</Link>
        </div>
    </Form>

    return <BlockWrapper children={body} title={"Register"}/>
}

export default observer(Registration)