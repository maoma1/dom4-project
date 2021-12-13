/*Create an HTML page with a button and a dropdown list with three items in it, 
then write a JavaScript function that displays the number of items and displays the item in the list when you 
click that button.

*/

function displayItems() {
    const items = document.getElementById('grocery-list')
    const noOfItems = items.length
    alert(noOfItems)
    
    for (let i=0; i<items.length; i++)  {
        console.log(items.options[i].text)
    }
       
        
    }

  



