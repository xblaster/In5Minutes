if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too  
    script = document.createElement( 'script' );  
   script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';   
    script.onload=releasetheKraken;  
    document.body.appendChild(script);  
}   
else {  
    releasetheKraken();  
}  
  
function releasetheKraken() {  
    // The Kraken has been released, master!    
    alert("hello world");
    
    $("a, button, input[type='submit']")
}  


