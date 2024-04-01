import {StyleProp, ViewStyle} from "react-native";
import { SvgXml } from "react-native-svg";

export function FilterIcon({style}: {style?: StyleProp<ViewStyle>}) {
    return (
        <SvgXml
            style={style}
            xml={`
                <svg xmlns="http://www.w3.org/2000/svg" width="15.913" height="16" viewBox="0 0 15.913 16">
                    <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6s3.72-4.8 5.74-7.39A1 1 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z" transform="translate(-4.038 -4)" style="fill:#193247"/>
                </svg>
            `}
      />
    )
}