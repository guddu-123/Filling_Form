function myFunction(){
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phoneno = document.getElementById('phoneno').value;
    const male = document.getElementById('male').value;
    const female = document.getElementById('female').value;
    const others = document.getElementById('others').value;
    const se = document.getElementById('SE').value;
    const bm = document.getElementById('BM').value;
    const fm = document.getElementById('FM').value;
    const pak = document.getElementById('pak').value;
    const aus = document.getElementById('aus').value;
    const ind = document.getElementById('ind').value;
    const cad = document.getElementById('cad').value;
    const chin = document.getElementById('chin').value;
    const us = document.getElementById('us').value;
    const text = fname +"\n"+ lname+"\n"+dob+"\n"+male+"\n"+female+"\n"+others+"\n"+pak;
    alert(text);
    // if(se == "Software Enineer" || bm == "Bussiness Man" || fm == "Farmer" ){
    //     country +=  
    // }

    console.log("country", pak);

}