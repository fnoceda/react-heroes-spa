import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes} from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";




describe('Tests on <AppRouter />', () => { 
    
    test('should show login when the user have not authendicated', () => { 
        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getByText('LoginPage') ).toBeTruthy();
     })


     test('should show marvel page', () => { 
        const contextValue = {
            logged: true, 
            user: {
                id:'123', 
                name: 'Francisco'
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);
        expect( screen.getByText('Asociaciones') ).toBeTruthy();
        expect( screen.getByText('Francisco') ).toBeTruthy();



      })


 })