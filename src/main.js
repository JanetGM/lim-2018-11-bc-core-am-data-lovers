// array de la data de Lol//

fetch('https://raw.githubusercontent.com/Laboratoria/lim-2018-11-bc-core-am-data-lovers/master/src/data/lol/lol.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let arrayFetch = Object.values(data.data);
    containerFunctions(arrayFetch);
  });

function containerFunctions(array) {
  // const array = Object.values(LOL.data);
  // Segundo diseño de templates
  const arrayTopTen = lol.getTopTen(array);
  // templatepara el top ten
  const templateListChampionTop = (list) => {
    let championsList = [];
    list.forEach((array) => {
      const templateList =
        `<div class='blog-card-2'>
      <video class='video' src='anima/${array.name}.webm' autoplay loop preload="auto" muted ></video>
      <h2 class='text-9'>"${array.name}"</h2>
      <h3 class='text-12'><img class='img-5' src='imagenes/guerra2.PNG'>ATAQUE : ${array.attackdamage}</h3>
      </div>`;
      championsList += templateList;
    });
    document.getElementById('list-champion-top').innerHTML = championsList;
  };
  templateListChampionTop(arrayTopTen);
}