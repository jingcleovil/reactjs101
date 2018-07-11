import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './common/components/Header';
import Item from './common/components/Item';
// import Banner from './common/components/Banner';
class App extends Component {

  state = {
    items: [
      {
        product: 'A',
        id: 1,
        photo: 'https://ucarecdn.com/b067b087-f830-47d1-aa58-307003539ee4/'
      },
      {
        product: 'B',
        id: 2
      },
      {
        product: 'C',
        id: 3
      },
      {
        product: 'C',
        id: 4
      },
      {
        product: 'D',
        id: 5
      },
      {
        product: 'E',
        id: 4
      }
    ]
  }

  render() {
    return (

       <div>
        <Header title="Album"/>
        <main role="main">
          {/*<Banner/>*/}
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {
                  this.state.items.map(a => {
                    return (
                      <Item 
                        photo={a.photo}
                        title={a.product}
                        key={`item1-${a.id}`}/>
                    )
                  })
                }
              
              </div>
            </div>
          </div>
        </main>
        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="">Back to top</a>
            </p>
            <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
