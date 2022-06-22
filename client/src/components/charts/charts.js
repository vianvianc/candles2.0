
import './charts.css';

class Charts extends Component() {
    constructor() {
       super();
       this.state = {
       charts: []}
        }
    }
    componentDidMount() {
    fetch('/api/charts')
        .then(res => res.json())
        .then(charts => this.setState({charts}));
}
    render() {


        <div className="Charts">
        <h2>Commodity</h2>
        </div>
    };

export default Charts;