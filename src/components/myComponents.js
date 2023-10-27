import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View as OriginView, Text as OriginText, TouchableOpacity, Pressable } from "react-native";
import { styles, styleConcat } from './styles'

export function View(props) {
    return (
        <OriginView style={props.style}>{props.children}</OriginView>
    );
}

export function Text(props) {
    const style = styleConcat(styles.fontStyle, props.style)
    return (
        <OriginText style={style}>{props.children}</OriginText>
    );
}

export function Display(props) {
    const style = styleConcat(styles.display, props.style)
    return (
        <View style={style}>{props.children}</View>
    );
}

export function FAIcon(props) {
    const style = styleConcat(styles.icon, props.style)
    return (
        <TouchableOpacity onPress={props.onPress}>
            <FontAwesomeIcon
                icon={props.icon}
                style={style}
                size={props.size || 0}
            />
        </TouchableOpacity>
    );
}

export function Button(props) {
    const style = styleConcat(styles.button, props.style)
    if(props.clickOpacity == "true")
        return (
            <TouchableOpacity
                onPress={props.onPress}
                style={style}>
                    {props.children}
            </TouchableOpacity>
        );
    else
        return (
            <Pressable
                onPress={props.onPress}
                style={style}>
                    {props.children}
            </Pressable>
        );
}

export function Keyboard(props) {
    return (
        <Button
            onPress={() => props.getKey(props.value)}
            style={props.style}
            clickOpacity="true">
            <Text style={props.textStyle}>
                {props.value}
            </Text>
        </Button>
    );
}