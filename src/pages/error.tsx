
const Error: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-500">Error</h1>
            <p className="text-xl text-gray-500">Something went wrong</p>
            <a href='/'
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Go back to Home
            </a>
        </div>
    )
}