import List from './List/List';
import Card from './List/Card/Card'
const Home = () => {
  return (
    <>
    <section className="home-title">
      <h2>Feel it</h2>
      <h2>Sign it</h2>
      <h2>Live it</h2>

    </section>
    <section>
      <List />
      <Card />
    </section>
      
    </>
    
  )
};

export default Home;