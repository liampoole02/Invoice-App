function SideNav() {
    function getActiveStatus(url) {
        if (window.location.pathname === url) {
            return "active";
        }
        return "";
    }
    return ( <
        div className = "nav d-flex flex-column " >
        <
        div className = "applogo d-flex p-4 align-items-center" >
        <
        div className = "mx-2 font-weight-lighter text-light fs-3 fw-lighter " >
        App Name { " " } <
        /div>{" "} <
        /div>{" "} <
        ul className = "menu mt-5 text-light" >
        <
        li className = {
            "d-flex align-items-center mb-4 lead " + getActiveStatus("/")
        } >
        <
        i className = "bi-speedometer2" / >
        <
        div className = "mx-2" >
        <
        a href = "/" > Dashboard < /a>{" "} <
        /div>{" "} <
        /li>{" "} <
        li className = {
            "d-flex align-items-center mb-4 lead " + getActiveStatus("/invoice")
        } >
        <
        i className = "bi-files" / >
        <
        div className = "mx-2" >
        <
        a href = "/invoice" > Invoice < /a>{" "} <
        /div>{" "} <
        /li>{" "} <
        li className = {
            "d-flex align-items-center mb-4 lead " +
            getActiveStatus("/customer")
        } >
        <
        i className = "bi-people" / >
        <
        div className = "mx-2" >
        <
        a href = "/customer" > Customers < /a>{" "} <
        /div>{" "} <
        /li>{" "} <
        li className = {
            "d-flex align-items-center mb-4 lead " + getActiveStatus("/product")
        } >
        <
        i className = "bi-box" / >
        <
        div className = "mx-2" >
        <
        a href = "/product" > Products < /a>{" "} <
        /div>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>
    );
}
export default SideNav;