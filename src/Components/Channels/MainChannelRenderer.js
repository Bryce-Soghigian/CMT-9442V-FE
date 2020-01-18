import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import DefaultTextGlitch from '../ThreeEffects/DefaultGlitch/DefaultTextGlitch'
import DefaultGlitch from '../ThreeEffects/DefaultGlitch/DefaultGlitch'
import ComicBookEffect from '../ThreeEffects/ComicBook/ComicBookEffect'
import ComicBookEffectText from '../ThreeEffects/ComicBook/ComicBookEffectText'
import CreepyLightText from '../ThreeEffects/CreepyLight/CreepyLightText'
import ComicBookNoGeo from '../ThreeEffects/ComicBook/ComicBookNoGeo'
import styled from 'styled-components'
import AxiosWithAuth from './AxiosWithAuth'
import Swal from 'sweetalert2'

const Div = styled.div`
z-index:69;
position: absolute;
right:0;
left:0;
  opacity: 0.99;
  filter: alpha(opacity=30);
width:100vw;
height:100vh;
border:10px;
`
// haha lol
export default function MainChannelRenderer(props) {
    const [state,setState] = useState({})
    const [loading, setLoading] = useState(false)
    
    const [move, setMove] = useState(undefined)


    useEffect(() => {
        AxiosWithAuth().get("https://ourtvgame.herokuapp.com/api/adv/initialize")
            .then((res) => {

                setState(res.data)
                setLoading(true)
            })
            .catch((err) => {
                console.error(err)
            })
            Axios.post("move",state)
            .then((res) => {
                setState(res.data)
                
                setLoading(true)
            })
 

    }, [])
 
    useEffect(() => {
        if(move !== undefined){
        let values = {"direction":move,"id":state.channel}
        console.log(values,"this is values")
        AxiosWithAuth().post("https://ourtvgame.herokuapp.com/api/adv/move",values)
            .then((res) => {
                setState(res.data)
                setLoading(true)
                setMove(undefined)
            }).catch((err) => {
                console.error(err)
            })
        }
    }, [move])

    let tbd = "";
   
    const KeyHandler = (e) => {
        //If keycode is a number and state.channel === 45 
        //then allow input of our password
        
        // if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) { 
        //     // 0-9 only
        // }

        /*
        if(((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))&&(state.channel === 45)){
        while(input.length !===){

        }
            //Look am me 
        //Secret password
        }



        */
         //==================Vlad===========================//
        console.log("type is", typeof e.key, "and key is", e.key)
        
        let countingDown;
        
        function startCountdown(){
            countingDown = true
            setTimeout(() => {
                if(tbd === "12447"&& state.channel === 45){
                // If number is secret code
                    Swal.fire({

                        icon:'success',
                        position: 'center',
                        title: 'https://cmt-9442v1.netlify.com/12447',
                        showConfirmButton: false,
                        timer: 10000
                      })
                } else {
                // If number is a normal channel
                    let instructions = {
                        "direction": "u",
                        "id": parseFloat(tbd)-1
                    }
                    AxiosWithAuth().post("https://ourtvgame.herokuapp.com/api/adv/move", instructions)
                        .then((res) => {
                            setState(res.data)
                            setLoading(true)
                            setMove(undefined)
                        })
                        .catch((err) => {
                            console.error(err)
                        })
                }
                // Countdown cleanup
                console.log("HERE SHE IS", parseFloat(tbd))
                countingDown = false
                tbd = ""
            }, 3000);
        }
        if(e.key === "ArrowUp"){
            setMove("u")
        }else if(e.key === "ArrowDown"){
            setMove("d")
        }else{
            if (!countingDown){
                startCountdown()
            }
            tbd += e.key
        }
        console.log(move)
    }



if(loading===false){




    return(








        <div>
          l̷̛͔͔̞̪̣̱̫̣̑̽̃́͐̎͒͋̓͆̄͌̽̚̕͜o̷̘͍̯̎͋̊̎͛͛̉̆̌͋̊̓̅̂͝ǎ̵̢̢̠͙̙̥̟̭̻̻̘̠̗̲͔̈́̋̊̌̾͒̌̊͂̓̃̌̔̾̉̎̅d̴̜̣́̆͂̑̉͂͑̕į̷̛͎̪̯̣͖͍̯͚̳̪͖́̽̑͂̈́̎̃̅͑̎̒̾͛̚̕̚̚n̴̢̢͎̝̬̩̖̤͈̥͈̣͎̊̓̄͂͛̈́͑̀̐͊̇̅̐̓̉̓g̸̛̛͉̳̣̤̭̟̥͍͔̮̜̔͋̎̈́̒͂́͛̇̈͆̈́͂̂̕ͅ ̸̭̲͔͚͍͐̀̂͂̓̽̄͜͝ç̷̡̛̲̣̣̼̺̤͕͚̳̰̝͎̪̹̭͓͗̈́̐̓͌͗̆̅̍̀̇͌̓̓̑͝͠ͅḧ̴̲̤̞̰̙̩̘͎̭̠͓̦́̋̈̈̎̍͋̉̒́̈̇͘͘͝ḁ̵̛̰͊̎͌̃͋ņ̸̨̢̧̡̤̪̺̰̣͉͓͗̄̒͌̒̅͑̎̈́̿̉̚͝ṋ̶̨̢̡̧̝͕̣̻̼͔̲̝̤̜͚̿̇͊̇̒̌͌ͅḛ̷̛̻̺̝̙̙̤̟͓̯̦͌̾̾̽̀̀̕͝ͅḻ̷̢̛̛͕͚͆̑̄͒̎̏͐̕̚s̵̢̢̛̳̼̣͓͙͔̼̻̠͍͂͋̍͌̄̈͒̓́͗͑̈̇͆́̄̿̕̚͝
        </div>





    )
    }else if(state.glitchtype==="static"){
    return(
        <Div onKeyDown={e => {KeyHandler(e)}} tabIndex="1">            
            <DefaultGlitch background={state.background} text={state.text} channel={state.channel} audio={state.audio} volume={props.volume}/>
            {/* <DefaultClass background={state.background} text={state.text} channel={state.id}/> */}
        </Div>
        
    )
}else if(state.glitchtype ==="DefaultTextGlitch"){
return (
    <Div
      onKeyDown={e => {
        KeyHandler(e);
      }}
      tabIndex="1"
    >
        <DefaultTextGlitch background={state.background} text={state.text} channel={state.id} audio={state.audio} volume={props.volume}/>
        {/* <DefaultPurple background={state.background} text={state.text} channel={state.id}/> */}
    </Div>
)
}else if (state.glitchtype === "ComicBook"){
    return(
        <Div
            onKeyDown={e => {
                KeyHandler(e);
            }}
            tabIndex="1"
        >

            <ComicBookEffect background={state.background} text={state.text} channel={state.id} audio={state.audio} volume={props.volume}/>
        </Div>
    )
}else if(state.glitchtype === "ComicBookNoGeo"){
    return (
        <Div
            onKeyDown={e => {
                KeyHandler(e);
            }}
            tabIndex="1"
        >
            
            <ComicBookNoGeo background={state.background} text={state.text} channel={state.id} audio={state.audio} volume={props.volume}/>
        </Div>
    )
}else if(state.glitchtype === "ComicBookText"){
    return (
        <Div
            onKeyDown={e => {
                KeyHandler(e);
            }}
            tabIndex="1"
        >
            
            <ComicBookEffectText background={state.background} text={state.text} channel={state.id} audio={state.audio} volume={props.volume}/>
        </Div>
    )
}else if(state.glitchtype === "CreepyLightText"){
    return(
        <Div
            onKeyDown={e => {
                KeyHandler(e);
            }}
            tabIndex="1"
        >
            <CreepyLightText background={state.background} text={state.text} channel={state.id} audio={state.audio} volume={props.volume}/>
        </Div>

    )
}

}



