import foodCardsTpl from "../templates/gallery_foods.hbs"
export default function createMurkupList(cardsFood) {
    return foodCardsTpl(cardsFood);
}