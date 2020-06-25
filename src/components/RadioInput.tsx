import React from 'react'

interface OwnProps {
  title: string
  selectValue: string
  onChangeValue: Function
}

type Props = OwnProps
export const RadioInput: React.FC<Props> = props => {
  return(
    <div>
      <span>{props.title}</span>
      <input type='radio' id='1' name='radio-droup' value='radio1' onChange={(e) => props.onChangeValue(e.target.value)}><label></label>1</input>
      <input type='radio' id='2' name='radio-droup' value='radio2' onChange={(e) => props.onChangeValue(e.target.value)}><label></label>2</input>
      <input type='radio' id='3' name='radio-droup' value='radio3' onChange={(e) => props.onChangeValue(e.target.value)}><label></label>3</input>
    </div>
  )
}