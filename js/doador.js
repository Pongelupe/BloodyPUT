var canDonate=["","","",""];

function userInput () {
	var userName = document.getElementById('name').value;
	var userEmail = document.getElementById('email').value;
	var userPhone = document.getElementById('phone').value;
	var userLocation = document.getElementById('location').value;
	var userBlood = document.getElementById('bloody').value;
	var userDonator=toDonate(canDonate);
	
	// Array's declaration and values assignement
	var userData = {}; 
	userData.id = "";
	userData.userName = userName;
	userData.userEmail = userEmail;
	userData.userPhone = userPhone;
	userData.userLocation = userLocation;
	userData.userBlood = userBlood;
	userData.canDonate = userDonator;
	
	var sendData = JSON.stringify(userData);
	$.ajax({
	    url:"https://api.myjson.com/bins",
	    type:"POST",
	    data: sendData,
	    contentType:"application/json; charset=utf-8",
	    dataType:"json",
	    success: function(data, textStatus, jqXHR){
	    	var userUri = data.uri;
	    	userId = breakUri(userUri);
	    	pushId(userData, userId);
	    	swal({
			  html: true,
			  title: "Senha de Acesso: " + userId,
			  text: "Guarde essa senha para entrar na sua sessão",
			  type: "success",
			  confirmButtonText: "Continuar",
			  closeOnConfirm: false,
			},    	  
			  function() {
			  	location.href = "../index.php"
			 }
			)
	    }
	});   
}

// Function to break the URI and get the ID
function breakUri(userUri) {
	var splittedURL = userUri.split(/\/+/g);
	var userId = splittedURL[splittedURL.length-1];
	return userId
}

//Function to update the object with the user's ID
function pushId(userData, userId) {
	userData.id = userId;
	sendData = JSON.stringify(userData);
	$.ajax({
    url:"https://api.myjson.com/bins/" + userId,
    type:"PUT",
    data: sendData,
    contentType:"application/json; charset=utf-8",
    dataType:"json",
});   
}

function checkbox_config(x,y){
	canDonate[y]=x;
}

function toDonate(x){
	var result;
	for (var i = 0; i < x.length; i++) {
		if (x[i]=="nao_apto"){
			result="nao_apto";
		}
	}
	if (result=="nao_apto") {
		return result;
	}
	else{
		return result;
	}
}