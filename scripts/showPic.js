function showPic(whichPic){
    var source=whichPic.getAttribute("href")
    var placeholder=document.getElementById("placeholder")
    placeholder.setAttribute("src",source)

    var description=document.getElementById("description")
    var text=whichPic.getAttribute("title")
    description.firstChild.nodeValue=text
}

function countNodes(){
    var body_ele=document.getElementsByTagName("body")[0]
    alert(body_ele.nodeType)
}

//window.onload=countNodes()