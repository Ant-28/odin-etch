function getWindowWidth(box){
    
    return box.offsetWidth;
}
// width is the block width
function createRow(block=16, cols = block){
    myBox = document.querySelector('div.centerbox');

    newRow = document.createElement("div");
    newRow.style.width = `${getWindowWidth(myBox)}px`;
 
    // get width of centerbox and divide it by number of boxes
    
    newRow.style.height = `${(getWindowWidth(myBox))/ block}px`;
    newRow.style.display = "flex";
    newRow.style.flex_direction = "row";
    newRow.classList.add("blockRow");
    newRow.padding = `0px`;
    newRow.style.border = "none";
    // newRow.style.flex = `1`;

    createColumns(myBox, newRow, cols);
    myBox.appendChild(newRow);

}

function createColumns(myBox, newRow, cols){
    for(let i = 0; i < cols; i++){
        console.log('col');
        newItem = document.createElement('div');
        newItem.classList.add('blockItem');
        newItem.style.height = `${(getWindowWidth(myBox) - 4)/cols}px`;
        newItem.style.width  = `${(getWindowWidth(myBox) - 4)/cols}px`
        newRow.appendChild(newItem);
    }
}


// cursed rows
var n = 100;
for(let j = 0; j < n; j++){
    console.log('row');
    createRow(n);    
}

var elements = document.getElementsByClassName('blockItem');

// https://stackoverflow.com/questions/76139442/how-to-make-a-hover-effect-in-javascript
var myFunction = function() {
    console.log(this)
        this.style.backgroundColor = 'red';
    };
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', myFunction, false);
    }