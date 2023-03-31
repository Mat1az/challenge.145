import * as React from 'react';

const numbers = [
    {id: '0', ascii: ' 0000\n00  00\n00  00\n00  00\n 0000\t'},
    {id: '1', ascii: '1111\n  11\n  11\n  11\n111111\t'},
    {id: '2', ascii: ' 2222\n22  22\n   22\n  22\n222222\t'},
    {id: '3', ascii: ' 3333\n33  33\n   333\n33  33\n 3333\t'},
    {id: '4', ascii: '44  44\n44  44\n444444\n    44\n    44\t'},
    {id: '5', ascii: '555555\n55\n55555\n    55\n55555\t'},
    {id: '6', ascii: ' 6666\n66\n66666\n66  66\n 6666\t'},
    {id: '7', ascii: '777777\n   77\n  77\n 77\n77\t'},
    {id: '8', ascii: ' 8888\n88  88\n 8888\n88  88\n 8888\t'},
    {id: '9', ascii: ' 9999\n99  99\n 99999\n    99\n 9999\t'},
    {id: ':', ascii: '  _ \n (_)\n    \n  _ \n (_)\n\t'},
];

function toASCII(str) {
    return Array.from(str).flatMap(s => numbers.find(i => i.id === s)?.ascii);
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timeDate: []};
    }

    componentDidMount() {
        setInterval(() => this.setState({timeDate: toASCII(new Date(Date.now()).toTimeString().split(' ')[0])}), 1000);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.timeDate.map((t, index) => <pre key={index}>{t}</pre>)}
            </React.Fragment>
        );
    }
}

export default Clock;