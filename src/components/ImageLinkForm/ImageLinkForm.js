import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm=()=>{
    return(
<div>
    <p className='f3'>
        {'This smart eye will detect faces in your pictures. Give it a try.'}
    </p>
    <div className='center'>
        <div className=' form center pa4 br3 shadow-5'>
        <input className='f4 pa2 w-70 center' type="text"/>
        <button className='button-1 w-30 br2 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
       
    </div>
</div>
    );
}



export default ImageLinkForm;
