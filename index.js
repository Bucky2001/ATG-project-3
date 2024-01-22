function submitForm() {
  var submitButton = document.querySelector('.submit-button');
  const loading = document.querySelector('.loading-anim');
  submitButton.style = 'opacity:0.65';
  loading.style = 'display: block';

  setTimeout(function () {
    loading.style = 'display: none';
    submitButton.style = 'opacity:1';

    submitButton.disabled = true;
  }, 2000);
}
