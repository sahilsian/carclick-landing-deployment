import Link from "next/link"
import Logo from "../logo"
import Text from "../text"

const NavigationIdentity = ({heading="Rec N Roll", subheading="Campbellton, NB"}) => {
    return (
        <Link href={"/"}>
            <div className="flex gap-5">
                <div className="border-1px">
                    <Logo></Logo>
                </div>
                <div className="flex flex-col justify-center">
                    <Text color={"#000000"} level={"4"} text={heading}></Text>
                    <Text color={"#000000"} level={"6"} text={subheading}></Text>
                </div>
            </div>
        </Link>
    )
}

export default NavigationIdentity