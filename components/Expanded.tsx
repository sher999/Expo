import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, View, type ViewProps } from 'react-native';


export interface ExpandedViewProps extends ViewProps {
    lightColor?: string;
    darkColor?: string;
    border?: number
}

export function ExpandedView({ style, lightColor, darkColor, border, ...otherProps }: ExpandedViewProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <View style={[{ backgroundColor, borderWidth: border ,borderColor:"#000000" }, style, styles.container]} {...otherProps} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})