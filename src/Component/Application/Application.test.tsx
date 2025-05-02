import { render, screen } from "@testing-library/react"
import Application from "./Application"


describe('Application', () => {
    test('inputBox',() => {
        render (<Application/>);

        const headingElement = screen.getByRole('heading',{level:1});
        expect(headingElement).toBeInTheDocument();

        const heading3Element = screen.getByRole('heading',{level:3});
        expect(heading3Element).toBeInTheDocument();

        const inputElement = screen.getByRole("textbox",{name:'Name'});
        expect(inputElement).toBeInTheDocument();

        const inputElement2 = screen.getByLabelText("Name", {
            selector: "input", 
        });
        expect(inputElement2).toBeInTheDocument();
        
        const TextAreaElement = screen.getByRole("textbox",{name:'About'});
        expect(TextAreaElement).toBeInTheDocument();

        const SelectElement = screen.getByRole("combobox");
        expect(SelectElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole("checkbox");
        expect(checkboxElement).toBeInTheDocument();

        const checkboxElement2 = screen.getByLabelText("I agree to the terms and conditions");
        expect(checkboxElement2).toBeInTheDocument();
    })
})