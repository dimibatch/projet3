import { Pipe, PipeTransform } from '@angular/core';
import { Compat } from '../compat';

@Pipe({
  name: 'triCompat'
})
export class TriCompatPipe implements PipeTransform {

  transform(value: Compat[], param_mat_name): Compat[] {
    let result: Compat[] = [];
    let param: any = param_mat_name;

    if (param_mat_name == '' || param_mat_name == undefined) {
      return value;
    } else {
      param_mat_name = param_mat_name.split(" ");
      for (let j = 0; j < param_mat_name.length; j++) {
        for (let i = 0; i < value.length; i++) {
          if ((value[i].name.toLowerCase()).indexOf(param_mat_name[j].toLowerCase()) >= 0
          || "emogreen l15".indexOf(param.toLowerCase()) >= 0
          || "eau déminéralisée ph7".indexOf(param.toLowerCase()) >= 0
          || "eau demineralisee ph7".indexOf(param.toLowerCase()) >= 0
          || "eau_demineralisee_ph7".indexOf(param.toLowerCase()) >= 0
          || "solution tampon ph5".indexOf(param.toLowerCase()) >= 0
          || "solution_tampon_ph5".indexOf(param.toLowerCase()) >= 0
          || "solution tampon ph9".indexOf(param.toLowerCase()) >= 0
          || "solution_tampon_ph9".indexOf(param.toLowerCase()) >= 0
          || "ethanol96".indexOf(param.toLowerCase()) >= 0
          || "ethanol 96".indexOf(param.toLowerCase()) >= 0
          || "tricaprat".indexOf(param.toLowerCase()) >= 0
          || "isododecane".indexOf(param.toLowerCase()) >= 0
          || "isododécane".indexOf(param.toLowerCase()) >= 0
          || "tmf".indexOf(param.toLowerCase()) >= 0
          || "isohexadecane".indexOf(param.toLowerCase()) >= 0
          || "isohexadécane".indexOf(param.toLowerCase()) >= 0
          || "vegelight silk".indexOf(param.toLowerCase()) >= 0
          || "vegelight_silk".indexOf(param.toLowerCase()) >= 0)
           {
            result.push(value[i]);
          }
        }
      }
   
      return result;



      // let antidoublon: string = "wtfm8";
      // let antidoublon2: string = "wtfm8";

      // param_mat_name = param_mat_name.split(" ");
      // for (let j = 0; j < param_mat_name.length; j++) {
      //   for (let i = 0; i < value.length; i++) {
      //     if (((value[i].name.toLowerCase()).indexOf(param_mat_name[j].toLowerCase()) >= 0
      //     && antidoublon.indexOf(param_mat_name[j].toLowerCase()) == -1)
      //      || ("emogreen l15".indexOf(param.toLowerCase()) >= 0 
      //      && antidoublon2.indexOf(param.toLowerCase()) == -1)
      //     )
      //      {
      //       result.push(value[i]);
      //       antidoublon = param_mat_name[j];
            
      //     }
      //   }
      //   antidoublon2 = "emogreen l15";
      // }
   
      // return result;
    }

  }

}
