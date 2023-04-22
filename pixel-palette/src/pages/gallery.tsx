import style from '../styles/Gallery.module.css';
import Head from 'next/head';
import Nav from '../components/Nav';
import CreationCard from '../components/CreationCard';
import { creations } from '../../lib/airtable';

export async function getStaticProps(){
    try{
        const findCreations: any = await creations.select().all();
        if(findCreations.length !== 0){
            let gridData: string[] = [];
            for(let idx: number = 0; idx < findCreations.length; idx++){
                let url: any = findCreations[idx]['fields']['File'][0]['url'];
                let response = await fetch(url, {mode: 'no-cors'});
                gridData.push(await response.text());
            }
            const creations = findCreations.map((creation: any, i: number) => {
                return {Name: creation["fields"]['Name'],
                        Author: creation["fields"]['Author'],
                        Data: gridData[i],
                        Url: creation["fields"]['File'][0]['url']
                }
            });
            return {props: {
                creations
            }, revalidate: 30}
        }
        else{
            return {props: {}, revalidate: 30};
        }
    }
    catch(err){
        console.error("Error retrieving creation", err);
        return {props: {}, revalidate: 30}
    }
}

const Gallery = (props: any) =>{
    return <>
                <Head>
                    <meta name="description" content="Fun game for lazy artists" />
                    <title>Pixel Palette | Gallery</title>
                </Head>
                <main className={style.main}>
                    <Nav/>
                    <h2 className={style.title}>Gallery</h2>
                    <div className={style.container}>
                        {props.creations.map((creation: any) =>{
                            return <CreationCard key={creation["Name"]} name={creation["Name"]} author={creation["Author"]} data={creation["Data"]} url={creation["Url"]}/>
                        })}
                    </div>
                </main>

            </>;
}

export default Gallery;