$(document).foundation();

$('[data-reveal-id]').on('click', function() {
    let imgUrl = $(this).children()[0].src;
    let stencilUrl = $(this).data('stencil');
    $('#modalImg').attr('src', imgUrl);
    $('#stencilImg').attr('src', stencilUrl);

    // targetModal.find('.buttonText').text(newText);
});
