import { logRoles, render , screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", ()=> {
    const skills = ["CSS","HTML","Javascript","ReactJS"];
    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })    

test('render the list of key' , () => {
    render(<Skills skills={skills}/>)
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
})

test('lenders Login button' , () => {
    render(<Skills skills={skills}/>)
    const buttonElement = screen.getByRole("button" , {
        name:'Login'
    });
    expect(buttonElement).toBeInTheDocument();
})
test('Start Learning Button' , () => {
    render(<Skills skills={skills}/>);
    const StartbuttonElement = screen.queryByRole("button", {
        name:"Start learning"
    });
    expect(StartbuttonElement).not.toBeInTheDocument();
})

test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container)
    // screen.debug();
    const StartbuttonElement1 = await screen.findByRole("button" , {
        name:"Start learning",
    },{
        timeout:2000

    });
    // screen.debug();
    expect(StartbuttonElement1).toBeInTheDocument();
})




        
})