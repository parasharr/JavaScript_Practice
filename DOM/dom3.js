function addLang(langName){
    const item = document.createElement('li');
    item.innerHTML = `${langName}`;
    document.querySelector('.lang').appendChild(item);
}
addLang("Python")
addLang("TypeScript")


//optimized approch
function addOptLang(langName){
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(langName))
    document.querySelector('.lang').appendChild(item);
}
addOptLang("GoLang")
addOptLang("C++")

//Edit
const secondLang = document.querySelector("li:nth-child(2)");
// secondLang.innerHTML = "Mojo";
const newli = document.createElement('li');
newli.textContent = "Mojo"
secondLang.replaceWith(newli)
//another edit method
const firstLanguage = document.querySelector('li:first-child')
firstLanguage.outerHTML = '<li>TypeScript</li>'

//Remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()
