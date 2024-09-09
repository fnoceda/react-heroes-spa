import { types } from "../../src/auth"

describe('Tests on types', () => { 

    test('should return exactly these values', () => { 
        expect(types).toEqual({
            login: '[Auth] Login', 
            logout: '[Auth] Logout', 
        });
     })

 })