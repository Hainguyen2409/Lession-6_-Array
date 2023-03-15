function changeValue() {
    let b = document.getElementById("carogame");
    let board = [];
    let data = "";

    for (let i = 0; i < 5 ; i++) {
        board[i] = [0,0,0,0,0];
    }

    let positionX = prompt("Enter x: ");
    let positionY = prompt("Enter y: ");
    board[positionX][positionY] = "x"
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j <5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    b.innerHTML = "<hr/>" + data;
}