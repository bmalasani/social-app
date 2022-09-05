import React from 'react'
import {observer} from 'mobx-react-lite'
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native'
import {useStores} from '../../../state'
import {LinkActionsModel} from '../../../state/models/shell'

export const Link = observer(function Link({
  style,
  href,
  title,
  children,
}: {
  style?: StyleProp<ViewStyle>
  href: string
  title?: string
  children?: React.ReactNode
}) {
  const store = useStores()
  const onPress = () => store.nav.navigate(href)
  const onLongPress = () => {
    store.shell.openModal(new LinkActionsModel(href, title || href))
  }
  return (
    <TouchableOpacity style={style} onPress={onPress} onLongPress={onLongPress}>
      {children ? children : <Text>{title || 'link'}</Text>}
    </TouchableOpacity>
  )
})