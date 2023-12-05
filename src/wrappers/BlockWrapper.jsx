import {Button, Form} from "react-bootstrap";

export const BlockWrapper = ({children, title}) => {
    return <>
        <section className="vh-100" style={{backgroundColor: "#2779e2"}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-9">
                        <h1 className="text-white mb-4">{title}</h1>

                        <div className="card" style={{borderRadius: 15}}>
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}