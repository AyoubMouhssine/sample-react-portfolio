import home_image from "../images/profile_01.jpg";
export default function Home() {
  const downloadCv = () => {
    const a = document.createElement("a");
    a.href = process.env.PUBLIC_URL + "/ayoubMouhssine.pdf";
    a.download = "ayoubMouhssine.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const btnStyle = {
    cursor: "pointer",
  };
  return (
    <main className="home">
      <div className="description">
        <span>Bonjour, je suis Ayoub Mouhssine,</span>
        <h2>
          Développeur <br /> Web
        </h2>
        <span>basé au Maroc</span>
        <p className=".welcome-paragraph">
          Bienvenue sur mon portfolio ! Je suis un développeur web passionné,
          créant des solutions numériques innovantes. Explorez mon travail et
          découvrez comment je peux donner vie à vos idées.
        </p>
        <button onClick={downloadCv} style={btnStyle}>
          CV
        </button>
      </div>
      <div className="image">
        <img src={home_image} alt="image of ayoub mouhssine for portfolio" />
      </div>
    </main>
  );
}
