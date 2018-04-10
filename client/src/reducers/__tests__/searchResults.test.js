import searchResultsReducer from '../searchResults';

describe('searchResultsReducer tests', () => {
    test('Return initial state as an empty array', ()=>{
        expect(searchResultsReducer(undefined, {})).toEqual([]);
    });
});