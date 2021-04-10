function Product() {
    return ( <
        div className = "row" >
        <
        div className = "col-md-12 p-3" >
        <
        div className = "card" >
        <
        div className = "card-header" >
        <
        div className = "lead" > Product List < /div>{" "} <
        /div>{" "} <
        div className = "card-body" >
        <
        table className = "table table-bordered table-hover table-striped" >
        <
        thead >
        <
        tr >
        <
        th > Name < /th> <th> Unit Price </th > { " " } <
        /tr>{" "} <
        /thead>{" "} <
        tbody > { /* Table content here */ } < /tbody>{" "} <
        /table>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Product;