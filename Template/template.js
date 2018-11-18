//Get parcel data 
function getorder(){
	var pick=document.getElementById("pickuplo").value;
	var dest=document.getElementById("Destination").value;
	var wt=document.getElementById("weight").value;
	var ht=document.getElementById("height").value;
	var wd=document.getElementById("width").value;
	var nm=document.getElementById("name").value;
	

//Set parcel delivery price based on the parcel weight 0.10per kg
	var price=0.1*wt;

	
//validate the parcel order
	if(pick=="" || dest=="" || wt=="" || ht=="" || wd=="" || vl==""){
		alert("Please enter all parcel details");
		modal.style.display = "none";
	}	
//Display all parcel details
	else{
		document.getElementById("pickUp").innerHTML=(" Pick up location: "+pick+"<br> Destination location: "+dest+
		"<br> Parcel value: "+nm+"<br> Parcel weight: "+wt+"<br> Parcel height: "+ht+"<br> Parcel width: "+wd+"<br>  Delivery service price: "+price);
		
	}

//
}
//Display the parcel data in the modal
// Get the modal
var modal = document.getElementById("orderModal");

// Get the button that opens the modal
var btn = document.getElementById("orderBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    getorder();

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//use cancel to come back to parcel order

	var cacel=document.getElementById("modal-cancel");
	cacel.onclick=function(){
		modal.style.display=none;	
	}

