import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>   ${variables.name !== null ? variables.name : "Lucy"} ${
    variables.lastname !== null ? variables.lastname : "Boilett"
  }  </h1>
          <h2>${
            variables.role === null
              ? "Web Developer"
              : variables.role === "Web Developer"
              ? "Web Developer"
              : variables.role === "Floor Planner"
              ? "Floor Planner"
              : variables.role === "Technical Writter"
              ? "Technical Writter"
              : null
          }</h2>
          <h3> ${
            variables.city === null
              ? "Miami"
              : variables.city === "Miami"
              ? "Miami"
              : variables.city === "Munich"
              ? "Munich"
              : variables.city === "Toronto"
              ? "Toronto"
              : variables.city === "Caracas"
              ? "Caracas"
              : null
          }, 
            
            ${
              variables.country === null
                ? "USA"
                : variables.country === "USA"
                ? "USA"
                : variables.country === "Germany"
                ? "Germany"
                : variables.country === "Canada"
                ? "Canada"
                : variables.country === "Venezuela"
                ? "Venezuela"
                : null
            }</h3>
          <ul class=${
            variables.socialMediaPosition === "position-right"
              ? "position-right"
              : variables.socialMediaPosition === "position-left"
              ? "position-left"
              : null
          } >
            <li><a href=${
              variables.twitter !== null
                ? variables.twitter
                : "https://twitter.com/alesanchezr"
            }
            
            ><i class="fa fa-twitter"></i></a></li>
            <li><a href=${
              variables.github !== null
                ? variables.github
                : "https://github.com/alesanchezr"
            }<i class="fa fa-github"></i></a></li>
            <li><a href=${
              variables.linkedin !== null
                ? variables.linkedin
                : "https://linkedin.com/alesanchezr"
            }><i class="fa fa-linkedin"></i></a></li>
            <li><a href=${
              variables.instagram !== null
                ? variables.instagram
                : "https://instagram.com/alesanchezr"
            }><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
