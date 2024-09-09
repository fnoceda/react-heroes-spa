import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Tests on <PublicRoute />', () => { 
    

    test('should show children if user are not logged', () => { 
        
        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute> 
                    <h1>PublicRoute</h1>
                </PublicRoute>
            </AuthContext.Provider>
        ) 

         expect( screen.findByText('PublicRoute') ).toBeTruthy();

     })

     test('should navigate if user are logged', () => { 
        
        const contextValue = {
            logged: true, 
            user: {
                id: '123', 
                name: 'Juan',
            }
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/marvel" element={ <h1>HomePage</h1> }></Route>
                        <Route path="/login" element={ 
                            <PublicRoute> 
                                <h1>PublicRoute</h1>
                            </PublicRoute>
                         }></Route>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        ) 

        expect( screen.findByText('HomePage') ).toBeTruthy();

     })


 })