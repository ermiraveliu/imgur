interface GradientBackgroundProps {
    
}
 
const GradientBackground: React.FC<GradientBackgroundProps> = () => {
    return ( 
        <div
        className="hidden sm:block gradient-background absolute top-10 left-0 w-full h-[650px]"
        ></div>
     );
}
 
export default GradientBackground;