import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import {tshirtArray, workArray, workshopArray} from "../../helpers/imageArrays"
import Nav from "../nav/nav";
import Items from "../items/items";
import {history} from "../../helpers/history";
import './Previewer.css'

// Displays previews
const Previewer = () => {

    const [url, setUrl] = useState('')
    const [array, setArray] = useState({})
    const [isPrint, setIsPrint] = useState(false)

    useEffect(() => {
        const path = history.location.pathname;
        switch (path) {
            case '/works':
                setUrl('works')
                setArray(workArray)
                break
            case '/prints':
                setUrl('prints')
                setArray(workshopArray)
                setIsPrint(true)
                break
            case '/tshirts':
                setUrl('tshirts')
                setArray(tshirtArray)
                setIsPrint(true)
                break
            default:
                break
        }
    }, [])

    const previews = Object.keys(array).map((previewKey, index) => {
        let destination
        //Redirects to tshirts when on prints/0
        if (url === 'prints' && index === 0) destination = '/tshirts'
        else destination = `/${url}/${index}`
        const preview = array[previewKey]
        return <Link to={destination}>
            <Items cover={preview.cover} alt={`${preview.title}_img`} title={preview.title}/>
        </Link>
    })

    return <div>
        <Nav print={isPrint}/>
        <div className="preview-container">
            {previews}
        </div>
    </div>
}

export default Previewer;
