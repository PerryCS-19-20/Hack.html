function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    
    if (new_qty < 0) {
        new_qty = 0;
    }
   if (new_qty == 5) {
        new_qty = 0; 
        
        var str = "Free Web Building Tutorials!";
    var result = str.link("https://www.w3schools.com");
       document.getElementById("demo").innerHTML = result;
}
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
