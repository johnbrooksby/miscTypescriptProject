

const Square = (props:any) => {
  const handleClick = () => {
      if (!props.squareValue && !props.gameOver) {
        if (props.player) {
          props.squares.splice(props.index, 1, "X");
          props.setSquares(props.squares);
          props.setPlayer(!props.player);
          props.calculateWinner(props.squares)
        } else if (!props.player) {
          props.squares.splice(props.index, 1, "O");
          props.setSquares(props.squares);
          props.setPlayer(!props.player);
          props.calculateWinner(props.squares)
        }
      } else {
        return;
      }
  };

  // No logo for "O"
  return (
    <div className={props.color && props.lightMode==="light" ? `${props.color} lightMode` : props.color ? props.color : "blue"} onClick={handleClick}>
      {props.squareValue}
    </div>
  );
};

export default Square;
