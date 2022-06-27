import { render, screen, shallow} from "@testing-library/react";



import Header from "./header";


test("testing for main component wrapper for header", () => {
    render(<Header />);
    const headerComponentHolder = screen.getByTestId("headerComponentHolder");

    expect(headerComponentHolder).toBeInTheDocument();
});

test("testing for image holder for header component(logo)",()=>{
    render(<Header/>);
    const headerImgHolder = screen.getByTestId("headerComponentLogoHolder")

    expect(headerImgHolder).toBeInTheDocument();
})

test("the style should change when the width changes, default 500px",()=>{
   render(<Header/>);

   const imgSmall = screen.getByTestId("logoSmall")

   expect(imgSmall).toBeInTheDocument();

   const imgBig = screen.queryByTestId('logoBig');
   expect(imgBig).not.toBeInTheDocument();
})

