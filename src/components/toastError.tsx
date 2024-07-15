
interface ToastErrorProps {
    message: string;
    setError: (error: Error | null) => void;
}

export default function ToastError({ message, setError }: ToastErrorProps) {
    return (
        <div id="sticky-banner" tabIndex={-1} className="fixed top-0 start-0 z-50 h-12 flex justify-between w-full border-b text-white border-gray-200 bg-red-800 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center mx-auto">
                <div id="alert-2" className="flex items-center text-sm font-normal " role="alert">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div className="ms-3 text-sm font-medium">
                        {message}
                    </div>
                </div>
            </div>
            <div className="flex items-center pr-3">
                <button data-dismiss-target="#sticky-banner" onClick={() => setError(null)} type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center hover:bg-neutral-dark hover:text-text rounded-lg text-sm p-1.5">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close banner</span>
                </button>
            </div>
        </div>
    );
}
