
import './charts.css';
import {Component} from "react";

class Charts extends Component() {
    constructor() {
       super();
       this.state = {
       charts: []}
        }
    }

function componentDidMount() {

}

componentDidMount();
{
    fetch('/api/charts')
        .then(res => res.json())
        .then(charts => this.setState({charts}, () => console.log('Charts fetched..', charts)));
}
    render() {
    return (
        <div className="Charts">
        <h2>Commodity</h2>
        </div>
    )
    }

export default Charts;