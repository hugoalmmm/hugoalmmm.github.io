function Component({ name, yearsOfXp }) {
    return (
        <div className="ml-auto mr-auto mb-8 text-center items-center justify-center gap-4 bg-black rounded-none">
            <h2 className="flex flex-col items-center p-7 rounded-2xl font-bold text-5xl text-white">{name}</h2>
            <p  className=" flex flex-col items-center p-2 rounded-2xl font-small text-2xl text-white">{yearsOfXp} Years Experience</p>
        </div>
    )
}

export default Component
