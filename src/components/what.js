import React from 'react';
import '../assets/what.css';

export default class What extends React.Component {
  render() {
    return (
      <div className="what">
        <div className="boxy-title">what</div>
        <p className="what-text">Benedictus de Spinoza (1632-1677), 
          authored of one of the most ambitious and interesting
          philosophical texts of the Early Modern Period.
          <br/><br/>
          This website is a tool to help those who dare venture into his magnum opus,
          <span>"Ethica, ordine geometrico demonstrata"</span>.
          <br/><br/>
          Users can query argumentative points in the book 
          and dynamically generate a graph that illustrates the logical dependencies
          to and from the selected location in the book.
          <br/><br/>
          For more information on Spinoza and his work, see
          <a className="sep-link" href="https://plato.stanford.edu/entries/spinoza/"> Stanford Encyclopedia of Philosophy.</a></p>
      </div>
    )
  }
}