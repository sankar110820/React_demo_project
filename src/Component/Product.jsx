import React, { Component } from "react";
import Countcomp from "./Countcomp";

class Product extends Component {
    state = { Name: 'AvataR', Price: 200 }
    render() {
        return (
            <>
            <Countcomp name={this.state.Name}/>
                <h2>Welcome To Our Product Page</h2>
                <h3>Select Your Product</h3>

    
            </>
        ) 
    }
}
export default Product



