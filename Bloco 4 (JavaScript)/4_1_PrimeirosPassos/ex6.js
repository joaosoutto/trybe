let chessPiece = "ROOK";


 if (chessPiece.toLowerCase() == "knight") {
    console.log("moves to any of the closest squares that are not on the same rank, file, or diagonal.");
} 
else if (chessPiece.toLowerCase() == "pawn") {
    console.log("can move forward to the unoccupied square immediately in front of it on the same file, or on its first move it can advance two squares along the same file, provided both squares are unoccupied (black dots in the diagram); or the pawn can capture an opponent's piece on a square diagonally in front of it on an adjacent file, by moving to that square.");
}
else if (chessPiece.toLowerCase() == "bishop") {
    console.log("can move any number of squares diagonally, but cannot leap over other pieces.");
} 
else if (chessPiece.toLowerCase() == "rook") {
    console.log("can move any number of squares along a rank or file, but cannot leap over other pieces.");
} 
else if (chessPiece.toLowerCase() == "queen") {
    console.log("combines the power of a rook and bishop and can move any number of squares along a rank, file, or diagonal.");
} 
else if (chessPiece.toLowerCase() == "king") {
    console.log(" moves one square in any direction.");
} else {
    console.log("Error: invalid chess piece!");
}