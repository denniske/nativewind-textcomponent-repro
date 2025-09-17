import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {useRef} from "react";

export default function HomeScreen() {
    const flatListRef = useRef<FlatList>(null);

    const scrollToOffset = (offset: number) => {
        console.log('scrollToOffset', offset);
        flatListRef.current?.scrollToOffset({offset, animated: false});
    }

    return (
        <View
            style={{flex: 1, flexDirection: 'column', paddingTop:60}}
        >
            <Pressable onPress={() => scrollToOffset(200)} style={{backgroundColor:'lightblue', padding: 10, margin: 10, borderRadius: 5}}>
                <Text>Scroll To Offset 200</Text>
            </Pressable>
            <FlatList
                ref={flatListRef}
                style={{flex: 1}}
                data={[...Array(100).keys()]}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => (
                    <View style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
                        <Text style={{}}>Item {item}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
