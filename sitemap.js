
function buildMap(x) {
    var createList = document.createElement("ul")
    var body = document.getElementById(x);
    body.appendChild(createList);

    var list1 = document.createElement("li");
    createList.appendChild(list1);
    var a1 = document.createElement("a")
    a1.textContent = "Home";
    a1.href = "index.html";
    list1.appendChild(a1);

    var list2 = document.createElement("li");
    createList.appendChild(list2);
    var a2 = document.createElement("a")
    a2.textContent = "Biography"
    a2.href = "bio.html";
    list2.appendChild(a2);

    var list3 = document.createElement("li");
    createList.appendChild(list3);
    list3.textContent = "Class Projects";

    var createlist2 = document.createElement("ul");
    list3.appendChild(createlist2);

    var list4 = document.createElement("li");
    createlist2.appendChild(list4);
    var a3 = document.createElement("a")
    a3.textContent = "Breakout";
    a3.href = "breakout.html";
    list4.appendChild(a3);
    var list5 = document.createElement("li");
    createlist2.appendChild(list5);
    var a4 = document.createElement("a")
    a4.textContent = "Calculator";
    a4.href = "calculator.html";
    list5.appendChild(a4);

    var list6 = document.createElement("li");
    createlist2.appendChild(list6);
    var a5 = document.createElement("a")
    a5.textContent = "Chalkboard";
    a5.href = "chalkboard.html";
    list6.appendChild(a5);
    var list7 = document.createElement("li");
    createlist2.appendChild(list7);
    var a6 = document.createElement("a")
    a6.textContent = "Fancy Multiplication";
    a6.href = "fancymultiplication.html";
    list7.appendChild(a6);
    var list8 = document.createElement("li");
    createlist2.appendChild(list8);
    var a7 = document.createElement("a")
    a7.textContent = "Test";
    a7.href = "htmltest.html";
    list8.appendChild(a7);
    var list9 = document.createElement("li");
    createlist2.appendChild(list9);
    var a8 = document.createElement("a")
    a8.textContent = "Java Event";
    a8.href = "javaEvent.html";
    list9.appendChild(a8);
    var list10 = document.createElement("li");
    createlist2.appendChild(list10);
    var a9 = document.createElement("a")
    a9.textContent = "Multiplication";
    a9.href = "multiplication.html";
    list10.appendChild(a9);
    var list11 = document.createElement("li");
    createlist2.appendChild(list11);
    var a10 = document.createElement("a")
    a10.textContent = "Pop-Up";
    a10.href = "popup.html";
    list11.appendChild(a10);
    var list12 = document.createElement("li");
    createlist2.appendChild(list12);
    var a11 = document.createElement("a")
    a11.textContent = "Tic-Tac-Toe";
    a11.href = "tic-tac-toe.html";
    list12.appendChild(a11);
    var list13 = document.createElement("li");
    createlist2.appendChild(list13);
    var a12 = document.createElement("a")
    a12.textContent = "To Do List";
    a12.href = "todolist.html";
    list13.appendChild(a12);
}
