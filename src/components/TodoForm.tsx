import React, { useState ,useRef } from 'react'

interface TodoFormProps{
  onAdd(title:string):void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('')
  //
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value)
  // }
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter'){
      props.onAdd(ref.current!.value);
      ref.current!.value=''
      // console.log(title);
      // setTitle('')
    }
  }

  const ref =  useRef <HTMLInputElement>(null)
  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        // value={title}
        // onChange={handleChange}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  )
}
