function Dashboard() {
    return (
        <>
            <div className="row">
                <div className="col-md-6  p-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="lead"> Table </div>{" "}
                        </div>{" "}
                        <div className="card-body">
                            <table className="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th> Name </th> <th> Email </th>{" "}
                                    </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                    <tr>
                                        <td> John Smith </td> <td> john @gmail.com </td>{" "}
                                    </tr>{" "}
                                    <tr>
                                        <td> Peter Williams </td> <td> peter @gmail.com </td>{" "}
                                    </tr>{" "}
                                    <tr>
                                        <td> Jake Tapper </td> <td> jake @cnn.com </td>{" "}
                                    </tr>{" "}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="col-md-6  p-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="lead"> Form </div>{" "}
                        </div>{" "}
                        <div className="card-body">
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    {" "}
                  Email address{" "}
                                </label>{" "}
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>{" "}
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    {" "}
                  Example textarea{" "}
                                </label>{" "}
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    defaultValue={""}
                                />{" "}
                            </div>{" "}
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    {" "}
                  Example Select{" "}
                                </label>{" "}
                                <select className="form-select">
                                    <option value={1}> South Africa </option>{" "}
                                    <option value={2}> Germany </option>{" "}
                                    <option value={3}> U.K. </option>{" "}
                                    <option value={4}> USA </option>{" "}
                                    <option value={5}> Italy </option>{" "}
                                </select>{" "}
                            </div>{" "}
                            <div className="mb-3 d-flex justify-content-between">
                                <button type="submit" className="btn btn-danger">
                                    {" "}
                  Cancel{" "}
                                </button>{" "}
                                <button type="submit" className="btn btn-primary">
                                    {" "}
                  Submit{" "}
                                </button>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="col-md-6  p-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="lead"> Table </div>{" "}
                        </div>{" "}
                        <div className="card-body">
                            <table className="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th> Name </th> <th> Email </th>{" "}
                                    </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                    <tr>
                                        <td> John Smith </td> <td> john @gmail.com </td>{" "}
                                    </tr>{" "}
                                    <tr>
                                        <td> Peter Williams </td> <td> peter @gmail.com </td>{" "}
                                    </tr>{" "}
                                    <tr>
                                        <td> Jake Tapper </td> <td> jake @cnn.com </td>{" "}
                                    </tr>{" "}
                                </tbody>{" "}
                            </table>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
}

export default Dashboard;
