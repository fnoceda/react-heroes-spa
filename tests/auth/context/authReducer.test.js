import { authReducer, types } from "../../../src/auth";

describe('Tests on authReducer', () => { 
    
    const initialState = {
        logged: false, 
    };

    const user = {
      id: '123', 
      name: 'Francsico'
    };

    const loginAction = {
      type: types.login,
      payload: user,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('should return the default state', () => { 
        const defaultState = authReducer(initialState, {});
        expect(defaultState).toBe(initialState);

     });

     test('should call login, and set user and set logged as true', () => { 
        
        const defaultState = authReducer(initialState, {});
        expect(defaultState.logged).toBe(false);

        const loggedState = authReducer(defaultState, loginAction);
        expect(loggedState.logged).toBe(true);


      });


      test('should call logout, remove user set logged as false', () => { 
        
        const loggedState = authReducer(initialState, loginAction);
        expect(loggedState.logged).toBe(true);


        const logoutAction = {
          type: types.logout,
          payload: null,
        };

        const logoutState = authReducer(loggedState, logoutAction);
        expect(logoutState.logged).toBe(false);


       });

 })