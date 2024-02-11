var popover=document.querySelector(".pop-over")
var popboxform=document.querySelector(".pop-boxform")
var addpopbtn=document.getElementById("Add-pop-btn")
addpopbtn.addEventListener("click",function(){
    popover.style.display="block"
    popboxform.style.display="block"
})
var exitpop=document.getElementById("Exit-pop")
exitpop.addEventListener("click",function(event){
event.preventDefault()
popover.style.display="none"
popboxform.style.display="none"
})
var section=document.querySelector(".section")
var addbtn=document.getElementById("Add-work")
var dateinput=document.getElementById("date-input")
var subnameinput=document.getElementById("Subject-Name-input")
var workinput=document.getElementById("Works-input")
addbtn.addEventListener("click",function(event){
   event.preventDefault()    
   var div=document.createElement("div")
   div.setAttribute("class","notes_section")
   div.innerHTML=`<h4>${dateinput.value}</h4>
   <h2>${subnameinput.value}</h2>
   <p> ${workinput.value}</p>
   <button onclick="deletenote(event)">Delete</button>`
   section.append(div)
   popover.style.display="none"
   popboxform.style.display="none"
})

function deletenote(event) {
    
            event.target.parentElement.remove();
}
