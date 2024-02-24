import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import { Input } from '@my/ui'
import { TextInput } from 'react-native'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="700">{`User ID: ${id}`}</Paragraph>
      <Input
        onBlur={event => console.log('tamagui onBlur', event.nativeEvent.text)}
        onEndEditing={event => console.log('tamagui onEndEditing', event.nativeEvent.text)}
      />
      <TextInput
        style={{borderColor: "red", borderWidth: 1}}
        onBlur={event => console.log('rnw onBlur', event.nativeEvent.text)}
        onEndEditing={event => console.log('rnw onEndEditing', event.nativeEvent.text)}
      />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
