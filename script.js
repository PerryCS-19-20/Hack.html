var qty = 0; 

// use document.getElementById() to set the value of
// the input box here


function modify_qty(val) {
    var new_qty = qty + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    return new_qty;
}

