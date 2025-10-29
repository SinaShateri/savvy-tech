import HomeAnalytics from './analytics';
import HomeHead from './head';
import HomeItems from './items';

const Home = () => {
  return (
    <main className='max-w-6xl mx-auto px-4 py-8 w-full'>
      <HomeHead />
      <HomeAnalytics />
      <HomeItems />
    </main>
  );
};

export default Home;
