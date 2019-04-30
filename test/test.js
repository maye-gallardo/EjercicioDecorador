import { Arco } from '../Arco';
import { Espada } from '../Espada';
import { Madera } from '../Madera';
import { Hierro } from '../Hierro';
import { Fuego } from '../Fuego';

var expect = require('chai').expect;

describe('Decorator', function () {
  it('un arco sin material deberia tener un daño de 5', function () {
    let arco = new Arco();
    expect(arco.caculadorPuntaje()).eq(5);
  });

  it('una espada sin material deberia tener un daño de 10', function () {
    let espada = new Espada();
    expect(espada.caculadorPuntaje()).eq(10);
  });

  it('un arco con material de madera deberia tener un daño de 10', function () {
    let arco = new Arco();
    arco = new Madera(arco);
    expect(arco.caculadorPuntaje()).eq(10);
  });

  it('un arco con material de hierro deberia tener un daño de 15', function () {
    let arco = new Arco();
    arco = new Hierro(arco);
    expect(arco.caculadorPuntaje()).eq(15);
  });

  it('un arco con material de fuego deberia tener un daño de 20', function () {
    let arco = new Arco();
    arco = new Fuego(arco);
    expect(arco.caculadorPuntaje()).eq(20);
  });

  it('un arco con materiales de madera y hierro deberia tener un daño de 20', function () {
    let arco = new Arco();
    arco = new Madera(arco);
    arco = new Hierro(arco);
    expect(arco.caculadorPuntaje()).eq(20);
  });

  it('un arco con materiales de madera y fuego deberia tener un daño de 25', function () {
    let arco = new Arco();
    arco = new Madera(arco);
    arco = new Fuego(arco);
    expect(arco.caculadorPuntaje()).eq(25);
  });

  it('un arco con los tres materiales deberia tener un daño de 35', function () {
    let arco = new Arco();
    arco = new Madera(arco);
    arco = new Hierro(arco);
    arco = new Fuego(arco);
    expect(arco.caculadorPuntaje()).eq(35);
  });

  it('una espada con material de madera deberia tener un daño de 15', function () {
    let espada = new Espada();
    espada = new Madera(espada);
    expect(espada.caculadorPuntaje()).eq(15);
  });

  it('una espada con material de hierro deberia tener un daño de 20', function () {
    let espada = new Espada();
    espada = new Hierro(espada);
    expect(espada.caculadorPuntaje()).eq(20);
  });

  it('una espada con material de fuego deberia tener un daño de 25', function () {
    let espada = new Espada();
    espada = new Fuego(espada);
    expect(espada.caculadorPuntaje()).eq(25);
  });

  it('una espada con materiales de madera y hierro deberia tener un daño de 25', function () {
    let espada = new Espada();
    espada = new Madera(espada);
    espada = new Hierro(espada);
    expect(espada.caculadorPuntaje()).eq(25);
  });

  
});
