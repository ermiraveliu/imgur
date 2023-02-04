import Posts from "../components/GalleryPageComponents/Posts";
import Layout from "../containers/Layout";
import TagContainer from "../containers/TagContainer";
interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return (
        <Layout>
            <TagContainer/>
            <div className="relative top-64">
            <Posts apiEndpoint="https://api.npoint.io/bc13239283496e6574a7"/>
            </div>
        </Layout>
    );
}
 
export default Home;