import Skill from './Skill'

const SKILLS = [
    {
        name: "HTML",
        yearsOfXp: 4
    },
    {
        name: "CSC",
        yearsOfXp: 6
    },
    {
        name: "JavaScript",
        yearsOfXp: 8
    },
]

function Component() {
    return (
        <>
            <div className='bg-black'>
                <hr className='text-white mb-5' />
                {
                    SKILLS.map(skill => <Skill name={skill.name} yearsOfXp={skill.yearsOfXp} />)
                }
                <hr className='text-white mt-10' />
            </div>
        </>
    )
}

export default Component
