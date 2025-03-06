import Link from "next/link"

const Button = ({status = "primary", disabled, cta_label = "button", onClick=()=>{}, widthFull = false, routeTo='/', }) => {
    const statusMap = {
        "primary": "bg-[#000000] text-white hover:opacity-70  ",
        "primary_no_outline": "text-white",
        "secondary": "border-[1x] border-white hover:opacity-70 text-white",
        "secondary_inverted": "border-[3px] border-black hover:opacity-70",
        "warning": "bg-[#CCB32F] hover:bg-[#CCB32F90]",
        "danger": "bg-[#CC382F] hover:bg-[#CC382F90] text-white",
        "disabled": "bg-[#C5C5C5]"
    }
    return (
        <Link href={routeTo}>
        <div onClick={disabled === false ? onClick : null} className={`${statusMap[status]} font-overused text-[1.2rem] text-center transition-all ${disabled === true ? "cursor-auto" : "cursor-pointer"} font-semibold p-3 px-6 w-full ${widthFull ? "w-full" : "max-w-[400px]"}`}>
            {cta_label}
        </div>
        </Link>

    )
}

export default Button