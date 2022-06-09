let diodeColor = 'rgb(255, 217, 0)';
let sec = 0;
let noneColor = 'rgb(0, 149, 255)'


let timer = setInterval(function(){
    sec++
console.log('секунди:'+sec)
if(sec%2 !== 0){
    diode1_1.style.backgroundColor = diodeColor;
    diode1_2.style.backgroundColor = diodeColor;
    diode1_3.style.backgroundColor = diodeColor;
    diode1_4.style.backgroundColor = diodeColor;
    diode1_5.style.backgroundColor = diodeColor;

    diode2_1.style.backgroundColor = diodeColor;
    diode2_2.style.backgroundColor = noneColor;
    diode2_3.style.backgroundColor = diodeColor;
    diode2_4.style.backgroundColor = noneColor;
    diode2_5.style.backgroundColor = diodeColor;

    diode3_1.style.backgroundColor = noneColor;
    diode3_2.style.backgroundColor = diodeColor;
    diode3_3.style.backgroundColor = noneColor;
    diode3_4.style.backgroundColor = diodeColor;
    diode3_5.style.backgroundColor = noneColor;

    diode4_1.style.backgroundColor = noneColor;
    diode4_2.style.backgroundColor = diodeColor;
    diode4_3.style.backgroundColor = diodeColor;
    diode4_4.style.backgroundColor = diodeColor;
    diode4_5.style.backgroundColor = noneColor;

    diode5_1.style.backgroundColor = diodeColor;
    diode5_2.style.backgroundColor = noneColor;
    diode5_3.style.backgroundColor = diodeColor;
    diode5_4.style.backgroundColor = noneColor;
    diode5_5.style.backgroundColor = diodeColor;

    diode6_1.style.backgroundColor = diodeColor;
    diode6_2.style.backgroundColor = diodeColor;
    diode6_3.style.backgroundColor = noneColor;
    diode6_4.style.backgroundColor = diodeColor;
    diode6_5.style.backgroundColor = diodeColor;

    diode7_1.style.backgroundColor = diodeColor;
    diode7_2.style.backgroundColor = diodeColor;
    diode7_3.style.backgroundColor = diodeColor;
    diode7_4.style.backgroundColor = diodeColor;
    diode7_5.style.backgroundColor = diodeColor;

}else if(sec%2 ===0){
    diode1_1.style.backgroundColor = noneColor
    diode1_2.style.backgroundColor = noneColor
    diode1_3.style.backgroundColor = noneColor
    diode1_4.style.backgroundColor = noneColor
    diode1_5.style.backgroundColor = noneColor

    diode2_1.style.backgroundColor = noneColor
    diode2_2.style.backgroundColor = diodeColor
    diode2_3.style.backgroundColor = noneColor
    diode2_4.style.backgroundColor = diodeColor
    diode2_5.style.backgroundColor = noneColor

    diode3_1.style.backgroundColor = diodeColor
    diode3_2.style.backgroundColor = noneColor
    diode3_3.style.backgroundColor = diodeColor
    diode3_4.style.backgroundColor = noneColor
    diode3_5.style.backgroundColor = diodeColor

    diode4_1.style.backgroundColor = diodeColor
    diode4_2.style.backgroundColor = noneColor
    diode4_3.style.backgroundColor = noneColor
    diode4_4.style.backgroundColor = noneColor
    diode4_5.style.backgroundColor = diodeColor

    diode5_1.style.backgroundColor = noneColor
    diode5_2.style.backgroundColor = diodeColor
    diode5_3.style.backgroundColor = noneColor
    diode5_4.style.backgroundColor = diodeColor
    diode5_5.style.backgroundColor = noneColor

    diode6_1.style.backgroundColor = noneColor
    diode6_2.style.backgroundColor = noneColor
    diode6_3.style.backgroundColor = diodeColor
    diode6_4.style.backgroundColor = noneColor
    diode6_5.style.backgroundColor = noneColor

    diode7_1.style.backgroundColor = noneColor
    diode7_2.style.backgroundColor = noneColor
    diode7_3.style.backgroundColor = noneColor
    diode7_4.style.backgroundColor = noneColor
    diode7_5.style.backgroundColor = noneColor
}
if(sec===6){
    clearInterval(timer)
    diode1_1.style.backgroundColor = ''
    diode1_2.style.backgroundColor = ''
    diode1_3.style.backgroundColor = ''
    diode1_4.style.backgroundColor = ''
    diode1_5.style.backgroundColor = ''

    diode2_1.style.backgroundColor = ''
    diode2_2.style.backgroundColor = ''
    diode2_3.style.backgroundColor = ''
    diode2_4.style.backgroundColor = ''
    diode2_5.style.backgroundColor = ''

    diode3_1.style.backgroundColor = ''
    diode3_2.style.backgroundColor = ''
    diode3_3.style.backgroundColor = ''
    diode3_4.style.backgroundColor = ''
    diode3_5.style.backgroundColor = ''

    diode4_1.style.backgroundColor = ''
    diode4_2.style.backgroundColor = ''
    diode4_3.style.backgroundColor = ''
    diode4_4.style.backgroundColor = ''
    diode4_5.style.backgroundColor = ''

    diode5_1.style.backgroundColor = ''
    diode5_2.style.backgroundColor = ''
    diode5_3.style.backgroundColor = ''
    diode5_4.style.backgroundColor = ''
    diode5_5.style.backgroundColor = ''

    diode6_1.style.backgroundColor = ''
    diode6_2.style.backgroundColor = ''
    diode6_3.style.backgroundColor = ''
    diode6_4.style.backgroundColor = ''
    diode6_5.style.backgroundColor = ''

    diode7_1.style.backgroundColor = ''
    diode7_2.style.backgroundColor = ''
    diode7_3.style.backgroundColor = ''
    diode7_4.style.backgroundColor = ''
    diode7_5.style.backgroundColor = ''
}
},750)




