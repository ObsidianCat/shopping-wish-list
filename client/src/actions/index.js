export const SEARCH_FOR_ITEMS = 'SEARCH_FOR_ITEMS';

export function searchForItems(querry){
    console.log(querry);
    return {
        type: SEARCH_FOR_ITEMS,
        payload: querry
    }
}