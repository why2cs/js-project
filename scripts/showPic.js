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


function prepareGallery(){
    var support=document.getElementById && document.getElementsByTagName
    if(!support) return false
    
    var gallery=document.getElementById("gallery")
    if(gallery==null) return false

    var links=gallery.getElementsByTagName("a")
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            showPic(this)
            return false
        }
    }
}

addLoadEvent(prepareGallery)


function addLoadEvent(func){
    var oldEvent=window.onload
    if(typeof oldEvent != "function"){
        window.onload=func
    }else{
        window.onload=function(){
            oldEvent()
            func()
        }
    }
}




//window.onload=countNodes()