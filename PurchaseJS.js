let txtname = document.getElementById("name");
let txtmail = document.getElementById("email");
let txttelephone = document.getElementById("telephone");
let txtmobilephone = document.getElementById("mobilephone");
let txtaddress = document.getElementById("address");
let textemail = document.getElementById("email");



let btnpod = document.getElementById("placeorder");

let txtfinal = document.getElementById("final")
let btnfav = document.getElementById("fav");
let btncheckfav = document.getElementById("checkfav");

btnpod.addEventListener("click",placeorder);


var t=0;
var rn=0;
function addtores(){
    let guests=parseInt(txtguest.value);
    let days=parseInt(txtdays.value);

    var a = DayPass;
    var b = StudentPass;
    var c = ForeignPass;

    function addtores(){

        if(document.getElementById('ad').checked){
            var x = "Adult 3 hours and Children 3 hours";
            var guest = 0;
        }else if(document.getElementById('ac').checked){
            var x = "Adult 1/2 day and Children 1/2 day";
            var guest = 250;
        }else if(document.getElementById('ab').checked){
            var x = "Adult Full Day and Children Full Day";
            var guest = 500;
        }else if(document.getElementById('aa').checked){
            var x = "2 days for both Adults and Children";
            var guest = 1000;
        }

    if(document.getElementById('ro').checked){
        var y = "Adults";
        var pass = 1000;
    }else if(document.getElementById('bb').checked){
        var y = "Local Children";
        var pass = 500;
    }else if(document.getElementById('hb').checked){
        var y = "Student pass per Child";
        var pass = 250;
    }else if(document.getElementById('fb').checked){
        var y = "Student Pass per Adult";
        var pass = 500;
    } 
    else if(document.getElementById("cc").checked){
        var y = "Foreign Pass per Adult";
        var pass = 5000
    }
    else if(document.getElementById("nn").checked){
        var y = "Foreign Pass per Child"
        var pass = 2500;
    }
    var placeorder=(pass+guest);
    
    t=t+placeorder;
    rn+=1;
    txtres.innerHTML+=x+"/"+y+"\n"+"Ticket cost                       LKR " + guest +" * "+ pass + "*" + days + "\n" + "Total Charge for room"+rn+"               LKR "+total+"\n"+"\n";
    txtrescost.innerHTML="          LKR "+t;
}

function placeorder(){
    let n=txtname.value;
    alert("Thank you ! \n"+"Your Order is being placed");
    txtfinal.innerText=txtres.value;
}
}