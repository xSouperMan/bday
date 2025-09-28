const code = "xlccpbfd"
var versuche = 3;

function submit(str) {
    if(versuche <= 0) {return;}
    if(str != null) {
        if(str.toLowerCase() == code) {
            window.location.href = "result.html"
        } else {
                if(versuche > 0 ) {versuche--;}
            if(versuche == 0) {
                document.getElementById("losernachricht").style.visibility = "visible";
            } 
            document.getElementById("versucheleft").innerHTML = versuche;
        }
    }
}