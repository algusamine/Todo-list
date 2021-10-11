document.querySelector('form').addEventListener('submit', e =>{
    e.preventDefault();
    let input = document.querySelector('.main-input').value;
    if(input === ''){
    } else {
    let inputContent = document.createTextNode(input);
    let li = document.createElement('li');
    li.className = 'li'

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.innerHTML = '<i class="far fa-trash-alt"></i>';

    let checkBox = document.createElement('button');
    checkBox.className = 'check-box'
    checkBox.innerHTML = '<i class="fas fa-check-square"></i>';

    let div = document.createElement('div');
    div.className = 'todo-div';
  
    checkBox.addEventListener('click', () =>{
        checkBox.classList.toggle('check-box-toggle');
        li.classList.toggle('li-line-through');
        remove.classList.toggle('remove-toggle');
    })
  
    div.append(checkBox, remove)
 
    li.append(inputContent, div);
    document.querySelector('ul').append(li); 
  
    document.querySelector('.main-input').value = '';

    remove.addEventListener('click', e => {
        let removeElement = [e.target, checkBox, li]
        removeElement.map(x => x.remove())
    })

    document.querySelector('#clearAll').addEventListener('click', ()=> {
      let removeAll = [checkBox, li]
      removeAll.map(x => x.remove())
    })
  }

})

