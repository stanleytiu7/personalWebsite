import React from 'react'

/**
 * COMPONENT
 */

class Sorting extends React.Component {

array = [1, 2, 3, 4, 20]

    render () {
        return (
            <div>
                <ArrayThing array={this.array} />
            </div>
        )
    }
}


function ArrayThing(props) {

    // const browserHeight = +window.innerHeight
    // const browserWidth = +window.innerWidth
    const divUnits = Math.min(...props.array) / Math.max(...props.array)
    return (
    <div>
        {props.array.map(item =>
        (<Item
          style={{
            maxWidth: `${Math.floor(divUnits * item * 100)}%`,
            backgroundColor: 'Gray'
          }}
            key={item}
            value={item}
            divisions={divUnits}
        />))}
    </div>
    )
}

function Item(props) {
console.log(props.style);

  return (
  <div style={{ paddingTop:'1%', paddingBottom:'1%' }}>
    <div style={props.style}>{props.value}</div>
  </div>)
}

export default Sorting