btnAdd.onclick = function () {
    let str = inp.value;
    inp.value = '';
    let i = 0;

    let timerId = setInterval(function () {

        if (i < str.length) {
            console.log(str[i]);
            switch (str[i]) {
                case 'a':
                    clear();
                    diode6_2.style.backgroundColor = diodeColor
                    diode5_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode4_4.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_4.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    break;
                    case ' ':
                case 'b':
                    clear();
                    diode6_2.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode2_2.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    case ' ':
                    break;

   
                    

                    case 's':
                        clear();
                        diode2_3.style.backgroundColor = diodeColor;
                        diode2_4.style.backgroundColor = diodeColor;
                        diode3_2.style.backgroundColor = diodeColor;
                        diode4_3.style.backgroundColor = diodeColor;
                        diode4_4.style.backgroundColor = diodeColor;
                        diode5_4.style.backgroundColor = diodeColor;
                        diode6_2.style.backgroundColor = diodeColor;
                        diode6_3.style.backgroundColor = diodeColor;
                        break;
                        case ' ':
          

                        case 'w':
                            clear();
                            diode2_1.style.backgroundColor = diodeColor;
                            diode4_1.style.backgroundColor = diodeColor;
                            diode3_1.style.backgroundColor = diodeColor;
                            diode5_2.style.backgroundColor = diodeColor;
                            diode4_3.style.backgroundColor = diodeColor;
                            diode5_4.style.backgroundColor = diodeColor;
                            diode2_5.style.backgroundColor = diodeColor;
                            diode3_5.style.backgroundColor = diodeColor;
                            diode4_5.style.backgroundColor = diodeColor;
break;
                            case ' ':
                        case 'x':
                 
                            clear();
                            diode2_2.style.backgroundColor = diodeColor;
                            diode3_2.style.backgroundColor = diodeColor;
                            diode3_4.style.backgroundColor = diodeColor;
                            diode2_4.style.backgroundColor = diodeColor;
                            diode4_3.style.backgroundColor = diodeColor;
                            diode5_4.style.backgroundColor = diodeColor;
                            diode5_2.style.backgroundColor = diodeColor;
                            diode6_2.style.backgroundColor = diodeColor;
                            diode6_4.style.backgroundColor = diodeColor;
                        case ' ':
                            break;

                            case 'y':
                
                                clear();
                                diode2_2.style.backgroundColor = diodeColor;
                                diode3_2.style.backgroundColor = diodeColor;
                                diode3_4.style.backgroundColor = diodeColor;
                                diode2_4.style.backgroundColor = diodeColor;
                                diode4_3.style.backgroundColor = diodeColor;
                                diode5_3.style.backgroundColor = diodeColor;
                                diode6_3.style.backgroundColor = diodeColor;
                            
                            case ' ':
                                break;
                                
                            case 'z':
                
                                clear();
                                diode2_2.style.backgroundColor = diodeColor;
                                diode2_3.style.backgroundColor = diodeColor;
                                diode2_4.style.backgroundColor = diodeColor;
                                diode3_4.style.backgroundColor = diodeColor;
         
                                diode5_4.style.backgroundColor = diodeColor;
                                diode3_2.style.backgroundColor = diodeColor;
                                diode4_3.style.backgroundColor = diodeColor;
                                diode5_2.style.backgroundColor = diodeColor;
                                diode6_2.style.backgroundColor = diodeColor;
                                diode6_3.style.backgroundColor = diodeColor;
                                diode6_4.style.backgroundColor = diodeColor;
                            
                            case ' ':
                                break;
                                
                                case 'h':
                                    clear();
                                    diode2_2.style.backgroundColor = diodeColor;
                                    diode3_2.style.backgroundColor = diodeColor;
                                    diode4_2.style.backgroundColor = diodeColor;
                                    diode5_2.style.backgroundColor = diodeColor;
                                    diode6_2.style.backgroundColor = diodeColor;
                                    diode2_4.style.backgroundColor = diodeColor;
                                    diode3_4.style.backgroundColor = diodeColor;
                                    diode4_4.style.backgroundColor = diodeColor;
                                    diode5_4.style.backgroundColor = diodeColor;
                                    diode6_4.style.backgroundColor = diodeColor;
                                    diode4_3.style.backgroundColor = diodeColor;
                                    case ' ':
                                    break;
                                case 'i':
                                    clear();
                                    diode2_2.style.backgroundColor = diodeColor;
                                    diode2_3.style.backgroundColor = diodeColor;
                                    diode2_4.style.backgroundColor = diodeColor;
                                    diode3_3.style.backgroundColor = diodeColor;
                                    diode4_3.style.backgroundColor = diodeColor;
                                    diode5_3.style.backgroundColor = diodeColor;
                                    diode6_3.style.backgroundColor = diodeColor;
                                    diode6_2.style.backgroundColor = diodeColor;
                                    diode6_4.style.backgroundColor = diodeColor;
                                    case ' ':
                                    break;
                                case 'j':
                                    clear();
                                    diode2_2.style.backgroundColor = diodeColor;
                                    diode2_3.style.backgroundColor = diodeColor;
                                    diode2_4.style.backgroundColor = diodeColor;
                                    diode3_3.style.backgroundColor = diodeColor;
                                    diode4_3.style.backgroundColor = diodeColor;
                                    diode5_3.style.backgroundColor = diodeColor;
                                    diode6_3.style.backgroundColor = diodeColor;
                                    diode6_2.style.backgroundColor = diodeColor;
                                    diode5_1.style.backgroundColor = diodeColor;
                                    case ' ':
                                    break;
                                case 'k':
                                     clear();
                                    diode2_2.style.backgroundColor = diodeColor;
                                    diode3_3.style.backgroundColor = diodeColor;
                 
                                    diode2_4.style.backgroundColor = diodeColor;
                                    diode3_2.style.backgroundColor = diodeColor;
                                    diode4_2.style.backgroundColor = diodeColor;
                                    diode5_2.style.backgroundColor = diodeColor;
                                    diode6_2.style.backgroundColor = diodeColor;
                                    diode5_3.style.backgroundColor = diodeColor;
                                    diode6_4.style.backgroundColor = diodeColor;
                                    case ' ':
                                    break;
                                case 'l':
                                    clear();
                                    diode2_2.style.backgroundColor = diodeColor;
                                    diode3_2.style.backgroundColor = diodeColor;
                                    diode4_2.style.backgroundColor = diodeColor;
                                    diode5_2.style.backgroundColor = diodeColor;
                                    diode6_2.style.backgroundColor = diodeColor;
                                    diode6_3.style.backgroundColor = diodeColor;
                                    diode6_4.style.backgroundColor = diodeColor;
                                    case ' ':
                                    break;
                   case 'r':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                    diode6_4.style.backgroundColor = diodeColor;
                    break;
                case 's':
                    clear();
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;

                    break;

                case 't':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_3.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_3.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;


                    break;


                case 'u':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode4_4.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;


                    break;

                case 'v':
                    clear();
                    diode2_1.style.backgroundColor = diodeColor;
                    diode2_5.style.backgroundColor = diodeColor;
                    diode3_1.style.backgroundColor = diodeColor;
                    diode3_5.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode4_4.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;


                    break;

                    case 'c':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                     diode6_3.style.backgroundColor = diodeColor; 
                     diode6_4.style.backgroundColor = diodeColor;
                    break;
                    case 'd':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor
                    diode2_3.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode4_4.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                     diode5_4.style.backgroundColor = diodeColor; 
                     diode6_2.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    break;
                    case 'e':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                     diode4_3.style.backgroundColor = diodeColor;
                      diode4_4.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                     diode6_3.style.backgroundColor = diodeColor; 
                     diode6_4.style.backgroundColor = diodeColor;
                    break;
                    case 'f':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                     diode4_3.style.backgroundColor = diodeColor;
                     
                    diode5_2.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                     
                    break;
                    case 'g':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor; 
                    diode4_4.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;                 
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                     diode6_3.style.backgroundColor = diodeColor; 
                     diode6_4.style.backgroundColor = diodeColor;
                     
                    break;
                    case 'm':
                    clear();
                    diode2_1.style.backgroundColor = diodeColor;
                    diode3_1.style.backgroundColor = diodeColor;
                    diode4_1.style.backgroundColor = diodeColor;
                    diode5_1.style.backgroundColor = diodeColor;
                    diode6_1.style.backgroundColor = diodeColor;
                    diode2_2.style.backgroundColor = diodeColor;
                    diode3_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode2_5.style.backgroundColor = diodeColor;
                    diode3_5.style.backgroundColor = diodeColor;
                    diode4_5.style.backgroundColor = diodeColor;
                    diode5_5.style.backgroundColor = diodeColor;
                    diode6_5.style.backgroundColor = diodeColor;
                    break;
                case 'n':
                    clear();
                    diode2_1.style.backgroundColor = diodeColor;
                    diode3_1.style.backgroundColor = diodeColor;
                    diode4_1.style.backgroundColor = diodeColor;
                    diode5_1.style.backgroundColor = diodeColor;
                    diode6_1.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_5.style.backgroundColor = diodeColor;
                    diode5_5.style.backgroundColor = diodeColor;
                    diode4_5.style.backgroundColor = diodeColor;
                    diode3_5.style.backgroundColor = diodeColor;
                    diode2_5.style.backgroundColor = diodeColor;
                    break;
                case 'o':
                    clear();
                    diode3_1.style.backgroundColor = diodeColor;
                    diode4_1.style.backgroundColor = diodeColor;
                    diode5_1.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    diode6_4.style.backgroundColor = diodeColor;
                    diode5_5.style.backgroundColor = diodeColor;
                    diode4_5.style.backgroundColor = diodeColor;
                    diode3_5.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_2.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    
                    break;
                case 'p':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    break;
                case 'q':
                    clear();
                    diode3_1.style.backgroundColor = diodeColor;
                    diode4_1.style.backgroundColor = diodeColor;
                    diode5_1.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    diode6_4.style.backgroundColor = diodeColor;
                    diode5_5.style.backgroundColor = diodeColor;
                    diode4_5.style.backgroundColor = diodeColor;
                    diode3_5.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_2.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode7_5.style.backgroundColor = diodeColor;
                    break;

                    case 'а':
                    clear();
                    diode6_2.style.backgroundColor = diodeColor
                    diode5_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode4_4.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_4.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    break;
                    case ' ':
                case 'в':
                    clear();
                    diode6_2.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode2_2.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    case ' ':
                    break;

                    case 'б':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor
                    diode2_4.style.backgroundColor = diodeColor
                    diode2_3.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                     diode5_4.style.backgroundColor = diodeColor; 
                     diode6_2.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    case ' ':
                    break;
                    case 'г':
                        clear();
                        diode2_2.style.backgroundColor = diodeColor
                        diode2_4.style.backgroundColor = diodeColor
                        diode2_3.style.backgroundColor = diodeColor;
                        diode3_2.style.backgroundColor = diodeColor;
                        diode4_2.style.backgroundColor = diodeColor;
                        diode5_2.style.backgroundColor = diodeColor;
                         diode6_2.style.backgroundColor = diodeColor; 
                        case ' ':
                        break;
                        case 'д':
                            clear();
                            diode3_2.style.backgroundColor = diodeColor
                            diode3_4.style.backgroundColor = diodeColor
                            diode3_3.style.backgroundColor = diodeColor;
                            diode4_4.style.backgroundColor = diodeColor;
                            diode5_4.style.backgroundColor = diodeColor;
                            diode4_2.style.backgroundColor = diodeColor;
                             diode6_1.style.backgroundColor = diodeColor; 
                             diode5_2.style.backgroundColor = diodeColor;
                             diode5_3.style.backgroundColor = diodeColor;
                              diode6_1.style.backgroundColor = diodeColor; 
                              diode6_5.style.backgroundColor = diodeColor; 
                              diode5_1.style.backgroundColor = diodeColor; 
                              diode5_5.style.backgroundColor = diodeColor; 
                            case ' ':
                            break;
                            case 'е':
                    clear();
                    diode2_2.style.backgroundColor = diodeColor
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                     diode4_3.style.backgroundColor = diodeColor;
                      diode4_4.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;
                     diode6_3.style.backgroundColor = diodeColor; 
                     diode6_4.style.backgroundColor = diodeColor;
                    break;
                    case 'є':
                        clear();
                        diode2_3.style.backgroundColor = diodeColor;
                        diode2_4.style.backgroundColor = diodeColor;
                        diode3_2.style.backgroundColor = diodeColor;
                        diode4_2.style.backgroundColor = diodeColor;
                         diode4_3.style.backgroundColor = diodeColor;
                          diode4_4.style.backgroundColor = diodeColor;
                        diode5_2.style.backgroundColor = diodeColor;
                         diode6_3.style.backgroundColor = diodeColor; 
                         diode6_4.style.backgroundColor = diodeColor;
                        break;
                        case 'ж':
                            clear();
                            diode3_3.style.backgroundColor = diodeColor;
                            diode4_3.style.backgroundColor = diodeColor;
                            diode5_3.style.backgroundColor = diodeColor;
                            diode4_2.style.backgroundColor = diodeColor;
                            diode4_4.style.backgroundColor = diodeColor;
                            diode5_1.style.backgroundColor = diodeColor;
                            diode3_1.style.backgroundColor = diodeColor;
                            diode3_5.style.backgroundColor = diodeColor;
                            diode5_5.style.backgroundColor = diodeColor;
                            break;
                            
                            case 'з':
                                clear();
                                diode2_2.style.backgroundColor = diodeColor;
                                diode4_2.style.backgroundColor = diodeColor;
                                diode2_3.style.backgroundColor = diodeColor;
                                diode3_4.style.backgroundColor = diodeColor;
                                diode4_3.style.backgroundColor = diodeColor;
                                diode6_3.style.backgroundColor = diodeColor;
                                diode5_4.style.backgroundColor = diodeColor;
                                diode6_2.style.backgroundColor = diodeColor;
                                break;
                                case 'и':
                                    clear();
                                    diode2_1.style.backgroundColor = diodeColor;
                                    diode3_1.style.backgroundColor = diodeColor;
                                    diode4_1.style.backgroundColor = diodeColor;
                                    diode5_1.style.backgroundColor = diodeColor;
                                    diode6_1.style.backgroundColor = diodeColor;
                                    diode3_4.style.backgroundColor = diodeColor;
                                    diode4_3.style.backgroundColor = diodeColor;
                                    diode5_2.style.backgroundColor = diodeColor;
                                    diode6_5.style.backgroundColor = diodeColor;
                                    diode5_5.style.backgroundColor = diodeColor;
                                    diode4_5.style.backgroundColor = diodeColor;
                                    diode3_5.style.backgroundColor = diodeColor;
                                    diode2_5.style.backgroundColor = diodeColor;
                                    break;
                                    case 'ї':
                                        clear();
                                        diode4_3.style.backgroundColor = diodeColor;
                                        diode3_3.style.backgroundColor = diodeColor;
                                        diode5_3.style.backgroundColor = diodeColor;
                                        diode6_3.style.backgroundColor = diodeColor;
                                        diode2_2.style.backgroundColor = diodeColor;
                                        diode2_4.style.backgroundColor = diodeColor;
                                        break;
                                        case 'і':
                                            clear();
                                            diode4_3.style.backgroundColor = diodeColor;
                                            diode3_3.style.backgroundColor = diodeColor;
                                            diode5_3.style.backgroundColor = diodeColor;
                                            diode6_3.style.backgroundColor = diodeColor;
                                            break;
                                            case 'й':
                                                clear();
                                                diode2_1.style.backgroundColor = diodeColor;
                                                diode3_1.style.backgroundColor = diodeColor;
                                                diode4_1.style.backgroundColor = diodeColor;
                                                diode5_1.style.backgroundColor = diodeColor;
                                                diode6_1.style.backgroundColor = diodeColor;
                                                diode3_4.style.backgroundColor = diodeColor;
                                                diode4_3.style.backgroundColor = diodeColor;
                                                diode5_2.style.backgroundColor = diodeColor;
                                                diode6_5.style.backgroundColor = diodeColor;
                                                diode5_5.style.backgroundColor = diodeColor;
                                                diode4_5.style.backgroundColor = diodeColor;
                                                diode3_5.style.backgroundColor = diodeColor;
                                                diode2_5.style.backgroundColor = diodeColor;
                                                diode1_2.style.backgroundColor = diodeColor;
                                                diode2_3.style.backgroundColor = diodeColor;
                                                diode1_4.style.backgroundColor = diodeColor;
                                                break;
                                                case 'к':
                                                    clear();
                                                   diode2_2.style.backgroundColor = diodeColor;
                                                   diode3_3.style.backgroundColor = diodeColor;
                                                   diode2_4.style.backgroundColor = diodeColor;
                                                   diode3_2.style.backgroundColor = diodeColor;
                                                   diode4_2.style.backgroundColor = diodeColor;
                                                   diode5_2.style.backgroundColor = diodeColor;
                                                   diode6_2.style.backgroundColor = diodeColor;
                                                   diode5_3.style.backgroundColor = diodeColor;
                                                   diode6_4.style.backgroundColor = diodeColor;
                                                   case ' ':
                                                   break;
                                                   case 'л':
                                                    clear();
                                                    diode2_2.style.backgroundColor = diodeColor
                                                    diode2_4.style.backgroundColor = diodeColor
                                                    diode2_3.style.backgroundColor = diodeColor;
                                                    diode3_4.style.backgroundColor = diodeColor;
                                                    diode4_2.style.backgroundColor = diodeColor;
                                                     diode5_1.style.backgroundColor = diodeColor; 
                                                      diode5_1.style.backgroundColor = diodeColor; 
                                                      diode5_4.style.backgroundColor = diodeColor; 
                                                      diode4_4.style.backgroundColor = diodeColor;
                                                    diode4_2.style.backgroundColor = diodeColor;
                                                    diode3_2.style.backgroundColor = diodeColor;
                                                    case ' ':
                                                    break;
                                                    case 'м':
                                                        clear();
                                                        diode2_1.style.backgroundColor = diodeColor;
                                                        diode3_1.style.backgroundColor = diodeColor;
                                                        diode4_1.style.backgroundColor = diodeColor;
                                                        diode5_1.style.backgroundColor = diodeColor;
                                                        diode6_1.style.backgroundColor = diodeColor;
                                                        diode2_2.style.backgroundColor = diodeColor;
                                                        diode3_3.style.backgroundColor = diodeColor;
                                                        diode2_4.style.backgroundColor = diodeColor;
                                                        diode2_5.style.backgroundColor = diodeColor;
                                                        diode3_5.style.backgroundColor = diodeColor;
                                                        diode4_5.style.backgroundColor = diodeColor;
                                                        diode5_5.style.backgroundColor = diodeColor;
                                                        diode6_5.style.backgroundColor = diodeColor;
                                                        break;
                                                        case 'н':
                                                            clear();
                                                            diode2_2.style.backgroundColor = diodeColor;
                                                            diode3_2.style.backgroundColor = diodeColor;
                                                            diode4_2.style.backgroundColor = diodeColor;
                                                            diode5_2.style.backgroundColor = diodeColor;
                                                            diode6_2.style.backgroundColor = diodeColor;
                                                            diode2_4.style.backgroundColor = diodeColor;
                                                            diode3_4.style.backgroundColor = diodeColor;
                                                            diode4_4.style.backgroundColor = diodeColor;
                                                            diode5_4.style.backgroundColor = diodeColor;
                                                            diode6_4.style.backgroundColor = diodeColor;
                                                            diode4_3.style.backgroundColor = diodeColor;
                                                            break;
                                                            case 'о':
                                                                clear();
                                                                diode3_1.style.backgroundColor = diodeColor;
                                                                diode4_1.style.backgroundColor = diodeColor;
                                                                diode5_1.style.backgroundColor = diodeColor;
                                                                diode6_2.style.backgroundColor = diodeColor;
                                                                diode6_3.style.backgroundColor = diodeColor;
                                                                diode6_4.style.backgroundColor = diodeColor;
                                                                diode5_5.style.backgroundColor = diodeColor;
                                                                diode4_5.style.backgroundColor = diodeColor;
                                                                diode3_5.style.backgroundColor = diodeColor;
                                                                diode2_3.style.backgroundColor = diodeColor;
                                                                diode2_2.style.backgroundColor = diodeColor;
                                                                diode2_4.style.backgroundColor = diodeColor;
                                                                
                                                                break;
                                                                case 'п':
                                                                    clear();
                                                                    diode2_2.style.backgroundColor = diodeColor
                                                                    diode2_4.style.backgroundColor = diodeColor
                                                                    diode2_3.style.backgroundColor = diodeColor;
                                                                    diode3_4.style.backgroundColor = diodeColor;
                                                                    diode4_2.style.backgroundColor = diodeColor;                                                                      diode5_2.style.backgroundColor = diodeColor; 
                                                                      diode5_4.style.backgroundColor = diodeColor; 
                                                                      diode4_4.style.backgroundColor = diodeColor;
                                                                    diode4_2.style.backgroundColor = diodeColor;
                                                                    diode3_2.style.backgroundColor = diodeColor;
                                                                    diode6_2.style.backgroundColor = diodeColor;
                                                                    diode6_4.style.backgroundColor = diodeColor;
                                                                    case ' ':
                                                                    break;
                                                                    case 'р':
                                                                        clear();
                                                                        diode2_2.style.backgroundColor = diodeColor;
                                                                        diode3_2.style.backgroundColor = diodeColor;
                                                                        diode4_2.style.backgroundColor = diodeColor;
                                                                        diode5_2.style.backgroundColor = diodeColor;
                                                                        diode6_2.style.backgroundColor = diodeColor;
                                                                        diode2_3.style.backgroundColor = diodeColor;
                                                                        diode3_4.style.backgroundColor = diodeColor;
                                                                        diode4_3.style.backgroundColor = diodeColor;
                                                                        break;
                                                                        case 'с':
                                                                            clear();
                                                                            diode2_2.style.backgroundColor = diodeColor
                                                                            diode2_3.style.backgroundColor = diodeColor;
                                                                            diode2_4.style.backgroundColor = diodeColor;
                                                                            diode3_2.style.backgroundColor = diodeColor;
                                                                            diode4_2.style.backgroundColor = diodeColor;
                                                                            diode5_2.style.backgroundColor = diodeColor;
                                                                            diode6_2.style.backgroundColor = diodeColor;
                                                                             diode6_3.style.backgroundColor = diodeColor; 
                                                                             diode6_4.style.backgroundColor = diodeColor;
                                                                            break;
                                                                            case 'т':
                                                                                clear();
                                                                                diode2_2.style.backgroundColor = diodeColor;
                                                                                diode2_3.style.backgroundColor = diodeColor;
                                                                                diode2_4.style.backgroundColor = diodeColor;
                                                                                diode3_3.style.backgroundColor = diodeColor;
                                                                                diode4_3.style.backgroundColor = diodeColor;
                                                                                diode5_3.style.backgroundColor = diodeColor;
                                                                                diode6_3.style.backgroundColor = diodeColor;
                                                            
                                                            
                                                                                break;
                                                                                case 'у':
                
                                                                                    clear();
                                                                                    diode2_2.style.backgroundColor = diodeColor;
                                                                                    diode3_2.style.backgroundColor = diodeColor;
                                                                                    diode3_4.style.backgroundColor = diodeColor;
                                                                                    diode2_4.style.backgroundColor = diodeColor;
                                                                                    diode4_3.style.backgroundColor = diodeColor;
                                                                                    diode5_3.style.backgroundColor = diodeColor;
                                                                                    diode6_3.style.backgroundColor = diodeColor;
                                                                                
                                                                                case ' ':
                                                                                    break;
                                                                                    case 'ф':
                                                                                        clear();
                                                                                        diode2_3.style.backgroundColor = diodeColor;
                                                                                        diode3_3.style.backgroundColor = diodeColor;
                                                                                        diode4_3.style.backgroundColor = diodeColor;
                                                                                        diode5_3.style.backgroundColor = diodeColor;
                                                                                        diode6_3.style.backgroundColor = diodeColor;
                                                                                        diode2_4.style.backgroundColor = diodeColor;
                                                                                        diode3_5.style.backgroundColor = diodeColor;
                                                                                        diode4_4.style.backgroundColor = diodeColor;
                                                                                        diode2_2.style.backgroundColor = diodeColor;
                                                                                        diode3_1.style.backgroundColor = diodeColor;
                                                                                        diode4_2.style.backgroundColor = diodeColor;
                                                                                        break;
                                                                                        case 'х':
                 
                                                                                            clear();
                                                                                            diode2_2.style.backgroundColor = diodeColor;
                                                                                            diode3_2.style.backgroundColor = diodeColor;
                                                                                            diode3_4.style.backgroundColor = diodeColor;
                                                                                            diode2_4.style.backgroundColor = diodeColor;
                                                                                            diode4_3.style.backgroundColor = diodeColor;
                                                                                            diode5_4.style.backgroundColor = diodeColor;
                                                                                            diode5_2.style.backgroundColor = diodeColor;
                                                                                            diode6_2.style.backgroundColor = diodeColor;
                                                                                            diode6_4.style.backgroundColor = diodeColor;
                                                                                        case ' ':
                                                                                            break;
                                                                                            case 'ц':
                                                                                                clear();
                                                                                                diode2_4.style.backgroundColor = diodeColor;
                                                                                                diode2_2.style.backgroundColor = diodeColor;
                                                                                                diode3_4.style.backgroundColor = diodeColor;
                                                                                                diode4_2.style.backgroundColor = diodeColor;                                                                      diode5_2.style.backgroundColor = diodeColor; 
                                                                                                  diode5_4.style.backgroundColor = diodeColor; 
                                                                                                  diode4_4.style.backgroundColor = diodeColor;
                                                                                                diode4_2.style.backgroundColor = diodeColor;
                                                                                                diode3_2.style.backgroundColor = diodeColor;
                                                                                                diode6_5.style.backgroundColor = diodeColor;
                                                                                                diode5_3.style.backgroundColor = diodeColor;
                                                                                                diode6_4.style.backgroundColor = diodeColor;

                                                                                                case ' ':
                                                                                                break;
                                                                                                case 'ч':
                                                                                                    clear();
                                                                                                    diode2_2.style.backgroundColor = diodeColor;
                                                                                                    diode3_2.style.backgroundColor = diodeColor;
                                                                                                    diode4_2.style.backgroundColor = diodeColor;
                                                                                                    diode2_4.style.backgroundColor = diodeColor;
                                                                                                    diode3_4.style.backgroundColor = diodeColor;
                                                                                                    diode4_4.style.backgroundColor = diodeColor;
                                                                                                    diode5_4.style.backgroundColor = diodeColor;
                                                                                                    diode6_4.style.backgroundColor = diodeColor;
                                                                                                    diode4_3.style.backgroundColor = diodeColor;
                                                                                                    break;
                                                                                                    case 'ш':
                                                                                                        clear();
                                                                                                        diode3_3.style.backgroundColor = diodeColor;
                                                                                                        diode4_3.style.backgroundColor = diodeColor;
                                                                                                        diode5_3.style.backgroundColor = diodeColor;
                                                                                                        diode5_2.style.backgroundColor = diodeColor;
                                                                                                        diode5_4.style.backgroundColor = diodeColor;
                                                                                                        diode5_1.style.backgroundColor = diodeColor;
                                                                                                        diode3_1.style.backgroundColor = diodeColor;
                                                                                                        diode3_5.style.backgroundColor = diodeColor;
                                                                                                        diode5_5.style.backgroundColor = diodeColor;
                                                                                                        diode4_5.style.backgroundColor = diodeColor;
                                                                                                        diode4_1.style.backgroundColor = diodeColor;
                                                                                                        break;
                                                                                                        case 'щ':
                                                                                                            clear();
                                                                                                            diode3_3.style.backgroundColor = diodeColor;
                                                                                                            diode4_3.style.backgroundColor = diodeColor;
                                                                                                            diode5_3.style.backgroundColor = diodeColor;
                                                                                                            diode5_2.style.backgroundColor = diodeColor;
                                                                                                            diode5_4.style.backgroundColor = diodeColor;
                                                                                                            diode5_1.style.backgroundColor = diodeColor;
                                                                                                            diode3_1.style.backgroundColor = diodeColor;
                                                                                                            diode3_5.style.backgroundColor = diodeColor;
                                                                                                            diode5_5.style.backgroundColor = diodeColor;
                                                                                                            diode4_5.style.backgroundColor = diodeColor;
                                                                                                            diode4_1.style.backgroundColor = diodeColor;
                                                                                                            diode6_5.style.backgroundColor = diodeColor;
                                                                                                            break;
                                                                                                            case 'ь':
                                                                                                                clear();
                                                                                                                diode2_2.style.backgroundColor = diodeColor
                                                                                                                diode3_2.style.backgroundColor = diodeColor;
                                                                                                                diode4_2.style.backgroundColor = diodeColor;
                                                                                                                diode4_3.style.backgroundColor = diodeColor;
                                                                                                                diode5_2.style.backgroundColor = diodeColor;
                                                                                                                 diode5_4.style.backgroundColor = diodeColor; 
                                                                                                                 diode6_2.style.backgroundColor = diodeColor;
                                                                                                                diode6_3.style.backgroundColor = diodeColor;
                                                                                                                case ' ':
                                                                                                                break;
                                                                                                                case 'ю':
                                                                                                                    clear();
                                                                                                                    diode2_1.style.backgroundColor = diodeColor;
                                                                                                                    diode3_1.style.backgroundColor = diodeColor;
                                                                                                                    diode4_1.style.backgroundColor = diodeColor;
                                                                                                                    diode5_1.style.backgroundColor = diodeColor;
                                                                                                                    diode6_1.style.backgroundColor = diodeColor;
                                                                                                                    diode3_3.style.backgroundColor = diodeColor;
                                                                                                                    diode4_3.style.backgroundColor = diodeColor;
                                                                                                                    diode5_3.style.backgroundColor = diodeColor;
                                                                                                                    diode4_2.style.backgroundColor = diodeColor;
                                                                                                                    diode6_4.style.backgroundColor = diodeColor;
                                                                                                                    diode2_4.style.backgroundColor = diodeColor;
                                                                                                                    diode3_5.style.backgroundColor = diodeColor;
                                                                                                                    diode4_5.style.backgroundColor = diodeColor;
                                                                                                                    diode5_5.style.backgroundColor = diodeColor;
                                                                                                                    break;
                                                                                                                    case 'я':
                                                                                                                        clear();
                                                                                                                        diode6_2.style.backgroundColor = diodeColor
                                                                                                                        diode5_3.style.backgroundColor = diodeColor;
                                                                                                                        diode4_2.style.backgroundColor = diodeColor;
                                                                                                                        diode3_2.style.backgroundColor = diodeColor;
                                                                                                                        diode2_3.style.backgroundColor = diodeColor;
                                                                                                                        diode3_4.style.backgroundColor = diodeColor;
                                                                                                                        diode4_4.style.backgroundColor = diodeColor;
                                                                                                                        diode5_4.style.backgroundColor = diodeColor;
                                                                                                                        diode6_4.style.backgroundColor = diodeColor;
                                                                                                                        diode4_3.style.backgroundColor = diodeColor;
                                                                                                                        diode2_4.style.backgroundColor = diodeColor;
                                                                                                                        break;
                                                                                                                
            }
        } else {
            clearInterval(timerId);
            clear();
        }
        i++;
    }, 500)
}

