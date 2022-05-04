function modalshow(caller)
{
    let modal_id = 'Modal';
    document.querySelector('#modal-text').innerText = `Data for Minor Track Number ${caller}`;
    document.querySelector('#modal-institute').innerText = `Insitute that offers ${caller}`;
    document.querySelector(".modal-title").innerText = `${caller} Name`;
    $("#"+modal_id).modal({backdrop: true});
}