const listCafe = document.querySelector('#list-cafe')


//create element for list of cafe
function renderListCafe(doc){

    let li = document.createElement('li');
    let title = document.createElement('h2');
    let ingredient = document.createElement('span');

    li.setAttribute('id' , doc.id);
    title.textContent = doc.data().title;
    ingredient.textContent = doc.data().ingredient;

    li.appendChild(title);
    li.appendChild(ingredient);
    listCafe.appendChild(li);
}

db.collection('cafes').get().then(snapshot=>{

    snapshot.docs.forEach(doc=>{
        renderListCafe(doc)
    })
})