import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "react-sidebar";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.menuButtonClick = this.menuButtonClick.bind(this);
        this.close = this.close.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    menuButtonClick(ev) {
        ev.preventDefault();
        this.onSetSidebarOpen(true);
    }

    close(ev) {
        ev.preventDefault();
        this.onSetSidebarOpen(false);
    }

    render() {

        let styles = {
            contentHeaderMenuLink: {
                textDecoration: 'none',
                color: 'white',
                padding: 8,
            },

            content: {
                padding: '16px',
                height: '100%',
                backgroundColor: 'white',
            }};

                const sidebarContent =   <div style={styles.content}><b>bitch</b><a onClick={this.close} href="#">=</a>
                </div>;
         styles = {
            sidebar: {
                width: 256,
                height: '100%',
            },
            sidebarLink: {
                display: 'block',
                padding: '16px 0px',
                color: '#1a7500',
                textDecoration: 'none',
            },
            divider: {
                margin: '8px 0',
                height: 1,
                backgroundColor: '#752a15',
            },
            content: {
                padding: '16px',
                height: '100%',
                backgroundColor: 'white',
            },
        };

        return (
            <div className="App">

                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         //onSetOpen={this.onSetSidebarOpen}
                         pullRight={true}
                         styles= {styles}>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <a onClick={this.menuButtonClick} href="#" style={styles.contentHeaderMenuLink}>=</a>
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </Sidebar>

        </div>

        );
    };

 /* render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
 /!*       <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*!/
      </div>
    );
  }*/
}

export default App;
