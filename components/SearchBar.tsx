import {Image, TextInput, View} from "react-native";
import React from "react";
import {icons} from "@/assets/constants/icons";

interface Props {
    onPress: () => void;
    placeHolder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const SearchBar = ({onPress, placeHolder, value, onChangeText}: Props) => {
    return (
        <View className={"flex-row items-center bg-dark-200 rounded-full px-5"}
              style={{ height: 48 }}>
            <Image source={icons.search} className={"size-5"} resizeMode={"contain"} tintColor="#AB8BFF"/>
            <TextInput
                clearButtonMode={"always"}
                onPress={onPress}
                value={value}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                placeholderTextColor={"#a8b5db"}
                className={"flex-1 ml-2 text-white"}/>
        </View>
    )
}

export default SearchBar;
