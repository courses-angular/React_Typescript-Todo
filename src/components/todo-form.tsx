import React, {useRef, useState} from 'react';

interface TodoFormProps{
    onAdd(title: string):void;
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = ({onAdd}) => {


/*
 Using useState Hook ====================================================
 */
    // const [title,setTitle] = useState<string>('')
    // const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    // const onEnter = (event: React.KeyboardEvent) =>{
    //    if(event.key === 'Enter'){
    //        console.log('On Enter',title)
    //        setTitle('')
    //    }
    // }
    //====================================================================
/*
 Using useRef Hook =======================================================
 */
    const ref = useRef<HTMLInputElement>(null)
    const onEnter = (event: React.KeyboardEvent) =>{
       if(event.key === 'Enter'){
           console.log('On Enter',ref.current!.value);
           onAdd(ref.current!.value)
           ref.current!.value = '';
       }
    }
// ========================================================================


    return (
        /*
        Using useState Hook  ====================================================
         */
        // <div className="input-field mt2">
        //     <input type="text" id="title" onChange={(e)=> onInput(e)} placeholder="Add title" value={title} onKeyPress={(e)=>onEnter(e)}/>
        //     <label htmlFor="title" className="active">Add item</label>
        // </div>
        // =====================================================================

        /*
        Using useRef Hook ====================================================
         */
        <div className="input-field mt2">
            <input type="text"
                   id="title" ref={ref}
                   placeholder="Add title"
                   onKeyPress={(e)=>onEnter(e)}/>
            <label htmlFor="title" className="active">Add item</label>
        </div>
        // ===================================================================
    );
};

