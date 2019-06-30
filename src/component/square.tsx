import React from 'react';
/*
class expression
export default class Square extends React.Component<any,any> {

constructor(props: any){
  super(props)
}
  render() {
    return (
      <button
      className="square"
      onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
*/

// function expression
export default function Square(props:any) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