let clearColor = 'white';

function clear() {
    diode1_1.style.backgroundColor = clearColor;
    diode1_2.style.backgroundColor = clearColor;
    diode1_3.style.backgroundColor = clearColor;
    diode1_4.style.backgroundColor = clearColor;
    diode1_5.style.backgroundColor = clearColor;

    diode2_1.style.backgroundColor = clearColor;
    diode2_2.style.backgroundColor = clearColor;
    diode2_3.style.backgroundColor = clearColor;
    diode2_4.style.backgroundColor = clearColor;
    diode2_5.style.backgroundColor = clearColor;

    diode3_1.style.backgroundColor = clearColor;
    diode3_2.style.backgroundColor = clearColor;
    diode3_3.style.backgroundColor = clearColor;
    diode3_4.style.backgroundColor = clearColor;
    diode3_5.style.backgroundColor = clearColor;

    diode4_1.style.backgroundColor = clearColor;
    diode4_2.style.backgroundColor = clearColor;
    diode4_3.style.backgroundColor = clearColor;
    diode4_4.style.backgroundColor = clearColor;
    diode4_5.style.backgroundColor = clearColor;

    diode5_1.style.backgroundColor = clearColor;
    diode5_2.style.backgroundColor = clearColor;
    diode5_3.style.backgroundColor = clearColor;
    diode5_4.style.backgroundColor = clearColor;
    diode5_5.style.backgroundColor = clearColor;

    diode6_1.style.backgroundColor = clearColor;
    diode6_2.style.backgroundColor = clearColor;
    diode6_3.style.backgroundColor = clearColor;
    diode6_4.style.backgroundColor = clearColor;
    diode6_5.style.backgroundColor = clearColor;

    diode7_1.style.backgroundColor = clearColor;
    diode7_2.style.backgroundColor = clearColor;
    diode7_3.style.backgroundColor = clearColor;
    diode7_4.style.backgroundColor = clearColor;
    diode7_5.style.backgroundColor = clearColor;
}
