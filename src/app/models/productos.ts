import { Producto } from "./models";

export const productos : Producto[] = [
  // POLLO
  {
    id: 1,
    nombre: 'Pollo entero',
    categoria: 'Pollo',
    precio: 4500
  },
  {
    id: 2,
    nombre: 'Pata muslo',
    categoria: 'Pollo',
    precio: 4500,
    promo: 'Promo x 3kg en efectivo $12000'
  },
  {
    id: 3,
    nombre: 'Pechuga deshuesada',
    categoria: 'Pollo',
    precio: 9900
  },
  {
    id: 4,
    nombre: 'Muslo deshuesado',
    categoria: 'Pollo',
    precio: 8500
  },
  {
    id: 5,
    nombre: 'Milanesas clásicas (pechuga o muslo)',
    categoria: 'Pollo',
    precio: 9500,
    promo: '2kg en efectivo x $18000'
  },
  {
    id: 6,
    nombre: 'Milanesas especiales (mix semillas y avena)',
    categoria: 'Pollo',
    precio: 9600
  },
  {
    id: 7,
    nombre: 'Milanesas de muslo rellenas (jamón y queso)',
    categoria: 'Pollo',
    precio: 9900
  },
  {
    id: 8,
    nombre: 'Arrollados / Roulette',
    categoria: 'Pollo',
    precio: 9400
  },
  {
    id: 9,
    nombre: 'Alitas crispy',
    categoria: 'Pollo',
    precio: 6900
  },
  {
    id: 10,
    nombre: 'Alitas',
    categoria: 'Pollo',
    precio: 2900,
    promo: '3kg en efectivo x $6000'
  },
  {
    id: 11,
    nombre: 'Hamburguesas caseras gourmet',
    categoria: 'Pollo',
    precio: 9400,
    descripcion: 'Variedades: Limón y mostaza, Espinaca y morrón, Ahumadas, Clásicas'
  },
  {
    id: 12,
    nombre: 'Pollo entero deshuesado (arrollar o rellenar)',
    categoria: 'Pollo',
    precio: 13000
  },
  {
    id: 13,
    nombre: 'Brochettes',
    categoria: 'Pollo',
    precio: 2000,
    promo: 'Promo 10 x $18000 (consultar stock)'
  },
  {
    id: 14,
    nombre: 'Albóndigas de pollo',
    categoria: 'Pollo',
    precio: 8400
  },
  {
    id: 15,
    nombre: 'Bolsón canino 5kg (carcasa y menudo)',
    categoria: 'Pollo',
    precio: 1000
  },

  // TERNERA
  {
    id: 16,
    nombre: 'Milanesas de ternera',
    categoria: 'Ternera',
    precio: 17500
  },
  {
    id: 17,
    nombre: 'Hamburguesas de ternera',
    categoria: 'Ternera',
    precio: 11900
  },
  {
    id: 18,
    nombre: 'Albóndigas de ternera',
    categoria: 'Ternera',
    precio: 9900
  },

  // CERDO
  {
    id: 19,
    nombre: 'Bondiola',
    categoria: 'Cerdo',
    precio: 10500
  },
  {
    id: 20,
    nombre: 'Lomo',
    categoria: 'Cerdo',
    precio: 10500
  },
  {
    id: 21,
    nombre: 'Costeletas',
    categoria: 'Cerdo',
    precio: 8900
  },
  {
    id: 22,
    nombre: 'Matambre',
    categoria: 'Cerdo',
    precio: 12600
  },
  {
    id: 23,
    nombre: 'Milanesas de cerdo',
    categoria: 'Cerdo',
    precio: 9500
  },

  // MERLUZA
  {
    id: 24,
    nombre: 'Milanesas de merluza a las finas hierbas',
    categoria: 'Merluza',
    precio: 14500
  },
  {
    id: 25,
    nombre: 'Medallón crocante de merluza',
    categoria: 'Merluza',
    precio: 14500
  },

  // CONGELADOS
  {
    id: 26,
    nombre: 'Nuggets crocantes',
    categoria: 'Congelados',
    precio: 10000
  },
  {
    id: 27,
    nombre: 'Milanesas de soja (espinaca, jamón/queso, calabaza)',
    categoria: 'Congelados',
    precio: 11000
  },
  {
    id: 28,
    nombre: 'Papas bastón McCain',
    categoria: 'Congelados',
    precio: 7500
  },
  {
    id: 29,
    nombre: 'Papas noisette / caritas',
    categoria: 'Congelados',
    precio: 8200
  },
  {
    id: 30,
    nombre: 'Bastón de muzzarella',
    categoria: 'Congelados',
    precio: 14300
  },
  {
    id: 31,
    nombre: 'Medallón de pollo, jamón y queso',
    categoria: 'Congelados',
    precio: 10700
  },
  {
    id: 32,
    nombre: 'Bocaditos de espinaca',
    categoria: 'Congelados',
    precio: 8500
  },
  {
    id: 33,
    nombre: 'Milanesas de soja rellenas x4u',
    categoria: 'Congelados',
    precio: 5100
  },

  // VERDULERÍA Y FRUTAS
  {
    id: 34,
    nombre: 'Papa',
    categoria: 'Verdulería',
    precio: 900,
    promo: '2kg x $1500'
  },
  {
    id: 35,
    nombre: 'Cebolla',
    categoria: 'Verdulería',
    precio: 700,
    promo: '2kg x $1100'
  },
  {
    id: 36,
    nombre: 'Zanahoria',
    categoria: 'Verdulería',
    precio: 1900,
    promo: '2kg x $3500'
  },
  {
    id: 37,
    nombre: 'Pimiento verde',
    categoria: 'Verdulería',
    precio: 4500,
    promo: '2kg x $6500'
  },
  {
    id: 38,
    nombre: 'Pimiento rojo o amarillo',
    categoria: 'Verdulería',
    precio: 6000
  },
  {
    id: 39,
    nombre: 'Tomate',
    categoria: 'Verdulería',
    precio: 2500,
    promo: '2kg x $4000'
  },
  {
    id: 40,
    nombre: 'Zapallito verde',
    categoria: 'Verdulería',
    precio: 2700,
    promo: '2kg x $4000'
  },
  {
    id: 41,
    nombre: 'Calabacín',
    categoria: 'Verdulería',
    precio: 1500
  },
  {
    id: 42,
    nombre: 'Batata',
    categoria: 'Verdulería',
    precio: 1800,
    promo: '2kg x $2900'
  },
  {
    id: 43,
    nombre: 'Berenjena',
    categoria: 'Verdulería',
    precio: 1900,
    promo: '2kg x $3500'
  },
  {
    id: 44,
    nombre: 'Zapallo Brasil',
    categoria: 'Verdulería',
    precio: 1500
  },
  {
    id: 45,
    nombre: 'Repollo',
    categoria: 'Verdulería',
    precio: 3000
  },
  {
    id: 46,
    nombre: 'Verdeo',
    categoria: 'Verdulería',
    precio: 6500
  },
  {
    id: 47,
    nombre: 'Puerro',
    categoria: 'Verdulería',
    precio: 4500
  },
  {
    id: 48,
    nombre: 'Apio',
    categoria: 'Verdulería',
    precio: 4500
  },
  {
    id: 49,
    nombre: 'Brócoli / Coliflor',
    categoria: 'Verdulería',
    precio: 3000
  },
  {
    id: 50,
    nombre: 'Choclo',
    categoria: 'Verdulería',
    precio: 1000
  },
  {
    id: 51,
    nombre: 'Ajo',
    categoria: 'Verdulería',
    precio: 1100
  },
  {
    id: 52,
    nombre: 'Bandejas mixtas (ensalada/sopa)',
    categoria: 'Verdulería',
    precio: 2500
  },
  {
    id: 53,
    nombre: 'Manzana',
    categoria: 'Frutas',
    precio: 2900,
    promo: '2kg x $3700'
  },
  {
    id: 54,
    nombre: 'Naranja',
    categoria: 'Frutas',
    precio: 1900,
    promo: '2kg x $3500'
  },
  {
    id: 55,
    nombre: 'Mandarina',
    categoria: 'Frutas',
    precio: 2500,
    promo: '2kg x $3900'
  },
  {
    id: 56,
    nombre: 'Pera',
    categoria: 'Frutas',
    precio: 2300,
    promo: '2kg x $3000'
  },
  {
    id: 57,
    nombre: 'Limón',
    categoria: 'Frutas',
    precio: 2500,
    promo: '2kg x $4000'
  },
];
