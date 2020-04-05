var chessPiece = "RoOk";

if (chessPiece.toLowerCase() === "pawn"){
    console.log("The pawn moves forward exactly one square");
}
else if (chessPiece.toLowerCase() === "knight"){
    console.log("The knight moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner.");
}
else if (chessPiece.toLowerCase() === "rook"){
    console.log("The rook moves any number of vacant squares forwards, backwards, left, or right in a straight line. ");
}
else if (chessPiece.toLowerCase() === "bishop"){
    console.log("The bishop moves any number of vacant squares diagonally in a straight line.");
}
else if (chessPiece.toLowerCase() === "queen"){
    console.log("The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.");
}
else if (chessPiece.toLowerCase() === "king"){
    console.log("The king moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally;");
}
else {
    console.log("Invalid chess piece!!")
}