function comamnd() {
    var command = document.getElementById("command").value;
    var partsOfC = command.split(" ");
    var output = document.getElementById("output").innerHTML;

    if (partsOfC[0] != "cat"){
        output = "command not found: " partsOfC[0]
    }
    else if (partsOfC[1] != "nicholas.txt") {
        output = "file not found: " + partsOfC[1]
    }
}
