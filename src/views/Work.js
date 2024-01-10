import left_image from "../images/left-image.jpg";
import right_image from "../images/right-image.jpg";
import contact_image from "../images/contact-image.jpg";
export default function Work() {
  return (
    <main className="work">
      <h2>work</h2>
      <div className="cards">
        <div className="card">
          <img src={left_image} alt="image" />
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
          <img src={right_image} alt="image" />
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
      </div>

      <h2>contact</h2>
      <div className="contact">
        <div className="contact-image">
          <img src={contact_image} />
        </div>
        <div className="contact-info">
          <p>
            Hi there! I'm Ayoub Mouhssine, and I'd love to connect with you.
            Whether you have a project in mind, want to discuss web development,
            or just want to say hello, feel free to reach out!
          </p>
          <ul>
            <li>
              <a href="mailto:ayoub.mouhssine00@gmail.com">
                ayoub.mouhssine00@gmail.com
              </a>
            </li>
            <li>
              <a href="twitter.com/ayoubMouhssine" target="_blank">
                twitter.com/ayoubMouhssine
              </a>
            </li>
            <li>
              <a href="facebook.com/ayoubMouhssine" target="_blank">
                facebook.com/ayoubMouhssine
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
