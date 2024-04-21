function LeftPanel() {
    return (
      <div className="left-panel">
        <ul>
          <li>
            <i class="fa fa-book"></i>
            <p>Recipes</p>
          </li>
          <li>
            <i class="fa fa-television"></i>
            <p>Shows</p>
          </li>
          <li>
            <i class="fa fa-users"></i>
            <p>Chefs</p>
          </li>
          <li>
            <i class="fa fa-line-chart"></i>
            <p>Trending</p>
          </li>
          <li>
            <i class="fa fa-shopping-cart"></i>
            <p>Shop</p>
          </li>
          <li>
            <i class="fa fa-ticket"></i>
            <p>Sweepstakes</p>
          </li>
        </ul>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Advanced</a>
          <a href="#">More</a>
        </div>
        <div className="advertisement">
          <img src="https://i.imgur.com/VkVgI7d.gif" />
        </div>
      </div>
    );
  }
  
  export default LeftPanel;