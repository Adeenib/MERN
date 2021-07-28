import React from 'react'
import $ from 'jquery'

const ShowTabs = (props) => {


    const handleClick = (e) => {
        e.preventDefault()

        const el = e.target.attributes.value.value


        $(".tab").css({ "background-color": "white", "color": "black" })
        $(e.target).css({ "background-color": "black", "color": "white" })
        props.renderContent(el)

        // const arr = document.getElementsByClassName("tab");
        // for (let i = 0; i < arr.length; i++) {
        //     arr[i].style.backgroundColor = "white";
        //     arr[i].style.color = "black";
        // }
        // e.target.style.backgroundColor = "black"
        // e.target.style.color = "white"
        console.log(e)


    }

    return (
        <table className=" table table-bordered">
            <tr>
                {props.lest.map((item, index) => <th className="tab" key={index} value={index} onClick={(e) => handleClick(e)} style={{ cursor: 'pointer' }}>Tab{index}</th>
                )}
            </tr>
        </table>
    )
}

export default ShowTabs
