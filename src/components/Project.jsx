function Component({ image, name, skill1, skill2, skill3 }) {
    return (
        <div className="ml-auto mr-auto mt-8 mb-8 items-left justify-center gap-4 bg-black rounded-none">
            <img src={image} alt="" />
            <h2 className="flex flex-col text-left mb-2 mt-2 font-bold text-2xl text-white">{name}</h2>
            <div className="flex flex-row mb-2">
                <p className=" flex flex-col items-center mr-3 font-small text-1xl text-white">{skill1}</p>
                <p className=" flex flex-col items-center mr-3 font-small text-1xl text-white">{skill2}</p>
                <p className=" flex flex-col items-center font-small text-1xl text-white">{skill3}</p>
            </div>
            <a className='ml-auto mr-8 underline inline-block decoration-3 decoration-blue-400' href="#">VIEW PROJECT</a>
            <a className='ml-auto mr-8 underline inline-block decoration-3 decoration-blue-400' href="#">VIEW CODE</a>
        </div>
    )
}

export default Component
