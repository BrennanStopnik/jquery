
// With variables
    // JQuery equivlent of document.createElement
        // Can create id or class right here  <div id="divName">Text</div>
let div = $('<div id="div1">Here is a JQuery Div!</div>');

    // JQuery equivlent of document.querySelector
let body = $('body');

    // JQuery equivlent of document.appendChild
body.append(div);


// Without variables
$('body').append($('<div id="div2">Here is another JQuery Div!</div>'))

$('#list').append($('<li> Test </li>'));

// Creating functions with eventListeners
div.on('click', function(){
    console.log("click");
})

$('#div2').on('click', ()=> console.log("div 2"));


// JQuery equivlent of .style
$("body").css({
    backgroundColor: 'blue',
    color: 'white'
})