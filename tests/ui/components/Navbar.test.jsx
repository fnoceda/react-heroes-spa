import { AuthContext } from '../../../src/auth'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";

import { Navbar } from "../../../src/ui"





const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
  }))

describe('Test on <Navbar />', () => { 


    const contextValue = {
        logged: true,
        user: {
            id: '123', 
            name: 'Francisco',
        },
        logout: jest.fn(),
      };
    
      beforeEach(() => jest.clearAllMocks());


    test('should show the user name', () => { 
        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('Francisco') ).toBeTruthy();


     })


     test('should call login when user tap', () => { 
        
      })

      test('should call logout and navigate when user tap on Logout Button', () => { 
        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {replace: true});


      })


 })