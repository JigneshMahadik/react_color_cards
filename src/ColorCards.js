import './App.css';

export function ColorCards({prop}) {

    const topSec = {
        backgroundColor : prop.hex_code,
        height : "75%",
        borderTopLeftRadius: "1rem"
    }
    const bottomSec = {
        // marginTop:"-17px",
        paddingTop:"0px",
        height: "25%",
        padding : "0.5rem"
        // width: "100%",
        // backgroundColor: "red"
    }
    const textColor = {
        color: prop.hex_code
    }

    return(
        <div id="color-card">
            <div style={topSec}></div>
            <div style={bottomSec}>
                <span>{prop.hex_code}</span>
                <br/>
                <span style={textColor}>{prop.name}</span>
            </div>
        </div>
    )    
}