import React, { useState } from 'react';

function PreSubmittedRecipes() {
    // State to track the number of likes for each recipe
  const [likes, setLikes] = useState([0, 0, 0]); // Initialize likes for each recipe

  // Function to handle like button click
  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };
  return (
    <>
      <div className="recipe-card">
        <div className="post-top">
          <h2>Mike's Homemade Pizza</h2>
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <div className="post-content">
          <img src="https://www.allrecipes.com/thmb/ooZbu_yUBrGQ74uKbuOENWuNxMM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg" alt="Mike's Homemade Pizza" />
          <div>
            <br />
            <h3>Ingredients:</h3>
            <ul>
              <li>1 (.25 ounce) envelope active dry yeast</li>
              <li>1 cup lukewarm water</li>
              <li>3 cups all-purpose flour</li>
              <li>2 tablespoons shortening</li>
              <li>1¼ teaspoon salt</li>
              <li>1 tablespoon vegetable oil</li>
              <li>½ cup chopped onion</li>
              <li>1 (6 ounce) can tomato paste</li>
              <li>¾ cup water</li>
              <li>½ teaspoon white sugar</li>
              <li>½ teaspoon dried oregano</li>
              <li>¼ teaspoon garlic powder</li>
              <li>¼ teaspoon dried basil</li>
              <li>¼ teaspoon dried marjoram</li>
              <li>¼ teaspoon ground cumin</li>
              <li>¼ teaspoon chili powder</li>
              <li>⅛ teaspoon crushed red pepper flakes</li>
              <li>⅛ teaspoon ground black pepper</li>
              <li>1 (12 ounce) package shredded mozzarella cheese, or to taste</li>
            </ul>
          </div>
          <div>
            <br />
            <h3>Instructions:</h3>
            <ol>
              <li>Make the dough: Dissolve yeast in lukewarm water in a small bowl. Let stand until creamy, about 10 minutes.</li>
              <li>Combine flour, shortening, and salt in a large bowl; add yeast mixture and stir until dough comes together. Knead dough on a lightly floured surface until smooth and elastic, about 8 minutes.</li>
              <li>Lightly oil a large bowl. Place dough into the bowl and turn to coat with oil. Cover with a damp cloth and let rise in a warm place until doubled in volume, about 45 minutes.</li>
              <li>Meanwhile, make the sauce: Heat oil in a small saucepan over medium heat. Add onion and sauté until tender, about 5 minutes.</li>
              <li>Stir in tomato paste, water, salt, sugar, oregano, garlic powder, basil, marjoram, cumin, chili powder, red pepper flakes, and black pepper; simmer for 15 to 20 minutes.</li>
              <li>Preheat the oven to 400 degrees F (200 degrees C).</li>
              <li>Divide dough in half. Roll each half into a 12-inch circle. Place dough onto two 12-inch pizza pans; cover with sauce and mozzarella cheese.</li>
              <li>Bake in the preheated oven until crusts are golden brown, about 20 minutes.</li>
            </ol>
          </div>
        </div>
        <div className="post-bottom">
          <div className="action" onClick={() => handleLike(0)}>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span>{likes[0]} Like(s)</span>
          </div>
          <div className="action">
            <i class="fa fa-comment-o" aria-hidden="true"></i>
            <span>Comment</span>
          </div>
          <div className="action">
            <i class="fa fa-share" aria-hidden="true"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
      <div className="recipe-card">
        <div className="post-top">
          <h2>Beef Tacos</h2>
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <div className="post-content">
          <img src="https://www.onceuponachef.com/images/2023/08/Beef-Tacos-760x570.jpg" alt="Beef Tacos" />
          <div>
            <br />
            <h3>Ingredients:</h3>
            <ul>
              <li>2 pounds 90% lean ground beef</li>
              <li>½ teaspoon baking soda</li>
              <li>1 teaspoon salt</li>
              <li>1½ tablespoons vegetable oil</li>
              <li>1 large yellow onion, finely chopped</li>
              <li>5 cloves garlic, minced</li>
              <li>¼ cup chili powder</li>
              <li>2 teaspoons ground cumin</li>
              <li>2 teaspoons ground coriander</li>
              <li>1 teaspoon smoked paprika</li>
              <li>1 teaspoon dried oregano</li>
              <li>½ teaspoon cayenne pepper</li>
              <li>1 (8-oz) can tomato sauce</li>
              <li>1 cup water</li>
              <li>1 teaspoon sugar</li>
              <li>2 tablespoons lime juice, from 1 lime</li>
              <li>16 Taco Shells (warmed according to package instructions)</li>
              <li>Optional: shredded Mexican blend cheese, shredded iceberg lettuce, diced tomatoes, sour cream, diced avocados, diced onions, chopped fresh cilantro</li>
            </ul>
          </div>
          <div>
            <br />
            <h3>Instructions:</h3>
            <ol>
              <li>In a medium bowl, mash the beef with the baking soda and salt. Let sit for at least 15 minutes or up to 1 hour.</li>
              <li>Heat the oil in a large nonstick skillet over medium heat until hot and shimmering.</li>
              <li>Add the onion and cook, stirring occasionally, until softened, about 4 minutes.</li>
              <li>Add the garlic and cook 1 minute more. Do not brown.</li>
              <li>Add the beef, chili powder, cumin, coriander, paprika, oregano, and cayenne pepper and cook, stirring constantly and breaking meat up with a wooden spoon, until the beef is no longer pink, about 5 minutes.</li>
              <li>Add the tomato sauce, water, sugar, and lime juice; bring to a simmer.</li>
              <li>Reduce the heat to medium-low and cook, uncovered, stirring frequently and breaking up the meat, until the liquid has reduced and thickened (the mixture should not be completely dry), 10 to 15 minutes.</li>
              <li>Taste and adjust seasonings if necessary.</li>
              <li>Using a wide, shallow spoon, divide the filling evenly among the taco shells; place two or three tacos on individual plates.</li>
              <li>Serve immediately, passing the toppings separately.</li>
            </ol>
          </div>
        </div>
        <div className="post-bottom">
          <div className="action" onClick={() => handleLike(1)}>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span>{likes[1]} Like(s)</span>
          </div>
          <div className="action">
            <i class="fa fa-comment-o" aria-hidden="true"></i>
            <span>Comment</span>
          </div>
          <div className="action">
            <i class="fa fa-share" aria-hidden="true"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
      <div className="recipe-card">
        <div className="post-top">
          <h2>Chicken Tikka Masala</h2>
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <div className="post-content">
          <img src="https://i0.wp.com/www.nourishdeliciously.com/wp-content/uploads/2022/11/DSC_9207.jpg" alt="Chicken Tikka Masala" />
          <div>
            <br />
            <h3>Ingredients:</h3>
            <ul>
              <li>28 oz (800g) boneless and skinless chicken thighs cut into bite-sized pieces</li>
              <li>1 cup plain yogurt</li>
              <li>1 1/2 tablespoons minced garlic</li>
              <li>2 tablespoon ginger</li>
              <li>3 1/2 teaspoons garam masala</li>
              <li>2 teaspoon turmeric</li>
              <li>2 1/2 teaspoon ground cumin</li>
              <li>2 teaspoon Kashmiri chili (or 1/2 teaspoon ground red chili powder)</li>
              <li>2 teaspoon of salt</li>
              <li>2 tablespoons of vegetable/canola oil</li>
              <li>2 tablespoons butter</li>
              <li>2 small onions (or 1 large onion) finely diced</li>
              <li>1 1/2 tablespoons garlic finely grated</li>
              <li>1 teaspoon ground coriander</li>
              <li>14 oz (400g) tomato puree (tomato sauce/Passata)</li>
              <li>1 1/4 cups of heavy or thickened cream (use evaporated milk for lower calories)</li>
              <li>1 teaspoon brown sugar</li>
              <li>1/4 cup water if needed</li>
              <li>4 tablespoons Fresh cilantro or coriander to garnish</li>
            </ul>
          </div>
          <div>
            <br />
            <h3>Instructions:</h3>
            <ol>
              <li>In a bowl, combine chicken with all of the ingredients for the chicken marinade; let marinate for 10 minutes to an hour (or overnight if time allows).</li>
              <li>Heat oil in a large skillet or pot over medium-high heat. When sizzling, add chicken pieces in batches of two or three, making sure not to crowd the pan. Fry until browned for only 3 minutes on each side. Set aside and keep warm. (You will finish cooking the chicken in the sauce.)</li>
              <li>Melt the butter in the same pan. Fry the onions until soft (about 3 minutes) while scraping up any browned bits stuck on the bottom of the pan.</li>
              <li>Add garlic and ginger and sauté for 1 minute until fragrant, then add garam masala, cumin, turmeric and coriander. Fry for about 20 seconds until fragrant, while stirring occasionally.</li>
              <li>Pour in the tomato puree, chili powders and salt. Let simmer for about 10-15 minutes, stirring occasionally until sauce thickens and becomes a deep brown red colour.</li>
              <li>Stir the cream and sugar through the sauce. Add the chicken and its juices back into the pan and cook for an additional 8-10 minutes until chicken is cooked through and the sauce is thick and bubbling. Pour in the water to thin out the sauce, if needed.</li>
              <li>Garnish with cilantro (coriander) and serve with hot garlic butter rice and fresh homemade Naan bread!</li>
            </ol>
          </div>
        </div>
        <div className="post-bottom">
          <div className="action" onClick={() => handleLike(2)}>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span>{likes[2]} Like(s)</span>
          </div>
          <div className="action">
            <i class="fa fa-comment-o" aria-hidden="true"></i>
            <span>Comment</span>
          </div>
          <div className="action">
            <i class="fa fa-share" aria-hidden="true"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreSubmittedRecipes;