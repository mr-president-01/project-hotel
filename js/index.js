const sendForm = document.querySelector('btn-primary');
// sendForm.addEventListener('click', getBookInfo);

function getBookInfo() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://192.168.1.11:3001/get-book-info', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4 && xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                const requestForm = document.querySelector('request-form');
                requestForm.innerHTML = xhr.responseText;
            } catch (err) {
                alert('Error answer: ' + err.message);
            }
        }

    }

    xhr.send();

    requestForm.innerHTML = '<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only">Loading...</span></div>';
}

$(document).ready(function() {
    $('#book-form').on('submit', function(event) {
        event.preventDefault();

        show_spinner();
        
        var formData = $('#book-form').serialize();
        var url = "http://192.168.1.11:3001/book-room";
        $.post(url, formData).done(function( data ) {
            hide_spinner();
            alert(data);
        });;

    });


    function show_spinner() {
        $('#bookNowModal .spinner_wrapper').addClass('shown');
        $('#book-form').fadeTo(150, 0.5);
    }

     function hide_spinner() {
        $('#bookNowModal .spinner_wrapper').removeClass('shown');
        $('#book-form').fadeTo(150, 1);
    }

});