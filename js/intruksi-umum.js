$('.form-check-input').click(function () {
    //check if checkbox is checked
    if ($(this).is(':checked')) {
        $('.btn').removeAttr('disabled'); //enable input
    } else {
        $('.btn').attr('disabled', true); //disable input
    }
});