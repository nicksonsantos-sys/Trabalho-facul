
import { MenuSection } from './types';

export const MENU_DATA: MenuSection[] = [
  {
    id: 'entradas',
    title: 'Entradas',
    items: [
      {
        name: 'Edamame',
        description: 'Soja verde no vapor, finalizada com sal marinho.',
        tags: { isVegan: true, isGlutenFree: true },
        allergens: { hasSoy: true },
      },
      {
        name: 'Sunomono',
        description: 'Salada de pepino, molho agridoce e gergelim tostado.',
        tags: { isVegan: true, isGlutenFree: true },
      },
      {
        name: 'Missoshiro',
        description: 'Caldo de miso, tofu e cebolinha.',
        tags: { isVegan: true },
      },
      {
        name: 'Gyoza de Legumes',
        description: 'Pastéis japoneses de legumes, cozidos e grelhados.',
        tags: { isVegan: true },
      },
    ],
  },
  {
    id: 'grelha',
    title: 'Grelha',
    items: [
      {
        name: 'Teppan de Salmão',
        description: 'Salmão grelhado, legumes salteados e toque cítrico.',
        tags: { isGlutenFree: true, isSignature: true },
      },
      {
        name: 'Yakitori',
        description: 'Espetinho de frango glaceado no molho tarê.',
        tags: {},
        allergens: { hasGluten: true },
      },
      {
        name: 'Camarão na Chapa',
        description: 'Camarões grelhados na manteiga de alho.',
        tags: { isGlutenFree: true },
      },
    ],
  },
  {
    id: 'massas',
    title: 'Massas',
    items: [
      {
        name: 'Yakisoba Clássico',
        description: 'Macarrão japonês salteado com legumes, frango ou carne ao molho shoyo.',
        tags: {},
        allergens: { hasGluten: true },
      },
      {
        name: 'Lamen',
        description: 'Caldo encorpado com macarrão, ovo e alga nori.',
        tags: {},
        allergens: { hasGluten: true, hasEgg: true },
      },
      {
        name: 'Udon Vegetariano',
        description: 'Caldo leve com cogumelos e legumes.',
        tags: { isVegan: true },
      },
    ],
  },
  {
    id: 'vegano-vegetariano',
    title: 'Vegano & Vegetariano',
    items: [
      {
        name: 'Veggie Roll',
        description: 'Pepino, manga, cenoura, abacate, cream cheese.',
        tags: { isVegan: true },
      },
            {
        name: 'Temaki Vegano',
        description: 'Cone de alga com pepino, cenoura, manga e abacate.',
        tags: { isVegan: true, isGlutenFree: true },
      },
      {
        name: 'Sashimi de Tofu Defumado',
        description: 'Tofu fatiado com molho ponzu cítrico.',
        tags: { isVegan: true, isGlutenFree: true },
      },
    ],
  },
  {
    id: 'acompanhamentos',
    title: 'Acompanhamentos',
    items: [
      {
        name: 'Arroz Gohan',
        description: 'Tradicional arroz japonês branco.',
        tags: { isVegan: true, isGlutenFree: true },
      },
      {
        name: 'Arroz Temperado',
        description: 'Arroz japonês com gergelim e furikake.',
        tags: { isVegan: true },
      },
      {
        name: 'Legumes Salteados',
        description: 'Legumes refogados no shoyu e gengibre.',
        tags: { isVegan: true },
      },
      {
        name: 'Salada Wakame',
        description: 'Algas marinadas, gergelim tostado.',
        tags: { isVegan: true, isGlutenFree: true },
      },
    ],
  },
  {
    id: 'sobremesas',
    title: 'Sobremesas',
    items: [
      {
        name: 'Mochi Recheado',
        description: 'Massa de arroz glutinoso, com recheios variados.',
        tags: { isVegan: true, isGlutenFree: true },
      },
      {
        name: 'Tempurá de Sorvete',
        description: 'Sorvete empanado e frito, calda doce.',
        tags: {},
        allergens: { hasGluten: true, hasMilk: true },
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [
      {
        name: 'Chá Verde 350ml',
        description: 'Quente ou gelado.',
        tags: { isVegan: true, isGlutenFree: true },
      },
      {
        name: 'Suco Natural 350ml',
        description: 'Laranja, abacaxi ou maracujá.',
        tags: { isVegan: true, isGlutenFree: true },
      },
      { name: 'Refrigerante de Cola 350ml', description: '', tags: { isVegan: true, isGlutenFree: true } },
      { name: 'Água 350ml', description: 'Com ou sem gás.', tags: { isVegan: true, isGlutenFree: true } },
      { name: 'Saquerinha 350ml', description: 'Morango ou maracujá.', tags: { isVegan: true, isGlutenFree: true }, allergens: { hasAlcool : true }},
      { name: 'Saquê 750ml', description: 'Dose ou garrafa.', tags: {}, allergens: { hasAlcool : true }},
    ],
  },
];
