import Posts from "../containers/Posts";
import Layout from "../containers/Layout";
import TagContainer from "../containers/TagContainer";
interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return (
        <Layout backgroundColor="">
            <TagContainer/>
            <Posts apiEndpoint="https://api.npoint.io/bc13239283496e6574a7"/>
        </Layout>
    );
}
 
export default Home;