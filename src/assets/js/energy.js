const Energy = {
  data() {
      return {
          elecStdData: [
            {
              type: "13평이하",
              data: [
                {month : "1월", val : 209},
                {month : "2월", val : 214},
                {month : "3월", val : 220},
                {month : "4월", val : 171},
                {month : "5월", val : 261},
                {month : "6월", val : 175},
                {month : "7월", val : 284},
                {month : "8월", val : 305},
                {month : "9월", val : 232},
                {month : "10월", val : 200},
                {month : "11월", val : 201},
                {month : "12월", val : 217},
              ]
            },
            {
              type: "13~24평",
              data: [
                {month : "1월", val : 252},
                {month : "2월", val : 216},
                {month : "3월", val : 253},
                {month : "4월", val : 207},
                {month : "5월", val : 281},
                {month : "6월", val : 213},
                {month : "7월", val : 355},
                {month : "8월", val : 366},
                {month : "9월", val : 280},
                {month : "10월", val : 231},
                {month : "11월", val : 241},
                {month : "12월", val : 255},
              ]
            },
            {
              type: "24~32평",
              data: [
                {month : "1월", val : 249},
                {month : "2월", val : 239},
                {month : "3월", val : 251},
                {month : "4월", val : 202},
                {month : "5월", val : 284},
                {month : "6월", val : 248},
                {month : "7월", val : 363},
                {month : "8월", val : 384},
                {month : "9월", val : 289},
                {month : "10월", val : 252},
                {month : "11월", val : 268},
                {month : "12월", val : 289},
              ]
            },
            {
              type: "32~38평",
              data: [
                {month : "1월", val : 262},
                {month : "2월", val : 258},
                {month : "3월", val : 274},
                {month : "4월", val : 193},
                {month : "5월", val : 311},
                {month : "6월", val : 266},
                {month : "7월", val : 400},
                {month : "8월", val : 435},
                {month : "9월", val : 318},
                {month : "10월", val : 288},
                {month : "11월", val : 297},
                {month : "12월", val : 318},
              ]
            },
            {
              type: "38~42평",
              data: [
                {month : "1월", val : 250},
                {month : "2월", val : 271},
                {month : "3월", val : 296},
                {month : "4월", val : 238},
                {month : "5월", val : 326},
                {month : "6월", val : 241},
                {month : "7월", val : 412},
                {month : "8월", val : 453},
                {month : "9월", val : 320},
                {month : "10월", val : 280},
                {month : "11월", val : 314},
                {month : "12월", val : 331},
              ]
            },
            {
              type: "42평이상",
              data: [
                {month : "1월", val : 264},
                {month : "2월", val : 294},
                {month : "3월", val : 307},
                {month : "4월", val : 256},
                {month : "5월", val : 343},
                {month : "6월", val : 328},
                {month : "7월", val : 434},
                {month : "8월", val : 448},
                {month : "9월", val : 340},
                {month : "10월", val : 304},
                {month : "11월", val : 324},
                {month : "12월", val : 343},
              ]
            },
          ],
      };
  },

  methods: {
      calSunEnergy(use, calSunType){
        let calUse = parseInt(use);
        if(calSunType === "1")
          return calUse * 3.5 * 30;
        else
          return calUse * 3.5 * 30 / 1000;
      },

      calEnergyPay(use, type){
        let basicPay = 0;
        let depth1Use = 0, depth2Use = 0, depth3Use = 0;
        const depth1Pay = 120, depth2Pay = 214.6, depth3Pay = 307.3;
        let depth1Val = 0, depth2Val = 0;
        let calUse = parseInt(use);

        if(type === "1") //일반 전기요금 기준
          depth1Val = 200, depth2Val = 400;
        else //하계 전기요금 기준
          depth1Val = 300, depth2Val = 450;

        if(calUse > depth1Val){
          depth1Use = depth1Val;

          if(calUse > depth2Val){
            depth2Use = depth2Val - depth1Val;
            depth3Use = calUse - depth2Val;
            basicPay = 7300;
          } else {
            depth2Use = calUse - depth1Val;
            depth3Use = 0;
            basicPay = 1600;
          }
        } else {
          depth1Use = calUse;
          depth2Use = 0;
          depth3Use = 0;
          basicPay = 910;
        }

        return Math.floor((depth1Use * depth1Pay) + (depth2Use * depth2Pay) + (depth3Use * depth3Pay) + basicPay);
      }
  },
};

export default Energy;
