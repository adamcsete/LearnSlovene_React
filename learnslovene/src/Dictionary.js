import React from 'react'

import './styles/App.css';

class Dictionary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    
    componentDidMount() {
    fetch('http://localhost:8080/dictionary/')
    .then(res => res.json())
    .then(res => {this.setState({
            isLoaded: true,
            items: res.items
        });},
          err => this.setState  ({
            isLoaded: true,
            err
          })
        );
    }

    render() {
        const { err, isLoaded, items } = this.state;
        if (err) throw err; 
        else if (!isLoaded) { return <div key="div1">Loading...</div>; } 
        else {  
            return (
                <div key="div2" className = "App">
                    <ul key="ul1">
                        {items.map(item => (
                            <li key={item.ID}>
                            {item.SLOword} {item.HUNword}
                        </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }


}

export default Dictionary