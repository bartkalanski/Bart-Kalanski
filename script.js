$('#contact-form').submit(function(e) {
    let name = document.getElementById('inputName');
    let email = document.getElementById('inputEmail');
    let message = document.getElementById('inputMessage');

    if (!name.value || !email.value || !message.value) {
        alertify.error('Please check your entries')
    }
    else {
        $.ajax({
            url: "https://formspree.io/bkalanski@hotmail.co.uk",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        })

        e.precentDefault()
        $(this).get(0).reset()
        alertify.success('Message sent')
    }
})