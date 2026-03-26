import { Path, SkPath } from "@shopify/react-native-skia";
import { SharedValue } from "react-native-reanimated";


export type SkiaPaintType = {
    paintPath: SharedValue<SkPath>,
    paintColor?: string,
}

export default function SkiaPaint ({ paintPath: paintPath, paintColor: paintColor }: SkiaPaintType) {
    return (
        <Path path={paintPath} color={paintColor} style={"fill"} />
    )
}
