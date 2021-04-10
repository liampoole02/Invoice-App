import logo from "./logo.svg";
import "./App.css";
import Header from './components/header';
import SideNav from './components/sidenav';
import Dashboard from './pages/dashboard';
import Invoice from './pages/invoice';
import Customer from './pages/customer';
import Product from './pages/product';



function App() {
    function getComponent(route) {
        switch (route) {
            case "/":
                return <Dashboard / > ;
            case "/customer":
                return <Customer / >
                    case "/invoice":
                return <Invoice / >
                    case "/product":
                return <Product / >
                    default:
                    return null;
        }
    }

    function getTitle(route) {
        switch (route) {
            case "/":
                return "Dashboard";
            case "/customer":
                return "Customers";
            case "/invoice":
                return "Invoices";
            case "/product":
                return "Products"
            default:
                return null;
        }
    }
    return ( <
        div className = "wrapper d-flex vh-100 " >
        <
        SideNav / >
        <
        div className = "main d-flex flex-column flex-grow-1 " >
        <
        Header title = { getTitle(window.location.pathname) }
        /> <
        div className = "content container-fluid p-4 overflow-auto " > { getComponent(window.location.pathname) } <
        /div> <
        /div> <
        /div >

    );
}

export default App;