import { Button, LargeHeading, Typography } from "@chellycodeui/portfolio-designsystem";

export const HomePage = () => {
    return (
        <>
            <div className="max-w-screen-xl m-auto h-full place-content-center flex flex-col gap-4">
                <Typography variant="md/fushia">Hello, my name is</Typography>
                <div>
                    <LargeHeading variant="xxlarge" className="!text-purple-200">Chelly</LargeHeading>
                    <LargeHeading variant="xlarge">Frontend Developer</LargeHeading>
                </div>
                <Typography variant="md/lilac" className="w-1/2">As a frontend developer, my eagermess to learn, flexibility and perseverance are often appreciated. In the past year I have gained lots of knowledge during various projects and my studies. I have created a solid foundatin in HTML, CSS, JavaScript and ReactJS.</Typography>
                <Button variant="md/secondary" className="w-fit mt-2">Contact me!</Button>
            </div>
        </>
    )
}