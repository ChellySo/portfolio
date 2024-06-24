import { Button, Heading, Typography } from "@chellycodeui/portfolio-designsystem"

export const Hero = () => {
    return (
        <div className="max-w-screen-md xs:min-h-screen place-content-center flex flex-col xs:gap-6 gap-2 mx-auto w-full">
            <Typography variant="md/fushia">Hello, my name is</Typography>
            <div>
                <Heading variant="h1" className="2xs:text-heading-lg xs:text-heading-xl sm:text-heading-xxl !text-purple-200">Chelly</Heading>
                <Heading variant="h2" className="xs:text-heading-lg sm:text-heading-xl">Frontend Developer</Heading>
            </div>
            <Typography variant="md/lilac" className="sm:w-1/2 ">As a frontend developer, my eagermess to learn, flexibility and perseverance are often appreciated. In the past year I have gained lots of knowledge during various projects and my studies. I have created a solid foundatin in HTML, CSS, JavaScript and ReactJS.</Typography>
            <Button variant="md/secondary" className="w-fit mt-2">Contact me!</Button>
        </div>
    )
}