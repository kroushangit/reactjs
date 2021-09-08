import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from server
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    // constructor() {
    //     super();
    //     this.handleIncreament =  this.handleIncreament.bind(this);
    // }

    

    // doHandleIncreament = () =>{
    //     this.handleIncreament({ id: 1});
    // };

    /*renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }*/

    render() { 
        console.log("Counter - Rendered");
        return (
            // <div>
            //     { this.state.tags.length === 0 && "Please create a new tag!"}
            //     { this.renderTags() }
            // </div>

            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncreament(this.props.counter)} className="btn btn-secondary btn-sm">Increament</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className= "btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
export default Counter;