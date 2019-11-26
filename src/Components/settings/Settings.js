import React,{useState} from 'react';
import MainChannelRenderer from '../Channels/MainChannelRenderer';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import './settings.css'


const Button = styled(Link)`

background:green;
color:white;
width:45vw;
height: 10vh;
:active{
    text-decoration:none;

}
:visited{
text-decoration:none;
color:white;
}
`


export default function Settings() {
    const [volume,setVolume] = useState()
    const VolumeHandler = (event) => {
        console.log(event.target.value)
        return setVolume(parseInt(event.target.value))
    }
    return (
        <div>
                <div>
                    Set Volume
                    <select id="Volume" onChange={VolumeHandler}>
                        <optgroup label = "Adjust the volume">
                            <option value="0">0%</option>
                            <option value="10">10%</option>
                            <option value="20">20%</option>
                            <option value="30">30%</option>
                            <option value="40">40%</option>
                            <option value="50">50%</option>
                            <option value="60">60%</option>
                            <option value="70">70%</option>
                            <option value="80">80%</option>
                            <option value="90">90%</option>
                            <option value="100">100%</option>
                        </optgroup>
                    </select>
                    <Button to="/">Go Back to Main Menu</Button>

                            <div className="Display-None">
                            <MainChannelRenderer  volume={volume}/>
                            </div>
                    
                </div>
        </div>

    )
}
