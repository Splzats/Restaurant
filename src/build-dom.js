//function for creating DOM elements.
//first arg is the type of DOM type/tag type you want to create, pass as a string

//second arg is attributes you want to set for the newly created element created, passed as a object
//  ex {class: 'thisIsTheNewElemsClass'}

//third arg is the children of the new element or what is nested inside the element, passed as a another call of this function if you need to wrap it in a tag, or just plain text if no tag is needed.
//  ex elemFactory('span', {}, 'hello world!'), 'this is just a plain string no need to call the function to create a new element to wrap it in.'

const elemFactory = (type, attribute, ...children) => {
  const elem = document.createElement(type);

  for (let key in attribute) {
    elem.setAttribute(key, attribute[key]);
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      elem.appendChild(document.createTextNode(child));
    } else {
      elem.appendChild(child);
    }
  });

  return elem;
};

const contentWrap = document.getElementById("content");

const backgroundLogo = elemFactory("div", { id: "bgLogo" });

// build and append header section
const header = elemFactory(
  "header",
  {},
  elemFactory("h1", {}, "LEFT", elemFactory("span", {}, "OVERS")),
  elemFactory(
    "nav",
    {},
    elemFactory(
      "ul",
      {},
      elemFactory(
        "li",
        { class: "navChoice" },
        elemFactory("button", { class: "navBtn" }, "Home")
      ),
      elemFactory(
        "li",
        { class: "navChoice" },
        elemFactory("button", { class: "navBtn" }, "Menu")
      ),
      elemFactory(
        "li",
        { class: "navChoice" },
        elemFactory("button", { class: "navBtn" }, "Reservations")
      )
    )
  )
);

//build and append content display sections

//about us section
const displayWindowAbout = elemFactory(
  "div",
  {
    id: "aboutUsSection",
    class: "contentDisplayWindow",
  },
  elemFactory(
    "p",
    { class: "sectionText" },
    "Leftsovers is a one of a kind restaurant, creating a unique dining experience with local Kanto ingredients. We pride ourselves on being the only establishment in the region that specializes in the preparation and creation of pokemon based cuisine. From the most common of catches to the rarest of shinies, our artiste chefs have perfected the craft of preparing pokemon."
  ),
  elemFactory(
    "div",
    { class: "sectionText", id: "team" },
    elemFactory(
      "div",
      { class: "member" },
      elemFactory(
        "div",
        { class: "bio" },
        elemFactory("h3", { class: "name" }, "Dummy Review #1"),
        elemFactory(
          "p",
          { class: "bioText" },
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nisl in erat interdum posuere. Morbi risus risus, viverra id sagittis vel, faucibus at justo. Curabitur ante purus, volutpat in ligula a, fringilla ultricies diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales risus, sit amet facilisis ipsum. Vivamus sapien felis, scelerisque interdum dignissim eget, ornare sit."
        )
      ),
      elemFactory("div", {
        class: "photo",
      })
    ),
    elemFactory(
      "div",
      { class: "member", id: "left" },
      elemFactory("div", {
        class: "photo",
      }),
      elemFactory(
        "div",
        { class: "bio" },
        elemFactory("h3", { class: "name" }, "Dummy Review #2"),
        elemFactory(
          "p",
          { class: "bioText" },
          "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales risus, sit amet facilisis ipsum. Vivamus sapien felis, scelerisque interdum dignissim eget, ornare sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nisl in erat interdum posuere. Morbi risus risus, viverra id sagittis vel, faucibus at justo. Curabitur ante purus, volutpat in ligula a, fringilla ultricies diam."
        )
      )
    ),
    elemFactory(
      "div",
      { class: "member" },
      elemFactory(
        "div",
        { class: "bio" },
        elemFactory("h3", { class: "name" }, "Dummy Review #3"),
        elemFactory(
          "p",
          { class: "bioText" },
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra eros non erat bibendum facilisis. In hac habitasse platea dictumst. Proin porttitor tincidunt mi, a elementum arcu bibendum id. Proin mauris urna, aliquet vel egestas vel, viverra vel quam. Pellentesque in sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nisl in erat interdum posuere. Morbi risus risus, viverra id sagittis vel, faucibus at justo. Curabitur ante purus, volutpat in ligula a, fringilla ultricies diam."
        )
      ),
      elemFactory("div", {
        class: "photo",
      })
    )
  ),
  elemFactory(
    "div",
    { class: "sectionText", id: "contactInfo" },
    elemFactory("p", { id: "hours" }, "Open Monday-Friday 4pm - 11pm"),
    elemFactory("p", { id: "phoneNumber" }, "Phone: 555-555-5555"),
    elemFactory("p", { id: "email" }, "Email: LEFTOVERS@leftovers.net"),
    elemFactory(
      "p",
      { id: "address" },
      "Located at corner of Fake St and Make Believe Rd"
    )
  )
);

