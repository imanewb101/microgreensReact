import { SHOP } from '../shared/shop';
import { BENEFITS } from '../shared/benefits'; 

export const initialState = {
    shops: SHOP, 
    benefits: BENEFITS
};

export const Reducer = (state = initialState, action) => {
    return state;
};