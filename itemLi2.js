var addForm = document.getElementById('addForm');
var itemList = document.getElementById('ul-id');
var filter = document.getElementById('filter');
// form submit event 
addForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removebtn);
filter.addEventListener('keyup',filterItems)

// Add Item
function addItem(e){
    e.preventDefault();
    // console.log(1);

    // get input value
    var newItem = document.getElementById('in-id').value;

    // create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'item';
    // add node with input value;
    li.appendChild(document.createTextNode(newItem));

    // create button
    var btn = document.createElement('button');
    btn.className = 'btnr';
    // append text
    btn.appendChild(document.createTextNode('x'));
    li.appendChild(btn);
    itemList.appendChild(li);
    // console.log(li);

    var items = document.getElementsByClassName('item');

    
    items[items.length-1].id = "last-item";
    items[items.length-2].id = "item-2"; 
}
function removebtn(e){
    if(e.target.classList.contains('btnr')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            
            var items = document.getElementsByClassName('item');
            items[0].id = "item-1";
            items[items.length-1].id = "last-item";
        }   
    }
}
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })
}
