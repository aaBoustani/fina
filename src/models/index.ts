interface Macros {
    fat: string;
    carbs: string;
    protein: string;
}

interface Energy {
    calories: string;
    kilojoules: string;
}

interface NutritionalValue {
    name: string;
    amount: string;
}

interface Ingredient {
    name: string;
    weight: string;
}

interface Analysis {
    dishName: string;
    macros: Macros;
    weight: string;
    energy: Energy;
    nutritionalValues: NutritionalValue[];
    ingredients: Ingredient[];
}

interface Upload {
    id: string;
    analysis?: Analysis;
    createdAt: Date;
    updatedAt: Date;
    image: string;
}


export type {
    Macros,
    Energy,
    NutritionalValue,
    Ingredient,
    Analysis,
    Upload,
};