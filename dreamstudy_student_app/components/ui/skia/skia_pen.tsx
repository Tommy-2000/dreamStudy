import { AnimatedProp, Path, SkPath } from "@shopify/react-native-skia";
import { SharedValue } from "react-native-reanimated";


export type SkiaPenType = {
    penPath: SharedValue<SkPath>,
    penColor?: string,
    penStroke?: AnimatedProp<"stroke" | "fill" | undefined>,
    penStrokeWidth?: number,
    penStrokeCap?: AnimatedProp<"butt" | "round" | "square" | undefined>,
}

export default function SkiaPen({ penPath: penPath, penColor: penColor, penStroke: penStroke, penStrokeWidth: penStrokeWidth, penStrokeCap: penStrokeCap }: SkiaPenType) {
    return (
        <Path path={penPath} color={penColor} style={penStroke} strokeWidth={penStrokeWidth} strokeCap={penStrokeCap} />
    )
}
