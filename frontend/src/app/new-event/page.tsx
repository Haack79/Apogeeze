import Link from "next/link";
import CreateEventForm from "./CreateEventForm"

const Page = () => {
    return (
        <>
            <div className="fixed top-5 left-8">
                <Link className="p-3 bg-blue-600 rounded-xl hover:bg-blue-400 text-white" href="/events">Back to Chart</Link>
            </div>
            <CreateEventForm />
        </>
    )
}

export default Page;