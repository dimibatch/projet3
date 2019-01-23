import { Pipe, PipeTransform } from '@angular/core';
import { Compat } from '../compat';

@Pipe({
  name: 'verticalCompat'
})
export class VerticalCompatPipe implements PipeTransform {

  transform(value: Compat[], param?: string): Compat[] {
    
    if (param == "" || param == undefined) {
      return value;
    }

    let k: number = 0;
    let i: number;
    let result:Compat[] = value;


    let splitParam: string[] = param.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ");
    
    for (let l=0; l<splitParam.length; l++) {
      if ("emogreen l15".indexOf(splitParam[l].toLowerCase()) > -1
      || "emogreen_l15".indexOf(splitParam[l].toLowerCase()) > -1) {
        k=0;
      while(k<result.length) {
        for (i=0; i<result.length-1; i++) {
          if (result[i].emogreen_l15 > result[i+1].emogreen_l15) {
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
          }
        }
        k++;
      }
      }

      if ("solution tampon ph5".indexOf(splitParam[l].toLowerCase()) > -1
      || "solution_tampon_ph5".indexOf(splitParam[l].toLowerCase()) > -1) {
        k=0;
      while(k<result.length) {
        for (i=0; i<result.length-1; i++) {
          if (result[i].solution_tampon_ph5 > result[i+1].solution_tampon_ph5) {
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
          }
        }
        k++;
      }
      }

      if ("eau demineralisee ph7".indexOf(splitParam[l].toLowerCase()) > -1
      || "eau_demineralisee_ph7".indexOf(splitParam[l].toLowerCase()) > -1) {
        k=0;
      while(k<result.length) {
        for (i=0; i<result.length-1; i++) {
          if (result[i].eau_demineralisee_ph7 > result[i+1].eau_demineralisee_ph7) {
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
          }
        }
        k++;
      }
      }

      if ("solution tampon ph9".indexOf(splitParam[l]) > -1
      || "solution_tampon_ph9".indexOf(splitParam[l].toLowerCase()) > -1) {
        k=0;
      while(k<result.length) {
        for (i=0; i<result.length-1; i++) {
          if (result[i].solution_tampon_ph9 > result[i+1].solution_tampon_ph9) {
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
          }
        }
        k++;
      }
      }

      if ("ethanol96".indexOf(splitParam[l].toLowerCase()) > -1
      || "ethanol 96".indexOf(splitParam[l].toLowerCase()) > -1) {
        k=0;
      while(k<result.length) {
        for (i=0; i<result.length-1; i++) {
          if (result[i].ethanol96 > result[i+1].ethanol96) {
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
          }
        }
        k++;
      }
      }

      if ("tricaprat".indexOf(splitParam[l].toLowerCase()) > -1) {
        k=0;
      while(k<result.length) {
        for (i=0; i<result.length-1; i++) {
          if (result[i].tricaprat > result[i+1].tricaprat) {
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
          }
        }
        k++;
      }
      }

      if ("isododecane".indexOf(splitParam[l].toLowerCase()) > -1) {
        k=0;
      while(k<result.length) {
        for (i=0; i<result.length-1; i++) {
          if (result[i].isododecane > result[i+1].isododecane) {
            let temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
          }
        }
        k++;
      }
      }

      if ("tmf".indexOf(splitParam[l].toLowerCase()) > -1) {
        k=0;
        while(k<result.length) {
          for (i=0; i<result.length-1; i++) {
            if (result[i].tmf > result[i+1].tmf) {
              let temp = result[i];
              result[i] = result[i+1];
              result[i+1] = temp;
            }
          }
          k++;
        }
        }

        if ("isohexadecane".indexOf(splitParam[l].toLowerCase()) > -1) {
          k=0;
          while(k<result.length) {
            for (i=0; i<result.length-1; i++) {
              if (result[i].isohexadecane > result[i+1].isohexadecane) {
                let temp = result[i];
                result[i] = result[i+1];
                result[i+1] = temp;
              }
            }
            k++;
          }
          }

          if ("vegelight silk".indexOf(splitParam[l].toLowerCase()) > -1
          || "vegelight_silk".indexOf(splitParam[l].toLowerCase()) > -1) {
            k=0;
            while(k<result.length) {
              for (i=0; i<result.length-1; i++) {
                if (result[i].vegelight_silk > result[i+1].vegelight_silk) {
                  let temp = result[i];
                  result[i] = result[i+1];
                  result[i+1] = temp;
                }
              }
              k++;
            }
            }
    }

    // if ("emogreen l15".indexOf(param.toLowerCase()) > -1
    // || "emogreen_l15".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].emogreen_l15 > result[i+1].emogreen_l15) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      

    // } else if ("eau déminéralisée ph7".indexOf(param.toLowerCase()) > -1
    // || "eau demineralisee ph7".indexOf(param.toLowerCase()) > -1
    // || "eau_deminéralisee_ph7".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].eau_demineralisee_ph7 > result[i+1].eau_demineralisee_ph7) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // } else if ("solution tampon ph5".indexOf(param.toLowerCase()) > -1
    // || "solution_tampon_ph5".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].solution_tampon_ph5 > result[i+1].solution_tampon_ph5) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // } else if ("solution tampon ph9".indexOf(param.toLowerCase()) > -1
    // || "solution_tampon_ph9".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].solution_tampon_ph9 > result[i+1].solution_tampon_ph9) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // } else if ("ethanol96".indexOf(param.toLowerCase()) > -1
    // || "ethanol 96".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].ethanol96 > result[i+1].ethanol96) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // } else if ("tricaprat".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].tricaprat > result[i+1].tricaprat) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // } else if ("isododecane".indexOf(param.toLowerCase()) > -1
    // || "isododécane".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].isododecane > result[i+1].isododecane) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // } else if ("tmf".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].tmf > result[i+1].tmf) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // } else if ("isohexadecane".indexOf(param.toLowerCase()) > -1
    // || "isohexadécane".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].isohexadecane > result[i+1].isohexadecane) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // } else if ("vegelight silk".indexOf(param.toLowerCase()) > -1
    // || "vegelight_silk".indexOf(param.toLowerCase()) > -1) {
    //   while(k<result.length) {
    //     for (i=0; i<result.length-1; i++) {
    //       if (result[i].vegelight_silk > result[i+1].vegelight_silk) {
    //         let temp = result[i];
    //         result[i] = result[i+1];
    //         result[i+1] = temp;
    //       }
    //     }
    //     k++;
    //   }
      
    // }
    return result;
  }

}
