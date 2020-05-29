let inputData = document.querySelector('input[type="text"]');
    inputData.style.backgroundColor = '#10ff00';
    inputData.style.color = '#d800ff';
    inputData.style.width = '50%';
    inputData.style.padding = '0.7%';
    inputData.style.textAlign = 'center';
    inputData.style.fontSize = '20px';
let ulSpisok = document.getElementById('list');
    ulSpisok.style.fontSize = '17px';
let spans = document.getElementsByTagName('span');
let saveBtn = document.getElementById('save');
    saveBtn.style.backgroundColor = 'rgb(206, 189, 151)';
    saveBtn.style.borderStyle = 'groove';
    saveBtn.style.borderWidth = '7px';
let clearBtn = document.getElementById('clear');
    clearBtn.style.backgroundColor = 'rgb(206, 189, 151)';
    clearBtn.style.borderStyle = 'groove';
    clearBtn.style.borderWidth = '7px';
let author = document.getElementById('author');
author.style.backgroundColor = 'rgb(206, 189, 151)';
author.style.borderStyle = 'groove';
author.style.borderWidth = '7px';

class Laptop{
    constructor(){
        this.название = 'Asus TUF Gaming FX505DY-BQ009',
        this.модельПроцесора = 'AMD Ryzen 5 3550H',
        this.серийныйНомер = '24343535',
        this.годИзготовления = '2020',
        this.размерОЗУ = '8',
        this.размерПЗУ = '500 SSD',
        this.наличиеДисковода = 'да',
        this.масса = '1.5 кг'
    }
};

let laptop = new Laptop();

console.log(laptop.размерОЗУ);

console.log(laptop.размерПЗУ);

class Ultrabook {
    constructor() {
        this.название = 'Asus Zenbook UM433DA-A5003',
        this.модельПроцесора = 'AMD Ryzen 5 3500U',
        this.серийныйНомер = '68543535',
        this.годИзготовления = '2019',
        this.размерОЗУ = '4',
        this.размерПЗУ = '256 Гб SSD',
        this.наличиеДисковода = 'нет',
        this.масса = '1 кг'
        Ultrabook.count += 8;
    }
};

Ultrabook.count = 0;

let ultrabook = new Ultrabook();

console.log(ultrabook.годИзготовления);

console.log(Ultrabook.count);

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('todoApplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
        
    }
};

/*addEventListener- получение типа события и вызов функции*/ 

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        let newLi = document.createElement('li');
        newLi.addEventListener('dblclick', function dblclickTodo() {
            newLi.style.textDecoration = 'none';
        });
        newLi.addEventListener('click', function clickTodo () {
            newLi.style.textDecoration = 'line-through';
        });
        
        let newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete';
        let now = new Date().toLocaleString();
        let newTodo = this.value + "" + " "; /*получение value из input*/
        this.value = ''; /*Очистка поля ввода*/
            if (newTodo === "" + " ") {
                newSpan.innerHTML = "";
                newLi = "";
            }
        ulSpisok.appendChild(newLi).append(newSpan, newTodo, now);   
        deleteTodo();     
    }
});

author.addEventListener('click', function () {
    surname = " Pupskin"
    userName = "Ivan "
    patronymic = " Petrovich"
    alert("CREATOR:" + userName + surname + patronymic)
});//кнопка обомне

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});//сохранениее всего

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});//удаление всего

loadTodo();

