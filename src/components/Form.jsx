function Component() {
    return (
        <div className="bg-gray-700 text-white text-center pt-5 pb-30">
            <h2>Contact</h2>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            <form>
                <div>
                    <input type="text" placeholder="NAME"/>
                </div>
                <div>
                    <input type="text" placeholder="EMAIL"/>
                </div>
                <div>
                    <input type="text" placeholder="MESSAGE"/>
                </div>
                <input type="submit" value="SEND MESSAGE" />
            </form>
            <hr />
        </div>
    )
}

export default Component
