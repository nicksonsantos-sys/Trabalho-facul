
export interface MenuItem {
  name: string;
  description: string;
  tags: {
    isVegan?: boolean;
    isGlutenFree?: boolean;
    isSignature?: boolean;
  };
  allergens?: {
    hasSoy?: boolean;
    hasGluten?: boolean;
    hasEgg?: boolean;
    hasMilk?: boolean;
  };
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}
