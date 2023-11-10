import home_image from '../images/home-image.png';
export default function Home() {
  return (
    <main className='home'>
      <div className='description'>
        <span>Hello, I'm Ayoub Mouhssine,</span>
        <h2>
          Web <br /> Developer
        </h2>
        <span>based in Morocco</span>
        <button>Resume</button>
      </div>
      <div className='image'>
        <img
          src={home_image}
          alt='home image'
        />
      </div>
    </main>
  );
}
