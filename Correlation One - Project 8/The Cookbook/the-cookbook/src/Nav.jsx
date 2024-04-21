function Nav() {
    return (
      <div>
        <nav>
          <div className="nav-left">
            <img src="https://i.imgur.com/vA7xmPk.png" alt="The Cookbook Logo" />
            <input type="text" placeholder="Search Recipes" />
          </div>
          <div className="nav-right">
            <a href="#">
            <span class="profile-pic" alt="Profile Picture"></span>
            </a>
            <a href="#">
              <i class="fa fa-bell" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Nav;