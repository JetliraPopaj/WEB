const buton=document.getElementById('butoni');
buton.addEventListener('click',function(validate){
    validate.preventDefault();
    const name1 = document.getElementById('name');
    const username1 = document.getElementById('username');
    const email1 = document.getElementById('email');
    const password1 = document.getElementById('password');
    const Rpassword1 = document.getElementById('Rpassword');

    if(name1.value==""){

        alert('Ju lutem shkruani emrin!');

        name1.focus();

        return false;

    }
    if(name1.value.length<3){
        alert('Ju lutem shkruani emrin me te gjate!');

        name1.focus();

        return false;
    }
    if(username1.value==""){

        alert('Ju lutem shkruani username-in!');

        username1.focus();

        return false;
    }
    if(email1.value==""){
        alert('Ju lutem shkruani email-in!');
        email1.focus();
        return false;
    }
    if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email1.value))){

        alert('Ju lutem shkruani email-in si duhet!');
        email1.focus();
        return false;
    }
    if(password1.value==""){
        alert('Ju lutem shkruani fjalekalimin!');
        password1.focus();
        return false;

    }
    if(Rpassword1.value==""){

        alert('Ju lutem shkruani fjalekalimin edhe ne fushen e dyte!');
        Rpassword1.focus();
        return false;
    }
    if(Rpassword1.value!=password1.value){
        alert('Fjalekalimi duhet te jete i njejte');
        return false;
    }

    else{
        alert('Regjistrimi u be me sukses!');
        return true;
    }

});
