import {Image, ImageBackground, Text, View} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {icons} from '../../assets/constants/icons'

const TabIcon = ({focused, icon, title}: any) => {
    if (focused) {
        return (
            <ImageBackground source={require('../../assets/images/highlight.png')}
                             className={"flex flex-1 flex-row w-full min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"}>
                <Image source={icon} tintColor="#151312" className={"size-5"}/>
                <Text className={"text-secondary text-base font-semibold ml-2"}>{title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View className={"size-full justify-center items-center mt-2 rounded-full"}>
            <Image source={icon} tintColor="#A8B5DB" className={"size-5"}/>
        </View>
    )
}

const _Layout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                backgroundColor: "#0f0D23",
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: "#0f0D23",
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({focused}) =>
                        <View>
                            <TabIcon focused={focused} icon={icons.home} title={"Home"}/>
                        </View>
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    headerShown: false,
                    title: "Search",
                    tabBarIcon: ({focused}) =>
                        <View>
                            <TabIcon focused={focused} icon={icons.search} title={"Search"}/>
                        </View>
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    headerShown: false,
                    title: "Saved",
                    tabBarIcon: ({focused}) =>
                        <View>
                            <TabIcon focused={focused} icon={icons.save} title={"Saved"}/>
                        </View>
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: ({focused}) =>
                        <View>
                            <TabIcon focused={focused} icon={icons.person} title={"Profile"}/>
                        </View>
                }}
            />
        </Tabs>
    )
}

export default _Layout