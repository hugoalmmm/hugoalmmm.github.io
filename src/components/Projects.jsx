import Project from './Project'

const PROJECTS = [
    {
        image : "public/project1.png",
        name: "DESING PORTOFILO",
        skill1 : "HTML",
        skill2 : "CSS",
        skill3 : ""
    },
    {
        image : "public/project2.png",
        name: "E-LEARNING LANDING PAGE",
        skill1 : "HTML",
        skill2 : "CSS",
        skill3 : ""
    },
    {
        image : "public/project3.png",
        name: "TODO WEB APP",
        skill1 : "HTML",
        skill2 : "CSS",
        skill3 : "JAVASCRIPT"
    },
]

function Component() {
    return (
        <>
            <div className='bg-black text-white flex flex-wrap items-center pb-20'>
                <h2 className='ml-8 text-5xl font-bold inline-block'>Projects</h2>
                <a className='ml-auto mr-8 underline inline-block decoration-3 decoration-blue-400' href="#">CONTACT ME</a>
                {
                    PROJECTS.map(project => <Project image={project.image} name={project.name} skill1={project.skill1} skill2={project.skill2} skill3={project.skill3} />)
                }
            </div>
        </>
    )
}

export default Component
