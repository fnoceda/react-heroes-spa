import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";



const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
  }))


describe('Tests on <SearchPage />', () => { 
    


    beforeEach(() => jest.clearAllMocks() );

    test('should show the default values', () => { 
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();        
     });


     test('should show batman and input whit query string', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
       const input = screen.getByRole('textbox');
       expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        const errorAlert = screen.getByLabelText('error_alert');
        expect(errorAlert.style.display).toBe('none')


     });


     test('should show an error when the hero is not found', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
        const errorAlert = screen.getByLabelText('error_alert');
        expect(errorAlert.style.display).toBe('')

      });

     test('should call navigate to the next screen', () => { 
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        const findHero = 'superman';
        fireEvent.change(input, {target: {name: 'searchText', value: findHero}});


        const form = screen.getByRole("form");
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=superman`);


      })


 })