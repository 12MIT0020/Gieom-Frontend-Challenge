/*
*loadDoc---do ajax request to server
*/
function loadDoc() 
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var obj = JSON.parse(this.responseText);
     buildContentDynamically(obj);
    }
  };
  xhttp.open("GET", "http://starlord.hackerearth.com/kickstarter", true);
  xhttp.send();
} 

/*
*buildContentDynamically---bulid Comtent Dynamically
*obj--response obj
*/
function buildContentDynamically(obj)
{
	console.log(obj);
	for(var prop in obj){
		//console.log(obj[prop]["amt.pledged"]);
		var div1 = document.createElement("div");
		div1.setAttribute("class","w3-container");
		document.body.appendChild(div1);

		var div2 = document.createElement("div");
		div2.setAttribute("class","w3-card-4");
		div2.style.width = "80%";
		div1.appendChild(div2);

		var div3 = document.createElement("div");
		div3.setAttribute("class","w3-container");
		div2.appendChild(div3);

		var div4 = document.createElement("div");
		div4.setAttribute("class","content-div");
		div3.appendChild(div4);


		var para1 = document.createElement("p");
		para1.setAttribute("class","heading");
		div4.appendChild(para1);

		var para1 = document.createElement("b");
		para1.setAttribute("class","heading");
		var text = document.createTextNode(obj[prop]["title"]);
		para1.appendChild(text);
		div4.appendChild(para1);

		var para2 = document.createElement("p");
		var textforPleadge = document.createTextNode("Pleadge-"+obj[prop]["amt.pledged"]);
		para2.appendChild(textforPleadge);
		div4.appendChild(para2);

		var para3 = document.createElement("p");
		var textFotBackers = document.createTextNode("Backers-"+obj[prop]["num.backers"]);
		para3.appendChild(textFotBackers);
		div4.appendChild(para3);

		var para4 = document.createElement("p");
		var textFornumOfDays = document.createTextNode("No of Days to Go-");
		para4.appendChild(textFornumOfDays);
		div4.appendChild(para4);

		var anchorTag = document.createElement("a");
		var textForAnchor = document.createTextNode(">");
		anchorTag.setAttribute("class","arrow");
		anchorTag.setAttribute("href","https://www.kickstarter.com/"+obj[prop]["url"]);
		anchorTag.appendChild(textForAnchor);
		div4.appendChild(anchorTag);
	}

}




//var currentDiv = document.getElementById("nav"); 
 //document.body.insertAfter(ele, currentDiv); 