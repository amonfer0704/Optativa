import './ButtonOK.css';
import '/src/assets/react.svg';
//import styles from './ButtonOK.module.css';

export function ButtonOK(){
    function pushButton(e){
        console.dir(e.target);
        console.dir(e.currentTarget);
    }
    return(
        <>
            <button onClick={pushButton}>
                <span>
                    <label>Click me!</label>
                </span>
                <img src={location.href + "src/assets/react.svg"} alt="logo-react"></img>
            </button>
            <h5 className='h5Class'>Info button</h5>
        </>
        

    )
}