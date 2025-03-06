import Button from "../button"

const Newsletter = () => {
    return (
        <div className="flex gap-4 w-full max-w-[520px]">
            <div className=" bg-[#F4F8FA] p-2 w-full border-1">
            <input type="text" className="p-2 bg-[#F4F8FA] outline-none w-full" placeholder="Enter your Email"></input>
            </div>
            <Button status="primary" cta_label="Submit"></Button>
        </div>
    )
}

export default Newsletter