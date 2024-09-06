import {heroes} from '../data/heroes';

export const heroesByPublisher = ( publisher ) => {
    const validPublisers = ['DC Comics', 'Marvel Comics'];
    if(!validPublisers.includes(publisher)) throw new Error(`${publisher} do not exists`);

    return heroes.filter( hero => hero.publisher === publisher );
}