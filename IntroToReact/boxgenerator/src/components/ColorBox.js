import React, { useState } from 'react'

const ColorBox = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addDiv(color, width, height);
        setColor("")
        setWidth(0)
        setHeight(0)

    };
    const handleColor = (e) => {
        setColor(e.target.value);

    }
    const handleWidth = (e) => {
        setWidth(e.target.value);

    }
    const handleHeight = (e) => {
        setHeight(e.target.value);

    }
    return (
        < form onSubmit={handleSubmit} >
            <label>Color</label>
            <input type="text" value={color} onChange={handleColor} />
            <label>width</label>
            <input type="text" value={width} onChange={handleWidth} />
            <label>height</label>
            <input type="text" value={height} onChange={handleHeight} />

            <button >Submit</button>
        </form >
    )
}

export default ColorBox;
