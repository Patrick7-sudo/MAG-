import { render, screen} from "@testing-library/react";

import Footer from "./footer";

test("the footer img wrapper is visible",()=>{
    render(<Footer/>);

    const footerContainer = screen.getByTestId("footerMainContainerWrapper")

    expect(footerContainer).toBeInTheDocument();
})