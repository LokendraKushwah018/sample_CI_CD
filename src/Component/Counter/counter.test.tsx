import { render, screen } from "@testing-library/react"
import Counter from "./counter"
import user from "@testing-library/user-event";


describe('Counter Component', () => {
    test('heading Function', () => {
        render(<Counter />);
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();

        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        expect(incrementButton).toBeInTheDocument()
    })

    test('Render a counter of 0', () => {
        render(<Counter />);
        const countEmlement = screen.getByRole("heading");
        expect(countEmlement).toHaveTextContent("0");
    })

    test('Render a count of 1 after clicking the increment button', async() =>  {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole('button',{
            name: "Increment",
        })
        await user.click(incrementButton);
        const countElement = screen.getByRole('heading');
        expect (countElement).toHaveTextContent("1")
    })

    test('Render a count of 10 after clicking the set button', async() => {
        user.setup();
        render(<Counter/>);
        const amountInput = screen.getByRole('spinbutton');
        await user.type(amountInput , "10");
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole('button',{
            name: 'Set'
        })
        await user.click(setButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("10");
    })

    test('element are focused in the right order', async() => {
        user.setup();
        render(<Counter/>);
        const incrementButton = screen.getByRole("button" , {name: "Increment"})
        const AmountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button" , {name: "Set"})
        await user.tab();
        expect(incrementButton).toHaveFocus();
        await user.tab();
        expect(AmountInput).toHaveFocus();
        await user.tab();
        expect(setButton).toHaveFocus();
    })


})