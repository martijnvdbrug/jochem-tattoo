$(document).foundation();

$('[data-reveal-id]').on('click', function() {
    const imgUrl = $(this).children()[0].src;
    const description = $(this).data('description');
    console.log(description);
    $('#modalImg').attr('src', imgUrl);
    $('#modalDescription').html(description);

    // targetModal.find('.buttonText').text(newText);
});
