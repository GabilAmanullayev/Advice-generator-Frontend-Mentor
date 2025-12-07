const title = document.querySelector('.title');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice'
);

const getAdvice = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {

      title.innerHTML = `ADVICE #${data.slip.id}`;
      advice.innerHTML = `"${data.slip.advice}"`;
    })
    .catch((_error) => {
      // eslint-disable-next-line no-console
      console.error('There was a problem with the fetch operation:", error');
    });
};
getAdvice();
dice.addEventListener('click', () => {
  getAdvice();
});
