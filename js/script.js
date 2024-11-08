// 5 st H1 med gradvis färgändring

for (let i = 0; i < 6; i++) {

    const newH1 = document.createElement('h1');
    newH1.classList.add('h1');
    document.body.append(newH1);
    const bgColor1 = 130 + i * 15;

    newH1.innerText = `Rad ${i}`;

    newH1.style.backgroundColor = `hsl(${bgColor1}, 80%, 80%)`;
    newH1.style.color = '#6666ff';
    newH1.style.fontSize = `${i * 7}px`;
    newH1.style.marginBottom = `${i * 6}px`;

}

//container för 3 kolumnerna
const container1 = document.createElement('div');
container1.classList.add('container1');
document.body.append(container1);


for (c=0; c<3; c++)
{
// koden för de 3 kolumnerna inuti containern
const column = document.createElement('div');
container1.append(column);
column.classList.add('column');

if(c===0){
for (i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.classList.add('div1');
    column.append(div);
    const p1 = document.createElement('p');
    div.append(p1);
    p1.innerText = i;
    p1.classList.add('p1');

    if (i % 2 == 0 && i!=4) {
        div.style.backgroundColor = 'black';
        p1.style.color = 'white';
    }
    else if( i!=4)
    {
        div.style.backgroundColor = 'white';
        p1.style.color = 'black';
    }
}
}


// array för sista kolumnen:

const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']

if(c===1){
for (i = 9; i>-1; i--) {
    const div = document.createElement('div');
    div.classList.add('div2');
    column.append(div);
    const p1 = document.createElement('p');
    div.append(p1);
    p1.innerText = i;
    p1.classList.add('p1');

    if (i % 2 == 0 && i!=8) {
        div.style.backgroundColor = 'black';
        p1.style.color = 'white';
    }
    else if (i!=8) {
        div.style.backgroundColor = 'white';
        p1.style.color = 'black';
    }
}
}

if(c===2){
for (const number of numbers) {
    const div = document.createElement('div');
    div.classList.add('div3');
    column.append(div);
    const p1 = document.createElement('p');
    div.append(p1);
    p1.innerText = number;
    p1.classList.add('p1');

    if (numbers.indexOf(number) % 2 !== 1 && numbers.indexOf(number)!=5) {
        div.style.backgroundColor = 'black';
        p1.style.color = 'white';
    }
    else if (numbers.indexOf(number)!=5) {
        div.style.backgroundColor = 'white';
        p1.style.color = 'black';
    }
}
}
}