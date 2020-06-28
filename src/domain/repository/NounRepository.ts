import wordsJson from "../../data/words.json";
import { Noun } from "../model/Noun";
import { randNumber } from "../util/rng";

export function getOneNoun(): Noun {
  const nouns = Object.keys(wordsJson.nouns);
  const rand = randNumber(nouns.length);
  return new Noun(nouns[rand]);
}
