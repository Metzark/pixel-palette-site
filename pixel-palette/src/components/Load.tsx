import Image from "next/image"
import style from '../styles/Load.module.css';

const Load = () =>{
    return (
    <div className={style.container}>
        <Image className={style.load} src='/loading.webp' alt='loading' width={50} height={50}/>
    </div>);
}

export default Load;