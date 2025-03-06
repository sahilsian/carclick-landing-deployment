import Img from "../image"
import { Navigation_Config } from "../../constants/configs/site"

const Logo = ({}) => {
    return (
        <div>
            <div >
                <Img height={Navigation_Config.navigation_logo.height} width={Navigation_Config.navigation_logo.width} src={Navigation_Config.navigation_logo.src}
                alt={Navigation_Config.navigation_logo.alt}
                ></Img>
            </div>
        </div>
        
    )
}

export default Logo