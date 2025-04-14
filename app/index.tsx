import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Center } from '@/components/Center'
import { ThemedText } from '@/components/ThemedText'
import { ExpandedView } from '@/components/Expanded'

export default function Index() {
  const [value,setvalue] = React.useState('')
  const textRef = React.useRef<any>()

  const textToRef = (text:string) =>{
    textRef.current.value = text
  }
  console.log(textRef.current?.value);
  
  return (
    <ExpandedView>
      <Center>
        <ThemedText type='title'>{value ?  value : 'Hello, World!'}</ThemedText>
        <TextInput ref={textRef} placeholder='hello!!' onChangeText={textToRef}  onBlur={()=>setvalue(textRef.current.value)} />
      </Center>
    </ExpandedView>
  )
}

const styles = StyleSheet.create({})