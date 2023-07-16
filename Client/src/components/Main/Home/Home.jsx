import Links from './Links/Links';
import Cards from './Cards/Cards';

const Home = () => {
  return (
    <>
    <section className="home-title">
      <h2>Feel it</h2>
      <h2>Sign it</h2>
      <h2>Live it</h2>

    </section>
    <section>
      <Links />
      <Cards />
    </section>
      
    </>
    
  )
};

export default Home;