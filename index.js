let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-tab")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render(leads){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        // listItems += "<li>"+"<a href='#' target ='_blank'>"+ myLeads[i]+"</a>" +"</li>"
        listItems += `
        <li>
            <a href='#' target ='_blank'> ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click",function()
{
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
})

deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)

})




    
   



