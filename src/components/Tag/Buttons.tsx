interface Props {
    
}
 
const Buttons : React.FC<Props> = () => {
    return ( 
        <div className="w-full flex justify-between">
            <h2>Explore Tags</h2>
            <button>+ More Tags</button>
            <button className="hidden">+ Less Tags</button>
        </div>
     );
}
 
export default Buttons;