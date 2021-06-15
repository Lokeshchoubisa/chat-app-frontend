import React from 'react'

export default function CreateUser(props) {
    const {onCreateUser,value,onChange}=props;
    return (
        
<header className="app-header">

<div className="app-name b-500 primaryColor">My chat</div>
<form >
 
  <input type="text" value={value} onChange={(e)=>onChange(e)} autoFocus />
  <button onClick={()=>onCreateUser()} type="submit">Start chat</button>

</form>

{/* <audio src="./Dil_De_Showroom-Parmish_Verma-(JattZone.com).mp3" ></audio> */}
{/* <figure>
    
    <audio id="audio"
        controls
        src="https://r7---sn-ci5gup-wqie.googlevideo.com/videoplayback?expire=1623790760&ei=SMDIYLv0Ocygz7sP94SugAU&ip=27.63.87.223&id=o-APVKnZj38F9MiVXtfVyKQ0k9xhSv26z2gUJYWyoqFNu3&itag=251&source=youtube&requiressl=yes&mh=Ql&mm=31%2C29&mn=sn-ci5gup-wqie%2Csn-ci5gup-qxay&ms=au%2Crdu&mv=m&mvi=7&pl=19&initcwndbps=173750&vprv=1&mime=audio%2Fwebm&ns=tOpO49lJvUzFAMBYvxLu9kIF&gir=yes&clen=4172349&dur=263.241&lmt=1574660327680872&mt=1623768771&fvip=7&keepalive=yes&fexp=24001373%2C24007246&beids=9466586&c=WEB&txp=5531432&n=U_YiKlz4p1KJEQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAOChvqu75T3H5odRbc9ykOsfzCxboaUfgcvG-KKQTiGPAiEAgbePVm83AQoKPUvASxk2CZ0LIgevdoX9IJc0aJBtVh4%3D&alr=yes&sig=AOq0QJ8wRQIhANOsdHZTDpNttAnujA9Z3YzcCyfXodXLJSYqd7mqPGWrAiBoMvDSTFET6_bib5CnrVAOKWJtJsLUuliCwXUBGrM3dg%3D%3D&cpn=5JlFzkXscw5dc7Pg&cver=2.20210613.07.00">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure> */}


</header>
    )
}


      