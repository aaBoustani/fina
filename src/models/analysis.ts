export default interface Analysis {
    name_of_dish: string;
    amount_of: {
        fat: string;
        carbs: string;
        protein: string;
    };
    weight: string;
    energy: {
        calories: string;
        kilojoules: string;
    };
    nutritional_values: {
        name: string;
        amount: string;
    }[];
    ingredients: {
        ingredient_name: string;
        weight: string;
    }[];
    imageBase64: string;
}