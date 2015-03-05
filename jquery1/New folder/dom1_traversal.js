 // Get a handle of the div element.
 var elem = document.getElementById("idDiv");

 // Print information about all child nodes.
 function printChildrenInfo(obj, description) {
     elem.innerHTML += "<br>Number of children for " + description + ": " + obj.length;
     for (var x in obj) {
         if (obj[x].nodeType == undefined) { continue;}
         elem.innerHTML += "<br>" + obj[x];
         elem.innerHTML += ", nodeName: " + obj[x].nodeName;
         elem.innerHTML += ", nodeType: " + obj[x].nodeType;
     }
     elem.innerHTML += "<br>";
 }

 // Get a handle of the root node.
 rootNode = document;
 printChildrenInfo(rootNode.childNodes, "Root");

 // Get a handle of the html node.
 htmlNode = rootNode.childNodes[0];
 printChildrenInfo(htmlNode.childNodes, "HTML");

 // Get a handle of the head node.
 headNode = htmlNode.childNodes[0];
 printChildrenInfo(headNode.childNodes, "Head");

 // Get a handle of the body node.
 bodyNode = htmlNode.childNodes[1];
 printChildrenInfo(bodyNode.childNodes, "Body");

 // Get a handle of the parent of the body node (which is htmlNode).
 htmlNode = bodyNode.parentNode;
 printChildrenInfo(htmlNode.childNodes, "HTML (using bodyNode.parentNode)");