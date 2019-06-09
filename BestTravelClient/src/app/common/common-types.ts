
export class location{
  x : number;
  y : number;

  constructor(x : number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class preferences{
  nature: number;
  shopping: number;
  family: number;
  food: number;
  nightLife: number;
  culture: number;

  constructor(nature: number, shopping: number, family: number, food: number, nightLife: number, culture: number){
    this.nature = nature;
    this.shopping = shopping;
    this.family = family;
    this.food = food;
    this.nightLife = nightLife;
    this.culture = culture;
  }
}

export class tripObject{
  tripName: string;
  location: location;
  duration: number;
  preferences: preferences;

  constructor(tripName: string, location: location, duration: number, preferences: preferences) {
    this.tripName = tripName;
    this.location = location;
    this.duration = duration;
    this.preferences = preferences;
  }
}
