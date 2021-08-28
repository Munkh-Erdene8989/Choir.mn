import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tabs from '../component/tabs'
const Home = (props) => {
    return (
        <View>
            <Text>Homescreen bnoo</Text>
            <Tabs props={props}/>
        </View>
    )
}

export default Home

const css = StyleSheet.create({}) 
