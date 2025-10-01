
import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

export const BugButton = () => {
    const [error, setError] = useState(false)
    const throwError = () =>{
        setError(true)
    }
    useEffect(()=>{
        if(error){
            
            throw new Error()
        }
    },[error])
    return (
        <Button 
            // eslint-disable-next-line i18next/no-literal-string
            onClick={throwError}>
            throw error
        </Button>
    )
}