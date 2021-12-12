import React from "react";
import css from "./style.module.css";

export default function TextField() {
  const text = ` – like something from a science fiction novel, perhaps – but it’s actually a field of study that concerns one of the oldest processes life on this planet has ever known: short-term rhythms of time and their effect on flora and fauna.

This can take many forms. Marine life, for example, is influenced by tidal patterns. Animals tend to be active or inactive depending on the position of the sun or moon. Numerous creatures, humans included, are largely diurnal – that is, they like to come out during the hours of sunlight. Nocturnal animals, such as bats and possums, prefer to forage by night. A third group are known as crepuscular: they thrive in the low-light of dawn and dusk and remain inactive at other hours.`;
  const writedText = `Chronobiology might sound a little futuristic`;
  return (
    <div className={css.TextField}>
      <span className={css.Writed}>{writedText}</span>
      {text}
    </div>
  );
}
