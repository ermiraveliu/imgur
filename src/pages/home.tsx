import Posts from "../containers/Posts";
import Layout from "../containers/Layout";
import TagContainer from "../containers/TagContainer";
import { useState } from "react";
interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {

    const [inGalleryPage, setInGalleryPage] = useState<boolean>(false)
    return (
            <Layout backgroundColor="" inGalleryPage={ inGalleryPage }>
                <TagContainer/>
                <Posts apiEndpoint="https://api.npoint.io/bc13239283496e6574a7"/>
            </Layout>
    );
}
 
export default Home;