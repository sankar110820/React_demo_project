import React, { Component } from "react";

class Countcomp extends Component {
    state = { Count: 1, name: 'kpsankar',Ticket:0 }
    Addproductnum = () => {
        this.setState({ Count: this.state.Count + 1 })
    }
    Addticket = () => {
        this.setState({ Ticket: this.state.Ticket + 1 })
    }

    render() {
        return (
            <>
                <h3>Addproduct -{this.state.Count}</h3>
                <button onClick={this.Addproductnum}>Add</button>
                <h5>Movie Name - {this.props.name}</h5>
                <h3>Ticket - {this.state.Ticket}</h3>
                <button onClick={this.Addticket}>Add Ticket</button>

                {/* <Product/> */}


                {/* <h3>Price - {this.props.price}</h3>  */}

            </>
        );
    }

}

export default Countcomp