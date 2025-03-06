import Hyperlink from "../hyperlink";
import SocialRow from "../socialRow";
import Spacer from "../spacer";
import Text from "../text";

const AlertStatement = ({theme, headline="Want to learn about our mission?", hyperlink_text="Read more about us on our blog.", hyperlink="https://google.com"}) => {
    return (
        <div className="w-full md:p-4 bg-[#FDF4DD]">
            <div className="mx-auto max-w-[1280px] md:px-4">
                <div className="flex justify-between">
                    <div className="md:flex items-center gap-2">
                        <div className="hidden md:block">
                        <Text color={"#000"} level={"6"} text={headline}></Text>
                        </div>
                        <Hyperlink hyperlink_text={hyperlink_text} hyperlink={hyperlink} theme={theme}><Text level={"6"} text={hyperlink_text} color={"#000"}></Text></Hyperlink>
                    </div>
                    <SocialRow></SocialRow>
                </div>
            </div>
        </div>
    )
}

export default AlertStatement;