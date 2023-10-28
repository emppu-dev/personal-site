function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
window.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('img');
  const url = image.getAttribute('src');
  const newUrl = url.replace('xxxxx', generateRandomString(10));
  image.setAttribute('src', newUrl);
});