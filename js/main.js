let namebook = document.querySelector('.namebook');
let img = document.querySelector('.imgs');
let rate = document.querySelector('.rate');
let addbook = document.querySelector('.addbook');
let closes = document.querySelector('.closes');
let listbook = document.querySelector('#list');
let row = document.createElement('tr');
let jj = document.getElementsByClassName('alert');
let dd = document.getElementsByClassName('message');
let show = document.querySelector('.show');

let card = document.querySelector('#card');

let deleteBook = document.getElementsByClassName('delete');

// let book = listbook.innerHTML +=`<div class="alert alert-info"><tr>
//         <td>${$('input').val()} </td>
//         <td><span class="btn btn-danger float-right delete">Delete</span></td>
//         </tr></div>`;




addbook.addEventListener('click', function() {

    if (namebook.value == "" || rate.value > 10) {
        dd[0].innerHTML = "Enter All Your Data Valid please";

    } else {
        let d = document.createElement('span');

        let dt = document.createTextNode('Delete');
        d.appendChild(dt);
        d.classList = ['btn btn-danger deleted top float-right'];
        let m = document.createElement('span');
        m.classList = ['d-block cir text-success'];
        let z = document.createTextNode(rate.value + "/10");
        m.appendChild(z);
        let hj = document.createElement('div');
        let qw = document.createElement('img');
        qw.classList = ['float-left '];
        qw.src = img.value;

        hj.appendChild(qw);
        let g = document.createElement('div');

        let t = document.createTextNode(namebook.value);
        g.appendChild(t);
        g.classList = ['alert alert-info alert-block text-center '];
        g.appendChild(hj);
        g.appendChild(m);
        g.appendChild(d);
        listbook.appendChild(g);


        // $(dd).remove();
        dd[0].innerHTML = "Your Movie has been added";
        namebook.value = "";
        rate.value = "";
        img.value = "";
        namebook.focus();

        hide.classList.add('hide');



        d.addEventListener('click', function() {

            if (d.classList.contains('deleted')) {
                console.log('dd');
                g.remove();
                dd[0].innerHTML = "Your Movie has been deleted";
            }

        })


    }

});



hide = document.querySelector('#hide');

show.addEventListener('click', function() {
    // if (card.classList.contains('hide')) {

    hide.classList.remove('hide');
    // }
});

closes.addEventListener('click', function() {
    // if (card.classList.contains('hide')) {

    hide.classList.add('hide');
    // }
});