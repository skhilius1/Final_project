// fetch("https://kketelauri-001-site1.gtempurl.com/api/user/login", {
//     method: "POST",                                                      
//     body: JSON.stringify({
//       email: "alik@gmail.com",
//       password: "123",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
  
  
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch(error => window.alert("incorrect user or password"))


function auth(){
	var user = document.getElementById("usName").value;
	var pass = document.getElementById("psWord").value;
	//console.log(user, pass);
	fetch("https://kketelauri-001-site1.gtempurl.com/api/user/login", {
    method: "POST",                                                      
    body: JSON.stringify({
      //email: "keti@gmail.com",
	  email: user,
      //password: "123",
	  password: pass,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  
  
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((json) => window.open("index.html","_self")) 
     .catch(error => window.alert("incorrect user or password"))
    
}







