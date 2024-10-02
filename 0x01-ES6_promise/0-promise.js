export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolved');
    }, 1000);
  });
}
