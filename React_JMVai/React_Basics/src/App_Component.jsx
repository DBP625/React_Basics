function App_Component() {
    return (
        <div className="">
            <header className="bg-blue-600 text-white p-8 align-middle">
                <p className="text-xl mb-4">I am a React Person</p>
                <Person />
            </header>
        </div>
    );
}

function Person(){
    return <h1 className="text-2xl font-bold text-yellow-300">Name: Ultron the Doom</h1>
}

export default App_Component