const Sidebar = () => {
    return (
        <>
            <div className="md:flex flex-col w-64 bg-gray-800">
                <div className="flex items-center justify-center h-16 bg-gray-900">
                    <span className="text-white font-bold uppercase">Todo Application</span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">
                        <a href="/" className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
                            Dashboard
                        </a>
                        <a href="/tasks" className="flex items-center px-4 py-2 mt-2 text-white hover:bg-gray-700">
                            Tasks
                        </a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar
