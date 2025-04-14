import { View, type ViewProps } from "react-native";

export function Center({children}:ViewProps){
    return <View style={{alignItems:'center',justifyContent:'center',flex:1}} >{children}</View>
}