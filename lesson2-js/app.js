/*//Theory

//arrays 

//const array = [1, 2, 3, 5, 20];
//const arrayStrings = ['a', 'b',  ];
//const array = new Array(1, 2, 3,)

//console.log(array.length)// the length of the array Довжина масиву
//console.log(array[0])// Пошук конкретного елементу масиву , починаючи з нуля 
//console.log([array.length-1]) //Для того щоб отримати останній елемент масиву [-1 тому що рахунок починається з нуля]
//array[0] = 'Privet'; //зміна нульового елементу 
*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

//console.log(inputElement.value)
const notes = ['записати блок про масиви', 'вивчити теорію обєктів']

//console.log(notes)

function render(){

  /*for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
  }
*/
for( let note of notes) {
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
}
 //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
 //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))
}

render()

createBtn.onclick = function(){
    if(inputElement.value.length === 0){
        return
    }
   // listElement.innerHTML = 
        listElement.insertAdjacentHTML('beforeend', 
       getNoteTemplate(inputElement.value)
        )
        inputElement.value = ''
}

function getNoteTemplate(title) {
  return`
  <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>
        `
}

/**
 * Object Theory
 */
