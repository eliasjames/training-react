function Square( props ) {
  return (
    <button className="square" onClick={ ()=>{ props.onClick(); }}>
      { props.value }
    </button>
  );
}

class Board extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      squares: Array( 9 ).fill( null ),
      xIsNext: true,
    };
  }

  handleClick( i ) {
    const squares = this.state.squares.slice();
    squares[ i ] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare( i ) {
    return (
      <Square 
        key={ i } 
        value={ this.state.squares[ i ] } 
        onClick={ ()=>{ this.handleClick( i ); }} 
      />
    );
  }

  render() {
    const status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' );
    let boardLayout = [], 
			eachRowLayout = [],
			squareCounter = 0;

    for ( let i=0; i<3; i++ ) {
			for ( let i=0; i<3; i++ ) {
				eachRowLayout.push( this.renderSquare( squareCounter ));
				squareCounter++;
			}
      boardLayout.push( <div key={i} className="board-row">{ eachRowLayout }</div> );
			eachRowLayout = [];
    }

    return (
      <div>
        <div className="status">{status}</div>
				{ boardLayout }
      </div>
    );
  }
}

// ========================================
function renderWhenReady(){
	ReactDOM.render(
		<Board/>,
		document.getElementById('root')
	);
}

if( document.readyState === 'complete' || document.readyState === 'interactive' ) {
	renderWhenReady();
} else {
	document.addEventListener( 'DOMContentLoaded', ()=>{
		renderWhenReady();
	});
}
