interface Props {
    
}
 
const Buttons : React.FC<Props> = () => {
    return ( 
        <div className="w-full flex justify-between">
            <h2 className="font-semibold">EXPLORE TAGS</h2>
            <button className="font-semibold">+ MORE TAGS</button>
            <button className="hidden">+ LESS TAGS</button>
        </div>
     );
}
 
export default Buttons;