//menu sections
const displayWindowMenu = elemFactory(
  "div",
  {
    id: "menuSection",
    class: "contentDisplayWindow",
  },
  elemFactory("h2", { class: "sectionTitle" }, "Menu"),
  elemFactory(
    "ul",
    { class: "sectionText", class: "menuList" },
    elemFactory(
      "li",
      { class: "sectionText", class: "menuListItem" },
      "Menu Item #1"
    ),
    elemFactory(
      "li",
      { class: "sectionText", class: "menuListItem" },
      "Menu Item #2"
    ),
    elemFactory(
      "li",
      { class: "sectionText", class: "menuListItem" },
      "Menu Item #3"
    ),
    elemFactory(
      "li",
      { class: "sectionText", class: "menuListItem" },
      "Menu Item #4"
    ),
    elemFactory(
      "li",
      { class: "sectionText", class: "menuListItem" },
      "Menu Item #5"
    )
  )
);

//reservation section
const displayWindowReservations = elemFactory(
  "div",
  {
    id: "reservationSection",
    class: "contentDisplayWindow",
  },
  elemFactory("h2", { class: "sectionTitle" }, "Reservations"),
  elemFactory(
    "form",
    { class: "resForm", method: "", action: "" },
    //name input
    elemFactory("input", {
      type: "text",
      name: "FullName",
      placeholder: "Full Name",
    }),
    //guest picker
    elemFactory(
      "select",
      { name: "guests", id: "guest-selection" },
      elemFactory("option", { value: "one-guest" }, "1   Guest"),
      elemFactory("option", { value: "two-guest" }, "Two Guest"),
      elemFactory("option", { value: "two-guest" }, "2 Guests"),
      elemFactory("option", { value: "three-guest" }, "3 Guests"),
      elemFactory("option", { value: "four-guest" }, "4 Guests"),
      elemFactory("option", { value: "five-plus-guest" }, "5+ Guests")
    ),
    //time picker
    elemFactory(
      "select",
      { name: "time", id: "time-selection" },
      elemFactory("option", { value: "400" }, "4:00 pm"),
      elemFactory("option", { value: "430" }, "4:30 pm"),
      elemFactory("option", { value: "500" }, "5:00 pm"),
      elemFactory("option", { value: "530" }, "5:30 pm"),
      elemFactory("option", { value: "600" }, "6:00 pm"),
      elemFactory("option", { value: "630" }, "6:30 pm"),
      elemFactory("option", { value: "700" }, "7:00 pm"),
      elemFactory("option", { value: "730" }, "7:30 pm"),
      elemFactory("option", { value: "800" }, "8:00 pm"),
      elemFactory("option", { value: "830" }, "8:30 pm"),
      elemFactory("option", { value: "900" }, "9:00 pm"),
      elemFactory("option", { value: "930" }, "9:30 pm"),
      elemFactory("option", { value: "1000" }, "10:00 pm")
    ),

    // date picker
    elemFactory(
      "div",
      { class: "date-picker" },
      elemFactory("div", { class: "selected-date" }),
      "30 / 07 / 2019",
      elemFactory(
        "div",
        { class: "dates" },
        elemFactory(
          "div",
          { class: "month" },
          elemFactory("div", { class: "arrows prev-month" }, "<"),
          elemFactory("div", { class: "month" }),
          elemFactory("div", { class: "arrows next-month" }, ">")
        ),
        elemFactory("div", { class: "days" })
      )
    )
  )
);

export {
  contentWrap,
  header,
  displayWindowAbout,
  displayWindowMenu,
  displayWindowReservations,
  backgroundLogo,
};
