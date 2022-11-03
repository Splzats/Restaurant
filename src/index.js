import "./style.css";

import {
  contentWrap,
  header,
  displayWindowAbout,
  displayWindowMenu,
  displayWindowReservations,
  backgroundLogo,
} from "./build-dom";

contentWrap.appendChild(backgroundLogo);
backgroundLogo.appendChild(header);
backgroundLogo.appendChild(displayWindowAbout);
backgroundLogo.appendChild(displayWindowMenu);
backgroundLogo.appendChild(displayWindowReservations);
