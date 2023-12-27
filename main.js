function showCertificate(){
    let getCertificate = document.getElementById('my-certificate');
    getCertificate.style.display = 'block';
    
}
function hideCertificate(){
    let deleteButton =  document.getElementById('my-certificate');
    deleteButton.style.display = 'none';
}

var tablinks = document.getElementsByClassName('tap-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentap(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

