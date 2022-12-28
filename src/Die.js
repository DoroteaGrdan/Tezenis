export default function Die(props){
    function makeSpan(){
        let arrayOfSpans=[];
        for( let i=0; i<props.value; i++ ){
            arrayOfSpans.push(<span className="pip"></span>)
        }
        return arrayOfSpans;
    }

    return(
        <div id="die" className={`num${props.value}`}>
        {makeSpan()}
        </div>
    )
    
}