import home_image from "../images/home-image.png";
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
        <span>Hello, I'm Ayoub Mouhssine,</span>
        <h2>
          Web <br /> Developer
        </h2>
        <span>based in Morocco</span>
        <button onClick={downloadCv} style={btnStyle}>
          Resume
        </button>
      </div>
      <div className="image">
        <img src={home_image} alt="home image" />
      </div>
    </main>
  );
}
