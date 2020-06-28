import wordsJson from "../../data/words.json";
import { Adjective } from "../model/Adjective";
import { randNumber } from "../util/rng";

export function getOneAdjective(): Adjective {
  const adjectives = Object.keys(wordsJson.adjectives);
  const rand = randNumber(adjectives.length);
  return new Adjective(adjectives[rand]);
}
