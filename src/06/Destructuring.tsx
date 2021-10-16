import React, {useState} from "react"

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string; name?: string}>
    address : {
        street: {
            title: string
        }
    }
}
type PropsType ={
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}

}

function useDimychState(m: string) {
    return [m, function () {}]
}

function useDimychState2(m: string) {
    return {
        message: m,
        function() {
        }
    }
}

// export const ManComponent: React.FC<PropsType> = ({title, man: {name}}) => {
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title} = props;
    // const {name} = props.man;

    const [message, setMessasge] = useState('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div></div>
        {man.name}
    </div>
}