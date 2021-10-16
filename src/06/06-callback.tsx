import React, {ChangeEvent, MouseEvent} from "react"

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onAgeChanged = () => {
        console.log('age changed')
    }

    const onNameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('name changed' + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea onChange={onNameChanged}
                  onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={'number'}/>

        <button name='delete' onClick={search}>search</button>

    </div>
}