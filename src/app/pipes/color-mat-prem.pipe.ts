import { Pipe, PipeTransform } from '@angular/core';
import { Compat } from '../compat';

@Pipe({
  name: 'colorMatPrem'
})
export class ColorMatPremPipe implements PipeTransform {

  transform(value: Compat[]): Compat[] {
    let results: Compat[] = value;
    let ratings: any[] = [];
    let redCounter: number = 0;
    let orangeCounter: number = 0;
    let yellowCounter: number = 0;

    for (let i=0; i<value.length; i++) {
      redCounter = 0;
      orangeCounter = 0;
      yellowCounter = 0;

      //eau déminéralisée
      if (value[i].eau_demineralisee_ph7 == 10) {
        redCounter++;
      } else if (value[i].eau_demineralisee_ph7 == 20) {
        orangeCounter++;
      } else if (value[i].eau_demineralisee_ph7 == 30) {
        yellowCounter++;
      }
      
      //solution tampon ph5
      if (value[i].solution_tampon_ph5 == 10) {
        redCounter++;
      } else if (value[i].solution_tampon_ph5 == 20) {
        orangeCounter++;
      } else if (value[i].solution_tampon_ph5 == 30) {
        yellowCounter++;
      }

      //solution tampon ph9
      if (value[i].solution_tampon_ph9 == 10) {
        redCounter++;
      } else if (value[i].solution_tampon_ph9 == 20) {
        orangeCounter++;
      } else if (value[i].solution_tampon_ph9 == 30) {
        yellowCounter++;
      }

      //ethanol96
      if (value[i].ethanol96 == 10) {
        redCounter++;
      } else if (value[i].ethanol96 == 20) {
        orangeCounter++;
      } else if (value[i].ethanol96 == 30) {
        yellowCounter++;
      }

      //tricaprat
      if (value[i].tricaprat == 10) {
        redCounter++;
      } else if (value[i].tricaprat == 20) {
        orangeCounter++;
      } else if (value[i].tricaprat == 30) {
        yellowCounter++;
      }

      //isododecane
      if (value[i].isododecane == 10) {
        redCounter++;
      } else if (value[i].isododecane == 20) {
        orangeCounter++;
      } else if (value[i].isododecane == 30) {
        yellowCounter++;
      }

      //tmf
      if (value[i].tmf == 10) {
        redCounter++;
      } else if (value[i].tmf == 20) {
        orangeCounter++;
      } else if (value[i].tmf == 30) {
        yellowCounter++;
      }

      //isohexadecane
      if (value[i].isohexadecane == 10) {
        redCounter++;
      } else if (value[i].isohexadecane == 20) {
        orangeCounter++;
      } else if (value[i].isohexadecane == 30) {
        yellowCounter++;
      }

      //emogreen
      if (value[i].emogreen_l15 == 10) {
        redCounter++;
      } else if (value[i].emogreen_l15 == 20) {
        orangeCounter++;
      } else if (value[i].emogreen_l15 == 30) {
        yellowCounter++;
      }

      //vegelight
      if (value[i].vegelight_silk == 10) {
        redCounter++;
      } else if (value[i].vegelight_silk == 20) {
        orangeCounter++;
      } else if (value[i].vegelight_silk == 30) {
        yellowCounter++;
      }

      ratings.push({"redCounter": redCounter, "orangeCounter": orangeCounter, "yellowCounter": yellowCounter});

    }
    let k = 0;
    while (k<ratings.length){
      for (let i=0; i<ratings.length-1; i++){
        let j = i + 1;
          if (ratings[j].redCounter > ratings[i].redCounter) {
            let temp = results[i];
            results[i] = results[j];
            results[j] = temp;
            temp = ratings[i];
            ratings[i] = ratings[j];
            ratings[j] = temp;
          } else if (ratings[j].redCounter == ratings[i].redCounter && ratings[j].orangeCounter > ratings[i].orangeCounter) {
            let temp = results[i];
            results[i] = results[j];
            results[j] = temp;
            temp = ratings[i];
            ratings[i] = ratings[j];
            ratings[j] = temp;
          } else if (ratings[j].redCounter == ratings[i].redCounter && ratings[j].orangeCounter == ratings[i].orangeCounter && ratings[j].yellowCounter > ratings[i].yellowCounter) {
            let temp = results[i];
            results[i] = results[j];
            results[j] = temp;
            temp = ratings[i];
            ratings[i] = ratings[j];
            ratings[j] = temp;
          }
        }
        k++;
      }
      return results;
  }

  

}
