import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import {Text2} from "@/components/text";

export default function HomeScreen() {
    const tabs = ['Home', 'Search', 'Notifications', 'Messages', 'Profile', 'Settings', 'Help', 'About', 'Contact', 'Feedback'];
    const [ activeTab, setActiveTab] = useState(0);
    return (
        <View
            style={{flex: 1, flexDirection: 'column', paddingTop:60}}
        >
            {
                tabs.map((tab, index) => (
                    <Pressable key={index} onPress={() => setActiveTab(index)} style={{marginBottom: 20}}>
                        <Text
                            className={`${activeTab === index ? 'text-red-500' : 'text-yellow-500'}`}
                            style={[{fontSize: 20, textAlign: 'center'}]}
                        >
                            {tab}
                        </Text>
                        <Text2
                            className={`${activeTab === index ? 'text-red-500' : 'text-yellow-500'}`}
                        >
                            {tab}
                        </Text2>
                    </Pressable>
                ))
            }
            <Text>{activeTab}</Text>
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
