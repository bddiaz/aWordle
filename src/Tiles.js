import React, { useState } from "react";

function Tiles(props) {
  if (props.guess == props.wordle) {
    console.log("updated");
  }

  return (
    <div className="TilesContainer">
      {props.tileValues.map((row) => {
        return <TileRow rowValues={row.value} key={row.key} id={row.key} />;
      })}
    </div>
  );
}
export default Tiles;

function TileRow(props) {
  let temp = [];
  for (let i = 0; i < 6; i++) {
    let n = props.id * 10 + i;
    temp.push(n);
  }

  return (
    <div className="TileRow">
      {props.rowValues.map((item, i) => {
        return <Tile index={i} values={props.rowValues} key={temp[i]} />;
      })}
    </div>
  );
}

function Tile(props) {
  if (props.values[props.index] == -1) {
    return <div className="Tile"> </div>;
  }
  if (props.values[props.index] == 0) {
    return <div className="Tile1"> </div>;
  }
  if (props.values[props.index] == 1) {
    return <div className="Tile2"> </div>;
  }
}
