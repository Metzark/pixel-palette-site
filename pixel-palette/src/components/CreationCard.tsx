import style from '../styles/CreationCard.module.css';

const handleDownloadCreation = (url: string, name: string) =>{
    fetch(url).then(response => response.blob()).then(blob =>{
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${name}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
}

const CreationCard = (props: any) =>{
    let [colors, data] = props.data.split(':');
    colors = colors.split('|');
    data = data.split('|');
    data = data.map((d: any) => d.split(' '));
    data = [].concat(...data);
    return (<div className={style.card}>
        <div className={style.creationGrid}>
            {data.map((d: any, i: number) =>{
                return (<div key={i} style={{'backgroundColor': `${colors[d]}`}}></div>);
            })}
        </div>
        <div className={style.creationInfo}>
            <p className={style.infoName}>{props.name}</p>
            <p className={style.infoAuthor}>By {props.author}</p>
            <button className={style.download} onClick={() => handleDownloadCreation(props.url, props.name)}>Download Creation</button>
        </div>
        </div>);
}

export default CreationCard;