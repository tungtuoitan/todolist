/** @type {import('tailwindcss').Config} */
module.exports = {
  // important:true,

  content: ["./src/**/*.{html,js}", "./public/*.{html,js,css}"],
  theme: {
    extend: {
      spacing: {
        c1120: "1120px",
        c600: "300px",
        c568: "568px",
        c550: "550px",
        c432: "432px",
        c400: "400px",
        c388: "388px",

        c566: "566px",
        c350: "350px",
        c330: "330px",
        c320: "320px",
        c390: "390px",
        c300: "300px",
        c290: "290px",
        c280: "280px",
        c261: "261px",
        c260: "260px",
        c250: "250px",

        c220: "220px",
        c200: "200px",
        c199: "199px",
        c198: "198px",
        c197: "197px",
        c196: "196px",
        c195: "195px",
        c194: "194px",
        c193: "193px",
        c192: "192px",
        c191: "191px",
        c190: "190px",
        c189: "189px",
        c188: "188px",
        c187: "187px",
        c186: "186px",
        c185: "185px",
        c184: "184px",
        c183: "183px",
        c182: "182px",
        c181: "181px",
        c180: "180px",
        c179: "179px",
        c178: "178px",
        c177: "177px",
        c176: "176px",
        c175: "175px",
        c174: "174px",
        c173: "173px",
        c172: "172px",
        c171: "171px",
        c170: "170px",
        c169: "169px",
        c168: "168px",
        c167: "167px",
        c166: "166px",
        c165: "165px",
        c164: "164px",
        c163: "163px",
        c162: "162px",
        c161: "161px",
        c160: "160px",
        c159: "159px",
        c158: "158px",
        c157: "157px",
        c156: "156px",
        c155: "155px",
        c154: "154px",
        c153: "153px",
        c152: "152px",
        c151: "151px",
        c150: "150px",
        c149: "149px",
        c148: "148px",
        c147: "147px",
        c146: "146px",
        c145: "145px",
        c144: "144px",
        c143: "143px",
        c142: "142px",
        c141: "141px",
        c140: "140px",
        c139: "139px",
        c138: "138px",
        c137: "137px",
        c136: "136px",
        c135: "135px",
        c134: "134px",
        c133: "133px",
        c132: "132px",
        c131: "131px",
        c130: "130px",
        c129: "129px",
        c128: "128px",
        c127: "127px",
        c126: "126px",
        c125: "125px",
        c124: "124px",
        c123: "123px",
        c122: "122px",
        c121: "121px",
        c120: "120px",
        c119: "119px",
        c118: "118px",
        c117: "117px",
        c116: "116px",
        c115: "115px",
        c114: "114px",
        c113: "113px",
        c112: "112px",
        c111: "111px",
        c110: "110px",
        c109: "109px",
        c108: "108px",
        c107: "107px",
        c106: "106px",
        c105: "105px",
        c104: "104px",
        c103: "103px",
        c102: "102px",
        c101: "101px",
        c100: "100px",
        c99: "99px",
        c98: "98px",
        c97: "97px",
        c96: "96px",
        c95: "95px",
        c94: "94px",
        c93: "93px",
        c92: "92px",
        c91: "91px",
        c90: "90px",
        c89: "89px",
        c88: "88px",
        c87: "87px",
        c86: "86px",
        c85: "85px",
        c84: "84px",
        c83: "83px",
        c82: "82px",
        c81: "81px",
        c80: "80px",
        c79: "79px",
        c78: "78px",
        c77: "77px",
        c76: "76px",
        c75: "75px",
        c74: "74px",
        c73: "73px",
        c72: "72px",
        c71: "71px",
        c70: "70px",
        c69: "69px",
        c68: "68px",
        c67: "67px",
        c66: "66px",
        c65: "65px",
        c64: "64px",
        c63: "63px",
        c62: "62px",
        c61: "61px",
        c60: "60px",
        c59: "59px",
        c58: "58px",
        c57: "57px",
        c56: "56px",
        c55: "55px",
        c54: "54px",
        c53: "53px",
        c52: "52px",
        c51: "51px",
        c50: "50px",
        c49: "49px",
        c48: "48px",
        c47: "47px",
        c46: "46px",
        c45: "45px",
        c44: "44px",
        c43: "43px",
        c42: "42px",
        c41: "41px",
        c40: "40px",
        c39: "39px",
        c38: "38px",
        c37: "37px",
        c36: "36px",
        c35: "35px",
        c34: "34px",
        c33: "33px",
        c32: "32px",
        c31: "31px",
        c30: "30px",
        c29: "29px",
        c28: "28px",
        c27: "27px",
        c26: "26px",
        c25: "25px",
        c24: "24px",
        c23: "23px",
        c22: "22px",
        c21: "21px",
        c20: "20px",
        c19: "19px",
        c18: "18px",
        c17: "17px",
        c16: "16px",
        c15: "15px",
        c14: "14px",
        c13: "13px",
        c12: "12px",
        c11: "11px",
        c10: "10px",
        c9: "9px",
        c8: "8px",
        c7: "7px",
        c6: "6px",
        c5: "5px",
        c4: "4px",
        c3: "3px",
        3: "3px",
        c2: "2px",
        c1: "1px",
        c0: "0px",
        c05: "05px",

        "c-300": "-300px",
        "c-80": "-80px",

        "c-50": "-50px",
        "c-49": "-49px",
        "c-48": "-48px",
        "c-47": "-47px",
        "c-46": "-46px",
        "c-45": "-45px",
        "c-44": "-44px",
        "c-43": "-43px",
        "c-42": "-42px",
        "c-41": "-41px",
        "c-40": "-40px",
        "c-39": "-39px",
        "c-38": "-38px",
        "c-37": "-37px",
        "c-36": "-36px",
        "c-35": "-35px",
        "c-34": "-34px",
        "c-33": "-33px",
        "c-32": "-32px",
        "c-31": "-31px",
        "c-30": "-30px",
        "c-29": "-29px",
        "c-28": "-28px",
        "c-27": "-27px",
        "c-26": "-26px",
        "c-25": "-25px",
        "c-24": "-24px",
        "c-23": "-23px",
        "c-22": "-22px",
        "c-21": "-21px",
        "c-20": "-20px",
        "c-19": "-19px",
        "c-18": "-18px",
        "c-17": "-17px",
        "c-16": "-16px",
        "c-15": "-15px",
        "c-14": "-14px",
        "c-13": "-13px",
        "c-12": "-12px",
        "c-11": "-11px",
        "c-10": "-10px",
        "c-9": "-9px",
        "c-8": "-8px",
        "c-7": "-7px",
        "c-6": "-6px",
        "c-5": "-5px",
        "c-4": "-4px",
        "c-3": "-3px",
        "c-2": "-2px",
        "c-1": "-1px",

      },
      maxWidth: {
        c1120: "1120px",
        c850: "850px",
        c780: "780px",
        c568: "568px",
        c560: "560px",
        c500: "500px",
        c388: "388px",
        c360: "360px",
        c330: "330px",
        c290: "280px",
        c200: "200px",
        c145: "145px",
        c130: "130px",

      },
      minWidth: {
        c700: "700px",
        c660: "660px",
        c330: "330px",
        c105: "105px",

      },
      screens: {
        5: "550px",
        7: "745px",
        9: "950px",
        11: "1130px",
        13: "1300px",
        16: "1640px",

        14: "1440px",
      },

      fontSize: {
        c100: "100px",
        c99: "99px",
        c98: "98px",
        c97: "97px",
        c96: "96px",
        c95: "95px",
        c94: "94px",
        c93: "93px",
        c92: "92px",
        c91: "91px",
        c90: "90px",
        c89: "89px",
        c88: "88px",
        c87: "87px",
        c86: "86px",
        c85: "85px",
        c84: "84px",
        c83: "83px",
        c82: "82px",
        c81: "81px",
        c80: "80px",
        c79: "79px",
        c78: "78px",
        c77: "77px",
        c76: "76px",
        c75: "75px",
        c74: "74px",
        c73: "73px",
        c72: "72px",
        c71: "71px",
        c70: "70px",
        c69: "69px",
        c68: "68px",
        c67: "67px",
        c66: "66px",
        c65: "65px",
        c64: "64px",
        c63: "63px",
        c62: "62px",
        c61: "61px",
        c60: "60px",
        c59: "59px",
        c58: "58px",
        c57: "57px",
        c56: "56px",
        c55: "55px",
        c54: "54px",
        c53: "53px",
        c52: "52px",
        c51: "51px",
        c50: "50px",
        c49: "49px",
        c48: "48px",
        c47: "47px",
        c46: "46px",
        c45: "45px",
        c44: "44px",
        c43: "43px",
        c42: "42px",
        c41: "41px",
        c40: "40px",
        c39: "39px",
        c38: "38px",
        c37: "37px",
        c36: "36px",
        c35: "35px",
        c34: "34px",
        c33: "33px",
        c32: "32px",
        c31: "31px",
        c30: "30px",
        c29: "29px",
        c28: "28px",
        c27: "27px",
        c26: "26px",
        c25: "25px",
        c24: "24px",
        c23: "23px",
        c22: "22px",
        c21: "21px",
        c20: "20px",
        c19: "19px",
        c18: "18px",
        c17: "17px",
        c16: "16px",
        c15: "15px",
        c14: "14px",
        c13: "13px",
        c12: "12px",
        c11: "11px",
        c10: "10px",
        c9: "9px",
        c8: "8px",
        c7: "7px",
        c6: "6px",
        c5: "5px",
        c4: "4px",
        c3: "3px",
        c2: "2px",
        c1: "1px",
      },
      borderWidth: {
        c10: "10px",
        c9: "9px",
        c8: "8px",
        c7: "7px",
        c6: "6px",
        c5: "5px",
        c4: "4px",
        c3: "3px",
        c2: "2px",
        c1: "1px",
      },

      lineHeight: {
        c100: "100px",
        c99: "99px",
        c98: "98px",
        c97: "97px",
        c96: "96px",
        c95: "95px",
        c94: "94px",
        c93: "93px",
        c92: "92px",
        c91: "91px",
        c90: "90px",
        c89: "89px",
        c88: "88px",
        c87: "87px",
        c86: "86px",
        c85: "85px",
        c84: "84px",
        c83: "83px",
        c82: "82px",
        c81: "81px",
        c80: "80px",
        c79: "79px",
        c78: "78px",
        c77: "77px",
        c76: "76px",
        c75: "75px",
        c74: "74px",
        c73: "73px",
        c72: "72px",
        c71: "71px",
        c70: "70px",
        c69: "69px",
        c68: "68px",
        c67: "67px",
        c66: "66px",
        c65: "65px",
        c64: "64px",
        c63: "63px",
        c62: "62px",
        c61: "61px",
        c60: "60px",
        c59: "59px",
        c58: "58px",
        c57: "57px",
        c56: "56px",
        c55: "55px",
        c54: "54px",
        c53: "53px",
        c52: "52px",
        c51: "51px",
        c50: "50px",
        c49: "49px",
        c48: "48px",
        c47: "47px",
        c46: "46px",
        c45: "45px",
        c44: "44px",
        c43: "43px",
        c42: "42px",
        c41: "41px",
        c40: "40px",
        c39: "39px",
        c38: "38px",
        c37: "37px",
        c36: "36px",
        c35: "35px",
        c34: "34px",
        c33: "33px",
        c32: "32px",
        c31: "31px",
        c30: "30px",
        c29: "29px",
        c28: "28px",
        c27: "27px",
        c26: "26px",
        c25: "25px",
        c24: "24px",
        c23: "23px",
        c22: "22px",
        c21: "21px",
        c20: "20px",
        c19: "19px",
        c18: "18px",
        c17: "17px",
        c16: "16px",
        c15: "15px",
        c14: "14px",
        c13: "13px",
        c12: "12px",
        c11: "11px",
        c10: "10px",
        c9: "9px",
        c8: "8px",
        c7: "7px",
        c6: "6px",
        c5: "5px",
        c4: "4px",
        c3: "3px",
        c2: "2px",
        c1: "1px",
      },
      borderRadius: {
        c077: "0.77rem",
        c073: "0.73rem",
        c070: "0.70rem",
      },
      colors: {
        mgray: "#B0B0B0",
        lgray: "rgb(235,235,235)",
        lgray2: "#f7f7f7",
        lgray3: "#EAEAEA",

        lgrayd: "#dddddd",
        "gray-unknown": "#BEB5AA",
        gray7: "#717171",
        correct: "#3FBF48",
        wrong: "#D92323",

        mdgray: "rgb(176,176,176)",
        black222: "#222222",
        gray162: "rgb(162,162,162)",
        main: "#ff385c",
        white1: "#f7f7f7",
        white2:'ffffffab',
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    // require("autoprefixer"),
    // require("@tailwindcss/typography"),
  ],
};
