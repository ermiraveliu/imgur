import Posts from "../containers/Posts";
import Layout from "../containers/Layout";
interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return (
        <Layout>
            <Posts apiEndpoint="https://api.npoint.io/bc13239283496e6574a7"/>
        </Layout>
    );
}
 
export default Home;