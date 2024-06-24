import { Badge, Card, Heading, Typography } from "@chellycodeui/portfolio-designsystem"

export const Experience = () => {
    return (
        <div className="max-w-screen-md xs:min-h-screen place-content-center flex flex-col xs:gap-16 gap-4 mx-auto w-full my-0 xs:my-28">
            <Heading variant="h2" className="!text-purple-200 xs:text-heading-1">Experience</Heading>

            <Card title="Frontend Developer - Inlichtingenbureau" date="04/2023 - 03/2024">
                <div className="grid grid-flow-row gap-4">
                    <Typography variant="lg/lilac">
                        During my time at Stichting Inlichtingenbureau, I worked on several projects, including the development of a design system, a user portal, and an admin portal.  I began by developing a Design System, creating standard components using Storybook. These components were then used to rebuild both the user portal and the admin portal.
                    </Typography>
                    <Typography variant="lg/lilac">
                        The user portal was designed to streamline the exchange of data among municipalities, companies, and government agencies. For data retrieval in these portals, I implemented GraphQL schemas and queries. This approach ensured that data requests between the frontend and backend were compatible, minimizing potential errors and ensuring smooth integration between components.
                    </Typography>
                    <Typography variant="lg/lilac">
                        During its redevelopment, outdated features, components and functionalities were replaced, and new ones were introduced. Additionally, I developed an admin portal to manage organizations and users. This portal includes functionalities for blocking, deleting, adding, and editing users and organizations.
                    </Typography>
                </div>
                <div className="mt-4">
                    <Badge className="mr-2">ReactJS</Badge>
                    <Badge className="mr-2">NextJS</Badge>
                    <Badge className="mr-2">TypeScript</Badge>
                    <Badge className="mr-2">Storybook</Badge>
                    <Badge className="mr-2">Tailwind CSS</Badge>
                    <Badge className="mr-2">Jest</Badge>
                    <Badge className="mr-2">React Testing Library</Badge>
                    <Badge className="mr-2">GIT</Badge>
                    <Badge className="mr-2">HTML</Badge>
                    <Badge className="mr-2">Agile/Scrum</Badge>
                </div>
            </Card>

            <Card title="Frontend Engineer Traineeship - Sogeti" date="08/2022 - present">
                <div className="grid grid-flow-row gap-4">
                    <Typography variant="lg/lilac">
                        During my time at Sogeti, I participated in various learning and development activities that enhanced my professional skills and knowledge.
                    </Typography>
                    <Typography variant="lg/lilac">
                        I started by attending Sogeti's Ohio Business course, which was crucial in refining my soft skills, such as effective communication and teamwork in a business context. The insights I gained have been valuable for both my personal and professional growth. I also obtained the Professional Scrum Master 1 (PSM1) certification. This qualification deepened my understanding of agile methodologies.
                    </Typography>
                    <Typography variant="lg/lilac">
                        One of the projects I worked on was developing a mobile application for Sogeti employees. The app provides an overview of all upcoming company activities. Currently, I am participating in Sogeti's front-end learning track, which focuses on foundational web technologies like GIT, HTML, CSS, and JavaScript. This programme is helping me gain essential skills for web development and ensuring adherence to best practices.
                    </Typography>
                </div>

                <div className="mt-4">
                    <Badge className="mr-2">GIT</Badge>
                    <Badge className="mr-2">HTML</Badge>
                    <Badge className="mr-2">CSS</Badge>
                    <Badge className="mr-2">JavaScript</Badge>
                    <Badge className="mr-2">Agile/Scrum</Badge>
                    <Badge className="mr-2">React Native</Badge>
                </div>
            </Card>

            <Card title="Frontend Internship - Networkapp" date="09/2021 - 06/2022">
                <div className="grid grid-flow-row gap-4">

                    <Typography variant="lg/lilac">
                        During my time at Networkapp, I worked on two notable applications. The first was an application where users could design their own meeting rooms, and the second enabled users to create their own narrowcasting screens. I managed the design aspects of the applications, creating user-friendly and visually appealing interfaces with Figma.
                    </Typography>
                    <Typography variant="lg/lilac">
                        For the meeting room project, which I developed with another student, my responsibility was to make it easy for users to design and style their meeting rooms. This involved creating an intuitive interface where users could add and arrange items like furniture and decor to personalise their space.
                    </Typography>
                    <Typography variant="lg/lilac">
                        I independently built the narrowcasting screen project, where my task was to make the existing narrowcasting screens adaptable in a user-friendly manner. Users could customise their displays with various content and layout options.
                    </Typography>
                </div>

                <div className="mt-4">
                    <Badge className="mr-2">GIT</Badge>
                    <Badge className="mr-2">CSS</Badge>
                    <Badge className="mr-2">ReactJS</Badge>
                    <Badge className="mr-2">Figma</Badge>
                    <Badge className="mr-2">Web Design</Badge>
                    <Badge className="mr-2">Agile/Scrum</Badge>
                </div>
            </Card>
        </div>
    )
}