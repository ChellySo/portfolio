import { Heading, Typography } from "@chellycodeui/portfolio-designsystem"
import temporaryImg from "../../assets/sailor_saturn_pixel_icon.png"

export const About = () => {
    return (
        <div className="max-w-screen-md xs:min-h-screen place-content-center flex flex-col xs:gap-6 gap-2 mx-auto w-full">
            <Heading variant="h2" className="!text-purple-200 xs:text-heading-1">About Me</Heading>
            <div className="grid sm:grid-cols-2 gap-16 items-center">
                <Typography variant="md/lilac">As a frontend developer, I am a hard and flexible worker. Over the past year I have gained a lot of knowledge during various projects. During these projects and my studies, I have built a solid foundation in HTML, CSS, JavaScript, TypeScript and ReactJS.

                    What characterizes me is that I work in a structured and results-oriented manner. My eagerness to learn, flexibility and perseverance are often appreciated, as is my attention to collaboration in teams.

                    I really enjoy working in a team, because I get the opportunity to learn from fellow colleagues while working. I have also enjoyed working in a team during projects using the scrum/agile methodology. Furthermore, I can work independently and in an organized manner. My ambition is to grow further as a frontend developer expert with UI/UX design skills, so that I can add more value to projects.

                    In my spare time I enjoy doing Latin dance and classical ballet. I also like to travel, since I traveled alone in Asia for 3 months.
                </Typography>
                <img src={temporaryImg.src} className="rounded-full justify-self-center" />
            </div>
        </div>
    )
}