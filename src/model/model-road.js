import {getBezierCurve} from "../utils";

/**
 * 
 * levels [] - level
 * levels [] [] - points
 * levels [] [] [] - steps
 * levels [] [] [] [x, y] - coordStep
 * speed - "скорость"
 * 
 */

const speed = 0.05;
export const levels = [];
      levels[0] = [];
        levels[0][0] = [[433.5,437],[405.5,423],[393.5,403],[376.5,394],[359.5,398],[340.5,406]];

        levels[0][1] = [[339.5,405],[315.5,420],[294.5,433],[266.5,448]];

        levels[0][2] = [[264.5,449],[246.5,460],[220.5,465],[193.5,468],[178.5,468]];

        levels[0][3] = [[176.5,468],[152.5,465],[128.5,456],[113.5,447],[99.5,439]];
        
        levels[0][4] = [[98.5,439],[79.5,428],[70.5,415],[74.5,402],[99.5,387],[108.5,381],[112.5,376]];
    
    levels[1] = [];
        levels[1][0] = [[112.5,375],[108.5,366],[102.5,358],[102.5,344],[108.5,333],[118.5,326],[131.5,319]];

        levels[1][1] = [[130.5,319],[154.5,306],[180.5,293],[203.5,282]];

        levels[1][2] = [[203.5,282],[219.5,270],[226.5,256],[220.5,245],[190.5,227],[169.5,214],[165.5,211]];

        levels[1][3] = [[165.5,210],[143.5,200],[119.5,185],[110.5,174],[115.5,164],[126.5,158]];

        levels[1][4] = [[127.5,159],[147.5,149],[151.5,144],[145.5,135],[141.5,127],[145.5,114],[155.5,109],[169.5,108],[179.5,116],[186.5,124],[190.5,128]];
    
    levels[2] = [];
        levels[2][0] = [[190.5,128],[205.5,147],[220.5,165],[233.5,173],[242.5,174]];

        levels[2][1] = [[242.5,175],[263.5,171],[279.5,161],[286.5,147],[285.5,136]];

        levels[2][2] = [[285.5,136],[282.5,120],[273.5,108],[268.5,97],[270.5,89],[280.5,85],[301.5,88],[320.5,87]];

        levels[2][3] = [[320.5,88],[327.5,83],[329.5,75],[330.5,68],[336.5,64],[351.5,52],[358.5,44],[361.5,41]];

        levels[2][4] = [[361.5,41],[365.5,19],[362.5,-4],[365.5,-18],[374.5,-30],[388.5,-37],[401.5,-34],[409.5,-29]];
    
    levels[3] = [];
        levels[3][0] = [[409.5,-29],[424.5,-15],[438.5,-5],[461.5,-3],[481.5,-6],[491.5,-2],[493.5,9]];

        levels[3][1] = [[492.5,9],[470.5,20],[464.5,34],[465.5,52],[451.5,78],[449.5,82]];

        levels[3][2] = [[449.5,83],[450.5,96],[467.5,108],[482.5,121],[486.5,134],[480.5,149],[475.5,155]];

        levels[3][3] = [[474.5,156],[463.5,169],[461.5,190],[459.5,209],[449.5,228],[445.5,232]];
    
    levels[4] = [];
        levels[4][0] = [[445.5,232],[424.5,248],[395.5,266],[379.5,274],[374.5,278]];

        levels[4][1] = [[374.5,278],[339.5,301],[331.5,312],[335.5,320],[357.5,338],[364.5,341]];

        levels[4][2] = [[364.5,341],[381.5,350],[395.5,357],[413.5,359],[442.5,358]];

        levels[4][3] = [[443.5,358],[478.5,378],[508.5,395],[514.5,398]];

        levels[4][4] = [[514.5,398],[554.5,423],[577.5,435],[596.5,440],[608.5,434],[611.5,431]];

    levels[5] = [];
        levels[5][0] = [[611.5,430],[615.5,419],[631.5,408],[651.5,415],[671.5,440],[688.5,453],[704.5,453]];

        levels[5][1] = [[704.5,453],[748.5,431],[784.5,410],[795.5,405],[798.5,400]];

        levels[5][2] = [[798.5,401],[834.5,376],[859.5,361],[869.5,355],[873.5,353]];

        levels[5][3] = [[873.5,353],[901.5,338],[930.5,320],[936.5,314]];

        levels[5][4] = [[937.5,315],[953.5,295],[957.5,278],[951.5,249],[950.5,245]];

    levels[6] = [];
        levels[6][0] = [[949.5,246],[937.5,226],[928.5,218],[912.5,213],[898.5,215],[892.5,218]];

        levels[6][1] = [[891.5,218],[864.5,235],[836.5,253],[830.5,256]];

        levels[6][2] = [[831.5,257],[806.5,272],[778.5,289],[772.5,292]];

        levels[6][3] = [[772.5,292],[755.5,302],[737.5,301],[715.5,286],[709.5,281]];

        levels[6][4] = [[709.5,282],[686.5,263],[683.5,250],[689.5,238],[707.5,230],[714.5,228]];

        levels[6][5] = [[714.5,228],[746.5,211],[781.5,191],[785.5,189]];

    levels[7] = [];
        levels[7][0] = [[786.5,189],[802.5,168],[809.5,148],[798.5,124],[795.5,119]];

        levels[7][1] = [[795.5,119],[767.5,108],[748.5,108],[740.5,110]];

        levels[7][2] = [[740.5,109],[703.5,130],[673.5,144],[668.5,147]];

        levels[7][3] = [[667.5,146],[637.5,160],[623.5,171],[616.5,182],[613.5,187]];

        levels[7][4] = [[613.5,188],[608.5,211],[593.5,224],[569.5,235]];

        levels[7][5] = [[569.5,235],[541.5,235],[524.5,229],[516.5,221],[511.5,218]];

    levels[8] = [];
        levels[8][0] = [[511.5,218],[494.5,195],[493.5,173],[495.5,161]];

        levels[8][1] = [[495.5,161],[510.5,132],[529.5,109],[533.5,106]];

        levels[8][2] = [[533.5,106],[557.5,83],[573.5,75],[579.5,72]];

        levels[8][3] = [[579.5,72],[611.5,57],[621.5,51],[624.5,42],[610.5,31],[604.5,20],[603.5,14]];

        levels[8][4] = [[603.5,14],[609.5,-12],[625.5,-31],[630.5,-36],[634.5,-38]];

        levels[8][5] = [[635.5,-38],[652.5,-43],[671.5,-35],[685.5,-17],[687.5,-11]];

    levels[9] = [];
        levels[9][0] = [[688.5,-11],[688.5,8],[665.5,24],[651.5,45],[650.5,61],[661.5,69]];

        levels[9][1] = [[661.5,69],[677.5,66],[689.5,49],[708.5,25],[733.5,15],[741.5,14]];

        levels[9][2] = [[741.5,14],[780.5,27],[802.5,43],[797.5,59],[809.5,68]];

        levels[9][3] = [[807.5,69],[824.5,69],[842.5,45],[848.5,39],[854.5,37]];

        levels[9][4] = [[854.5,37],[875.5,36],[885.5,46],[877.5,58],[857.5,69],[854.5,77],[865.5,87],[867.5,96],[873.5,102]];

    levels[0][0] = getBezierCurve(new Array(...levels[0][0]), speed);
    levels[0][1] = getBezierCurve(new Array(...levels[0][1]), speed);
    levels[0][2] = getBezierCurve(new Array(...levels[0][2]), speed);
    levels[0][3] = getBezierCurve(new Array(...levels[0][3]), speed);
    levels[0][4] = getBezierCurve(new Array(...levels[0][4]), speed);

    levels[1][0] = getBezierCurve(new Array(...levels[1][0]), speed);
    levels[1][1] = getBezierCurve(new Array(...levels[1][1]), speed);
    levels[1][2] = getBezierCurve(new Array(...levels[1][2]), speed);
    levels[1][3] = getBezierCurve(new Array(...levels[1][3]), speed);
    levels[1][4] = getBezierCurve(new Array(...levels[1][4]), speed);

    levels[2][0] = getBezierCurve(new Array(...levels[2][0]), speed);
    levels[2][1] = getBezierCurve(new Array(...levels[2][1]), speed);
    levels[2][2] = getBezierCurve(new Array(...levels[2][2]), speed);
    levels[2][3] = getBezierCurve(new Array(...levels[2][3]), speed);
    levels[2][4] = getBezierCurve(new Array(...levels[2][4]), speed);

    levels[3][0] = getBezierCurve(new Array(...levels[3][0]), speed);
    levels[3][1] = getBezierCurve(new Array(...levels[3][1]), speed);
    levels[3][2] = getBezierCurve(new Array(...levels[3][2]), speed);
    levels[3][3] = getBezierCurve(new Array(...levels[3][3]), speed);

    levels[4][0] = getBezierCurve(new Array(...levels[4][0]), speed);
    levels[4][1] = getBezierCurve(new Array(...levels[4][1]), speed);
    levels[4][2] = getBezierCurve(new Array(...levels[4][2]), speed);
    levels[4][3] = getBezierCurve(new Array(...levels[4][3]), speed);
    levels[4][4] = getBezierCurve(new Array(...levels[4][4]), speed);

    levels[5][0] = getBezierCurve(new Array(...levels[5][0]), speed);
    levels[5][1] = getBezierCurve(new Array(...levels[5][1]), speed);
    levels[5][2] = getBezierCurve(new Array(...levels[5][2]), speed);
    levels[5][3] = getBezierCurve(new Array(...levels[5][3]), speed);
    levels[5][4] = getBezierCurve(new Array(...levels[5][4]), speed);

    levels[6][0] = getBezierCurve(new Array(...levels[6][0]), speed);
    levels[6][1] = getBezierCurve(new Array(...levels[6][1]), speed);
    levels[6][2] = getBezierCurve(new Array(...levels[6][2]), speed);
    levels[6][3] = getBezierCurve(new Array(...levels[6][3]), speed);
    levels[6][4] = getBezierCurve(new Array(...levels[6][4]), speed);
    levels[6][5] = getBezierCurve(new Array(...levels[6][5]), speed);

    levels[7][0] = getBezierCurve(new Array(...levels[7][0]), speed);
    levels[7][1] = getBezierCurve(new Array(...levels[7][1]), speed);
    levels[7][2] = getBezierCurve(new Array(...levels[7][2]), speed);
    levels[7][3] = getBezierCurve(new Array(...levels[7][3]), speed);
    levels[7][4] = getBezierCurve(new Array(...levels[7][4]), speed);
    levels[7][5] = getBezierCurve(new Array(...levels[7][5]), speed);
    
    levels[8][0] = getBezierCurve(new Array(...levels[8][0]), speed);
    levels[8][1] = getBezierCurve(new Array(...levels[8][1]), speed);
    levels[8][2] = getBezierCurve(new Array(...levels[8][2]), speed);
    levels[8][3] = getBezierCurve(new Array(...levels[8][3]), speed);
    levels[8][4] = getBezierCurve(new Array(...levels[8][4]), speed);
    levels[8][5] = getBezierCurve(new Array(...levels[8][5]), speed);

    levels[9][0] = getBezierCurve(new Array(...levels[9][0]), speed);
    levels[9][1] = getBezierCurve(new Array(...levels[9][1]), speed);
    levels[9][2] = getBezierCurve(new Array(...levels[9][2]), speed);
    levels[9][3] = getBezierCurve(new Array(...levels[9][3]), speed);
    levels[9][4] = getBezierCurve(new Array(...levels[9][4]), speed);