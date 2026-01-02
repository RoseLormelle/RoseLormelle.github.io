import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/project">Aller à Project</Link>
    </div>
  );
};

export default Home;
  