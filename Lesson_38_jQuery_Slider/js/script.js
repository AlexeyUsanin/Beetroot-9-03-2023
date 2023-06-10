$(function () {
  const title = $('h1');
  const content = title.text();

  console.log('title :>> ', title);
  console.log('content :>> ', content);
  title.append('<p>some text</p>');

  const link = $('.link')
  link.attr('href', 'https://google.com');

  const inputSearch = $('.input-search');

  inputSearch.on('change', function (event) {
    console.log('event :>> ', event);

    const value = $(event.target).val();
    console.log('value :>> ', value);
  })

  console.log('inputSearch.val() :>> ', inputSearch.val());

  const newEl = $('<div>Box</div>');

  $(document.body).append(newEl);

  const button = $('#btn');

  button.on('click', function () {
    console.log('this :>> ', this);
  })
});


// document.addEventListener('DOMContentLoaded', function () {

// })