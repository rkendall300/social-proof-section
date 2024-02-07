import './App.css';
import starIcon from './images/icon-star.svg';
import coltonAvatar from './images/image-colton.jpg';
import ireneAvatar from './images/image-irene.jpg';
import anneAvatar from './images/image-anne.jpg';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="info">
          <h1 id="title">10,000+ of our users love our products.</h1>
          <p id="description">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </div>
        <div id="rating-container">
          <div className="rating" id="top-rating">
            <div className="star-container">
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
            </div>
            <h2 className="rating-name">Rated 5 Stars in Reviews</h2>
          </div>
          <div className="rating" id="middle-rating">
            <div className="star-container">
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
            </div>
            <h2 className="rating-name">Rated 5 Stars in Report Guru</h2>
          </div>
          <div className="rating" id="bottom-rating">
            <div className="star-container">
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
              <img src={starIcon} alt="star" className="star"></img>
            </div>
            <h2 className="rating-name">Rated 5 Stars in BestTech</h2>
          </div>
        </div>
        <div id="review-container">
          <div className="review" id="top-review">
            <div className="review-header">
              <img src={coltonAvatar} alt="avatar" className="avatar"></img>
              <div className="reviewer-info">
                <p className="reviewer-name">Colton Smith</p>
                <p className="buyer">Verified Buyer</p>
              </div>
            </div>
            <p className="review-text">" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "</p>
          </div>
          <div className="review" id="middle-review">
            <div className="review-header">
              <img src={ireneAvatar} alt="avatar" className="avatar"></img>
              <div className="reviewer-info">
                <p className="reviewer-name">Irene Roberts</p>
                <p className="buyer">Verified Buyer</p>
              </div>
            </div>
            <p className="review-text">" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "</p>
          </div>
          <div className="review" id="bottom-review">
            <div className="review-header">
              <img src={anneAvatar} alt="avatar" className="avatar"></img>
              <div className="reviewer-info">
                <p className="reviewer-name">Anne Wallace</p>
                <p className="buyer">Verified Buyer</p>
              </div>
            </div>
            <p className="review-text">" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
