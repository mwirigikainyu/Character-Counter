document.getElementById('text').addEventListener('input', changeNumber);

function changeNumber() {
  let count = 0;
  let inputValue = document.getElementById('text').value;
  if (inputValue) {
    count = inputValue.length;
  }
  document.getElementById('count').innerHTML = count;
}
