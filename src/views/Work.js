import left_image from "../images/left-image.jpg";
import right_image from "../images/right-image.jpg";
// const projects = [{ name: "", description: "", created_at: "" }];
export default function Work() {
  return (
    <main className="work">
      <h2>Projets</h2>
      <div className="cards">
        <div className="card">
          <img src={left_image} alt="projets" />
          <span className="image-date">November 24, 2019</span>
          <div className="info">
            <h3>Some Case Study</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
              convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={right_image} alt="projets" />
          <span className="image-date">November 24, 2019</span>
          <div className="info">
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
              convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
