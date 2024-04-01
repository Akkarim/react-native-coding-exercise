import {StyleProp, ViewStyle} from "react-native";
import { SvgXml } from "react-native-svg";

export function BackButton({style}: {style?: StyleProp<ViewStyle>}) {
    return (
        <SvgXml
            style={style}
            xml={`
                <svg xmlns="http://www.w3.org/2000/svg" width="48.45" height="48.45" viewBox="0 0 48.45 48.45">
                    <path data-name="Back Button" d="m27.388 24.865-5.808-6.324a1.291 1.291 0 0 1 0-1.812 1.263 1.263 0 0 1 1.792 0l7.083 7.226a1.287 1.287 0 0 1 0 1.809l-7.084 7.226a1.256 1.256 0 0 1-1.792 0 1.287 1.287 0 0 1 0-1.809l5.809-6.318zM24.865.64A24.225 24.225 0 1 1 .64 24.865 24.225 24.225 0 0 1 24.865.64zm0 45.305a21.08 21.08 0 1 0-21.08-21.08 21.081 21.081 0 0 0 21.08 21.08z" transform="rotate(180 24.545 24.545)" style="fill:#f4ddb5"/>
                </svg>
            `}
      />
    )
}