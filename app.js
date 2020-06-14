$(document).foundation();

$('[data-reveal-id]').on('click', function() {
    const imgUrl = $(this).children()[0].src;
    let description = $(this).data('description');
    $('#modalImg').attr('src', imgUrl);
    if(!description) {
        description = '';
    }
    $('#modalDescription').html(description);

    // targetModal.find('.buttonText').text(newText);
});
