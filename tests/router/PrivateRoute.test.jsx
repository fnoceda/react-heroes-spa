import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "../../src/router/PrivateRoute"

describe('Tests on <PublicRoute />', () => { 
    

    test('should show children if user are logged', () => { 
        


        Storage.prototype.setItem = jest.fn(); // to test localStorage.setItem

        const contextValue = {
            logged: true, 
            user: {
                id: '123', 
                name: 'Juan',
            }
        };

       render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                <PrivateRoute> 
                    <h1>PrivateRoute</h1>
                </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        ) 

         expect( screen.findByText('PrivateRoute') ).toBeTruthy();


        expect( localStorage.setItem ).toHaveBeenCalled();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');


     })

     


 })