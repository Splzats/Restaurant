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
        elemFactory("button", { class: "navBtn", id: "homeBtn" }, "Home")
      ),
      elemFactory(
        "li",
        { class: "navChoice" },
        elemFactory("button", { class: "navBtn", id: "menuBtn" }, "Menu")
      ),
      elemFactory(
        "li",
        { class: "navChoice" },
        elemFactory(
          "button",
          { class: "navBtn", id: "reservationBtn" },
          "Reservations"
        )
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
    "Leftsovers is a one of a kind restaurant, creating a unique dining experience with local Kanto ingredients. We pride ourselves on being the only establishment in the region that specializes in the preparation and creation of pokemon based cuisine. From the most common of catches to the rarest of shinies, our artiste chefs have perfected the craft of preparing pokemon for your enjoyment."
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
    class: "contentDisplayWindow sectionText",
  },
  elemFactory(
    "ul",
    { class: "sectionText", class: "menuList" },
    elemFactory(
      "li",
      { class: "sectionText menuItem", class: "menuListItem" },
      elemFactory(
        "div",
        { class: "menuItemTextBox" },
        elemFactory("h5", { class: "menuItemTitle" }, "Dragon Roll"),
        elemFactory(
          "p",
          { class: "menuItemText" },
          "A sushi roll made with lightly fried Gyarados, real Krabby meat, Leppas berries, and Razz berries. "
        )
      ),
      elemFactory("div", { class: "menuIcon", id: "gyaradosIcon" })
    ),
    elemFactory(
      "li",
      { class: "sectionText menuItem", class: "menuListItem" },
      elemFactory(
        "div",
        { class: "menuItemTextBox" },
        elemFactory("h5", { class: "menuItemTitle even" }, "Sawbuck Venison"),
        elemFactory(
          "p",
          { class: "menuItemText" },
          "A tender Sawbuck rib-eye seasoned with salt and pepper cooked over a high heat with a small amount of olive oil."
        )
      )
    ),
    elemFactory(
      "li",
      { class: "sectionText menuItem", class: "menuListItem" },
      elemFactory(
        "div",
        { class: "menuItemTextBox" },
        elemFactory("h5", { class: "menuItemTitle" }, "Bellsprout Salad"),
        elemFactory(
          "p",
          { class: "menuItemText" },
          "A salad created with Bellsprout leafy greens, an assortment of berries, and dressed with Combee honey."
        )
      ),
      elemFactory("div", { class: "menuIcon", id: "bellsproutIcon" })
    ),
    elemFactory(
      "li",
      { class: "sectionText menuItem", class: "menuListItem" },

      elemFactory(
        "div",
        { class: "menuItemTextBox" },
        elemFactory("h5", { class: "menuItemTitle even" }, "Greninja Legs"),
        elemFactory(
          "p",
          { class: "menuItemText" },
          "Beer marinated Greninja legs seasoned with pepper, cooked in oil and butter. Fall of the bone tender."
        )
      )
    ),
    elemFactory(
      "li",
      { class: "sectionText menuItem", class: "menuListItem" },

      elemFactory(
        "div",
        { class: "menuItemTextBox" },
        elemFactory("h5", { class: "menuItemTitle" }, "Tauros Burger"),
        elemFactory(
          "p",
          { class: "menuItemText" },
          "A juicy Tauros burger with Bellsprout leafy greens, Tamato berries, Mareep cheese, Tepig bacon, and slathered in spicy Rapidash sauce."
        )
      ),
      elemFactory("div", { class: "menuIcon", id: "taurosIcon" })
    )
  )
);

//reservation section
const displayWindowReservations = elemFactory(
  "div",
  {
    id: "reservationSection",
    class: "contentDisplayWindow sectionText",
  },
  elemFactory(
    "form",
    { class: "resForm", method: "", action: "" },
    // date picker
    elemFactory(
      "div",
      { class: "date-picker" },
      elemFactory("div", { class: "selected-date" }),
      elemFactory(
        "div",
        { class: "dates" },
        elemFactory(
          "div",
          { class: "month" },
          elemFactory("div", { class: "arrows prev-month" }, "<"),
          elemFactory("div", { class: "monthSelected" }),
          elemFactory("div", { class: "arrows next-month" }, ">")
        ),
        elemFactory("div", { class: "days" })
      )
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
    //guest picker
    elemFactory(
      "select",
      { name: "guests", id: "guest-selection" },
      elemFactory("option", { value: "one-guest" }, "Table for one"),
      elemFactory("option", { value: "two-guest" }, "Table for two"),
      elemFactory("option", { value: "three-guest" }, "Table for three"),
      elemFactory("option", { value: "four-guest" }, "Table for four"),
      elemFactory(
        "option",
        { value: "five-plus-guest" },
        "Table for five or more"
      )
    ),
    //name input
    elemFactory("input", {
      type: "text",
      name: "FullName",
      id: "name-input",
      placeholder: "Full Name",
    }),
    //email input
    elemFactory("input", {
      type: "email",
      id: "resEmail",
      placeholder: "Email",
    }),
    //telephone input
    elemFactory("input", {
      type: "tel",
      id: "resTel",
      placeholder: "Phone # 555-555-5555",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    }),
    elemFactory(
      "button",
      { type: "button", id: "makeResBtn" },
      "Make Reservation"
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
