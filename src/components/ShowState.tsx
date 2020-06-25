import React from 'react'

interface OwnProos {
  inputValue: string
  selectValue: string
  clickCount: number
}

type Props = OwnProos

export const ShowState: React.FC<Props> = props => {
  return(
    <div>
      <label>[states]</label>
      <div>{props.inputValue}</div>
      <div>{props.selectValue}</div>
      <div>{props.clickCount}</div>
    </div>
  )
}