import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const API_BASE = "https://nanoapi.nanosoft.co.za";
const API_KEY = "123987";

function Customer() {
  const [customerData, setCustomerdata] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getCustomer();
  }, []);

  async function getCustomer() {
    let response = await fetch(`${API_BASE}/customer`, {
      headers: { "x-api-key": API_KEY },
    });
    let data = await response.json();
    setCustomerdata(data);
  }

  function getClassName(item) {
    return item.stock_level < 5 ? "text-danger" : "";
  }

  function renderTableRow(item, key) {
    return (
      <tr
        key={key}
        onClick={() => history.push(`/customer/${item._id}`)}
        className={getClassName(item)}
      >
        <td>{item.name}</td>
        <td>{item.contact_email}</td>
      </tr>
    )
  }

  return (
    <div className="row">
      <div className="col-md-12 p-3">
        <div className="card">
          <div className="card-header">
            <div className="lead"> Customer List </div>{" "}
          </div>{" "}
          <div className="card-body">
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr className="bg-dark text-white">
                  <th className="text-center"> Name </th>
                  <th className="text-center"> Contact Email </th>
                </tr>{" "}
              </thead>{" "}
              <tbody>
                {customerData
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(renderTableRow)}
              </tbody>
            </table>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Customer;
