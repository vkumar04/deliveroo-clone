import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	UserIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
export default function HomeScreen() {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	return (
		<SafeAreaView className="bg-white pt-5">
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<Image
					className="h-7 w-7 bg-gray-300 rounded-full p-4"
					source={{ uri: "https://links.papareact.com/wru" }}
				/>

				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00ccbb" />
					</Text>
				</View>
                <UserIcon size={35} color="#00ccbb" />
			</View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon size={20} color="#00ccbb" />
                    <TextInput placeholder="Restraunts and Cuisines" keyboardType="default" />
                </View>
                <AdjustmentsVerticalIcon size={35} color="#00ccbb" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100">
                <Categories />
            </ScrollView>
		</SafeAreaView>
	);
}
