function makeGrid() {

    const canvas = document.getElementById("pixelCanvas");
    const tableBody = document.createElement('TBODY');
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;

    //To reset grid color to empty 
    canvas.innerHTML = "";

    for (let i=0; i<height; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (let j=0; j<width; j++) {
            let td = document.createElement('TD');
            td.addEventListener("click", cellColor);
            tr.appendChild(td)
        }
    }
    pixelCanvas.appendChild(tableBody);
}

const findForm = document.querySelector("form");
findForm.addEventListener("submit", makeGrid);


function cellColor() {
    
    const colorPicked = document.getElementById("colorPicker").value;
    this.style.backgroundColor = colorPicked;
}
