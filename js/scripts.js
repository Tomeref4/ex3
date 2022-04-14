function opacity(){
    let Num = Math.floor(Math.random() * 4) + 1;;
    switch (Num) {
        case 1:
            return 35;
            break;
        case 2:
            return 56;
            break; 
        case 3:
            return 78;
            break;  
        case 4:
            return 100;
            break; 
        default:
            break;
    }
}
let NumberOfSquares = Math.floor(Math.random() * 40) + 30;
for(let i=0;i< NumberOfSquares;i++){
    let Opacity = opacity();
    let Square = document.createElement("div");
    Square.className = "Square";
    Square.style.opacity = Opacity + "%";
    Square.style.background = "#ffffff";
    Square.onmousemove = function(){
        Square.style.background = "#ffcdd2";
    };
    Square.onmouseout = function(){
        Square.style.background = "";
    };
    Square.onclick = function(){
        Square.style.backgroundColor = "#517a8d";
    };
    
    document.getElementById("SquaresArea").appendChild(Square);
}
let Counter = 0;
document.getElementById("Plus").addEventListener('click', function(){
    ChangeOpacity();
})
function ChangeOpacity(){
        switch (Counter) {
            case 0:
                document.getElementById("Opacity78").style.opacity = 10 + "%";
                break;
            case 1:
                document.getElementById("Opacity78").style.opacity = 20 + "%";
                break;
            case 2:
                document.getElementById("Opacity78").style.opacity = 30 + "%";
                break;
            case 3:
                document.getElementById("Opacity78").style.opacity = 40 + "%";
                break;
            case 4:
                document.getElementById("Opacity78").style.opacity = 50 + "%";
                break;
            case 5:
                window.location.reload();
                break;
            default:
                break;
            }
            Counter++;
}