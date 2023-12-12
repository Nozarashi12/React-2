class ReactContainer1 extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello! Welcome to Kalvium</h2>
                <div>This is babel</div>
            </div>
        );
    }
}

const container3 = document.getElementById("react-container");
ReactDOM.render(<ReactContainer1 />, container3);