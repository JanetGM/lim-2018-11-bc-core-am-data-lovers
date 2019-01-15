require('../src/data.js');
const input = [
  { id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'},
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },
  { id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },

];
const output = [
  { id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png' },
  { id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' }
];
const output2 = [
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },
  { id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png' }
];

const inputOrder = [
  { id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png' },
  { id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' }
];


const input2 = [
  { name: 'Ahri', stats: { attackdamage: 53.04 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { name: 'Akali', stats: { attackdamage: 58.376 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },
  { name: 'Alistar', stats: { attackdamage: 61.1116 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png' },
  { name: 'Amumu', stats: { attackdamage: 53.384 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png' },
  { name: 'Anivia', stats: { attackdamage: 51.376 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png' },
  { name: 'Annie', stats: { attackdamage: 50.41 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Annie.png' },
  { name: 'Ashe', stats: { attackdamage: 56.508 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png' },
  { name: 'Aurelion Sol', stats: { attackdamage: 57 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/AurelionSol.png' },
  { name: 'Maokai', stats: { attackdamage: 63.544 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png' },
  { name: 'Kalista', stats: { attackdamage: 63 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Kalista.png' },
  { name: 'Warwick', stats: { attackdamage: 62.43 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Warwick.png' },
  { name: 'Singed', stats: { attackdamage: 62.32 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Singed.png' },
  { name: 'Camille', stats: { attackdamage: 62 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Camille.png' },
  { name: 'Malphite', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png' },
  { name: 'Jax', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png' },
  { name: 'Galio', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Galio.png' },
  { name: 'Irelia', stats: { attackdamage: 61.544 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png' },
  { name: 'Blitzcrank', stats: { attackdamage: 61.54 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png' }
];
const output3 = [
  { name: 'Maokai', attackdamage: 63.544, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png' },
  { name: 'Kalista', attackdamage: 63, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Kalista.png' },
  { name: 'Warwick', attackdamage: 62.43, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Warwick.png' },
  { name: 'Singed', attackdamage: 62.32, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Singed.png' },
  { name: 'Camille', attackdamage: 62, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Camille.png' },
  { name: 'Malphite', attackdamage: 61.97, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png' },
  { name: 'Jax', attackdamage: 61.97, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png' },
  { name: 'Galio', attackdamage: 61.97, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Galio.png' },
  { name: 'Irelia', attackdamage: 61.544, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png' },
  { name: 'Blitzcrank', attackdamage: 61.54, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png' }
];
const input4 = [{
  id: 'Aatrox',
  name: 'Aatrox',
  title: 'the Darkin Blade',
  img:
    'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
  tags: ['Fighter', 'Tank']
},
{
  id: 'Ahri',
  name: 'Ahri',
  title: 'the Nine-Tailed Fox',
  img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
  tags: ['Mage', 'Assassin']
}
];

const input4choice = ['Mage'];
const outputFilter = [
  {
    id: 'Ahri',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    tags: ['Mage', 'Assassin']
  }];

const input3 = [
  { stats: {
    hp: 537.8,
    hpperlevel: 85,
    mp: 105.6,
    mpperlevel: 45,
    movespeed: 345,
    armor: 24.384,
    armorperlevel: 3.8,
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    attackrange: 150,
    hpregen: 6.59,
    hpregenperlevel: 0.5,
    mpregen: 0,
    mpregenperlevel: 0,
  }}
];
const condition1 = '00';
const condition2 = '01';

describe('lol', () => {
  it('debería ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });
  describe('lol.sortData', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.sortData).toBe('function');
    });
    it('Deberia retornar un array de objetos ordenados de la A hasta la Z, con el valor de la propiedad ', () => {
      expect(lol.sortData(input, condition1)).toEqual(output);
    });
    it('Deberia retornar un array de objetos ordenados de la Z hasta la A, con el valor de la propiedad ', () => {
      expect(lol.sortData(output, condition2)).toEqual(output2);
    });
    it('deberia retornar la data original', () => {
      expect(lol.sortData(inputOrder)).toEqual(output);
    });
  });
  describe('lol.getTopTen', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.getTopTen).toBe('function');
    });
    it('Debería retornar un array con 10 objetos con mayor numero de ataque', () => {
      expect(lol.getTopTen(input2)).toEqual(output3);
    });
  });
  describe('lol.dataFilter', () => {
    it('debería ser una función ', () => {
      expect(typeof lol.dataFilter).toBe('function');
    });
    it('deberia de retornar los de tipo Mage', () => {
      expect(lol.dataFilter(input4, input4choice)).toEqual(outputFilter);
    });
  });
  describe('lol.statFunction', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.statFunction).toBe('function');
    });
    it('Debería retornar 1047.80', () => {
      expect(lol.statFunction(6, input3, 1)).toEqual('1047.80');
    });
    it('Debería retornar 375.60', () => {
      expect(lol.statFunction(6, input3, 2)).toEqual('375.60');
    });
    it('Debería retornar 47.18', () => {
      expect(lol.statFunction(6, input3, 3)).toEqual('47.18');
    });
    it('Debería retornar 39.60', () => {
      expect(lol.statFunction(6, input3, 4)).toEqual('39.60');
    });
    it('Debería retornar 9.59 ', () => {
      expect(lol.statFunction(6, input3, 5)).toEqual('9.59');
    });
    it('Deberia retornar 0', () => {
      expect(lol.statFunction(6, input3, 0)).toEqual(0);
    });
  });
});
