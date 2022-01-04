function generateOll() {
    orientations = {
      zeroEdgeOriented:  [
        //   first
          "F R' F' R U2' F R' F' R2' U2' R'",
          "r U R' U R U2' r' U' r' U2' R U R' U r",
          "r U R' U R U2' r' U' r' U2' R U R' U r",
          "F R' F' R U2' F R' F' R2' U2' R'",
          
         // Second 
          "r U r' U2' R U2' R' U2' r U' r'",
          "f U R U' R' f' F U R U' R' F'",
          "R' U2' r U' r' U2' r U r' U2' R",
          "f U R U' R' S' U R U' R' F'",
          
          //Third
          "R r' U' r U2' r' U' R U' R2' r",
          "r' U2' R U R' U r U' r U R' U R U2' r'",
          
          // Fourth
          "r' R2' U R' U r U2' r' U R' r",
          "F U R U' R' F' U F R U R' U' F",
          
          //fifth
          "F R' F' R U2' F R' F' R U' R U' R'",
          "x U R' U' R x' U2' x U R' U' R x' U' R U' R'",
          
          //sixth
          "r' U2' R U R' U r2' U2' R' U' R U' r'",
          
          //seventh
          "r U R' U R U2' r2' U' R U' R' U2' r",
          
          //Eighth
          "R r' U R U R' U' R2' r2' U R U' r'",
          "M' U2' M U2' M' U' M U2' M' U2' M"
        ]
        ,
        twoEdgeOriented : [
          // first 
          "r' U' R U' R' U2' r",
          "l' U' L U' L' U2' l",
          "R' F' r U' r' F2' R",
          "F U R U' R' F' U F U R U' R' F'",
          
          //Second
          "r U R' U R U2' r'",
          "x' D R U' R U R2' D' x y",
          "l U L' U L U2' l' y2'",
          "F' U' F2' R' F' R2' U' R' y2'",
          
          //Third
          "r U2' R' U' R U' r'",
          "F' L F L' U2' L' U2' L",
          "R U2' R' U2' R' F R F'",
          "l U2' L' U' L U' l'",
          
          //Fourth
          "r' U2' R U R' U r y2",
          "l' U2' L U L' U l ",
          "F R' F' R U2' R U2' R'",
          "R' F2 r U r' F R ",
          
          //Fifth
          "F U R U' R2' F' R U R U' R'",
          "M U R U R' U R U2' R2' r",
          "L' U2' L F' L F L' U L' U L",
          "R' U' F R' F' R U' R U R' U R",
          
          //Sixth
          "R U2' R' F R' F' R U' R U' R'",
          "F' U' L' U L2' F L' U' L' U L",
          "R' F R U R' F' R y' R U' R'",
          "r' U r U r' U' r y R U' R'",
          
          //Seventh
          "M U' R U2' R' U' R U' R2' r",
          "M U' R U2' R' U' R U' R' M'",
          "r U2' R' F R' F' R U' R U' r'",
          "F U R U' R' F' U' F' U' L' U L F",
          
          //Eighth
          "F U R U' R' F' U' F U R U' R' F'",
          "M' U R' U2' R U R' U R M",
          "r R' U R' U2' R U R' U R2' r'",
          "M U L' U2' L U L' U L2' l'",
          
          //Ninth 
          "F' U' F r U' r' U r U r'",
          "F R U' R' U R U2' R' U' F'",
          "R U R' U' R' F R2' U R' U' F'",
          "R' U' R y r U' r' U r U r'",
          
          //Tenth
          "F U F' R' F R U' R' F' R",
          "R U R' y R' F R U' R' F' R",
          "F U F' l' U l U' l' U' l",
          "R U R' y' r' U r U' r' U' r",
          
          // 11th
          "r' U' r U' R' U R r' U r",
          "l' U' l U' L' U L l' U l",
          "r' U' r U' R' U M U r",
          "R' F' R U' L' U L R' F R ",
          
          // 12th
          "r U r' U R U' R' r U' r'",
          "r U r' U R U' M' U' r'",
          "l U l' U L U' L' l U' l'",
          "R' U2' R U R' F U R U' R' F' R",
          
          // 13th
          "R U R' U' M' U R U' r'",
          "M' U' M U2' M' U' M ",
          "M' U M U2' M' U M",
          "M U' M' U2' M U' M'",
          
          // 14th
          "M F R' F' R U R U' R' U' M'",
          "R U' R' F' U F R U R' U R U' R'",
          "r' U r U r2' D' r U' r' D r2'",
          "F' U F U R U2' R' F R' F' R",
          
          // 15th
          "F U R U2' R' U R U2' R' U' F' y2",
          "r U' r' U' r U r2' D' r U r' D r",
          "F2' R U' R' U R U R2' F' R F'",
          "M F' L F L' U' L' U L U M'",
          
          // 16th
          "R' F R U R' U' F' U R",
          "R U R' U R U' R' U' R' F R F'",
          
          // 17th
          "R B' R' U' R U B U' R'",
          "L F' L' U' L U F U' L'",
          "r U R U' r' F U R' U' F'",
          
          // 18th
          "F R' F' R U R U' R'",
          "F R U' R' U' R U R' F'",
          "F' L F L' U' L' U L", 
          "r2' D' r U' r' D r U r",
          
          // 19th
          "F U R' U' R' F' R U R2' U' R'", 
          "B' F R' F' R B U R U' R'", 
          "r U R' U' r' F R U R U' R' F'", 
          "x D' U R' U' R D x' U R U' R'",
          
          // 20th
          "R U2' R' F R' F' R2' U2' R'", 
          "R U2' R' U' R U' R' f U R U' R' f'", 
          "R' U2' l U' R U l' R' U2' R", 
          "F U R U' R' F' U2' R U R' U R U2' R'",
          
          // 21st
          "F' L F L' U' L' U' L U L' U L", 
          "x' U' R U l' U' R' U' R U R' U R", 
          "F R' F' R U R' F' R U R U' R' F R U' R'", 
          "R' F R y' R' U' R' U' R U R' U R",
          
          // 22nd 
          "F R U' R' U R U R' F'", 
          "R U R' U' R' F R F'", 
          "F' U' F U F R' F' R",
          
          // 23rd
          "F R' F' R U R U R' U' R U' R'",
          "r' R' D' r U2' r' D r U2' R",
          "F' L F L' U' L F L' U' L' U L F' L' U L",
          "F R' F' r U R U R' U' R U' r'",
          
          // 24th
          "L U F' U' L' U L F L'",
          "R U2' R' U' F' U F R U' R'",
          "R U B' U' R' U R B R'",
          "R' U2' R U R' U R F U R U' R' F'",
          
          // 25th
          "R' U' F U R U' R' F' R",
          "R U2' R' U' R U' R' F U R U' R' F'",
          
          // 26th
          "F U R U' R' F' R U2' R' U' R U' R'",
          "R U2' R' U' R U' R' U f U R U' R' f'",
          "F U R U R' y' U' R' U2' R U R'",
          "L' U L U' L' U L F' L F L' F' L F L' y",
          
          // 27th
          "F U R U' R' F' R' U2' R U R' U R",
          "R U' R' U R U' R' F R' F' R F R' F' R",
          
          // 28th
          "f' U' L' U L f ", 
          "F' L' U' L U F",
          "R' F' U' F U R",
          "B' R' U' R U B",
          
          // 29th
          "f U R U' R' f'",
          "F R U R' U' F'",
          "L' U' L F R U R' F'",
          
          // 30th
          "F U R U' R' F'",
          "f R U R' U' f'",
          "F' U' L' U L F", 
          "R' U' F' U F R",
          
          // 31st
          "R' U' F R' F' R U R",
          "R U2' R' U' R y R U' R' F'",
          "r' F' U L' U' L F r",
          
          // 32nd
          "F' U' L' U L U' L' U L F",
          "R' U' F R' F' R F R' F' R U R",
          "R U2' R' U' R U R' U2' R' F R F'",
          
          // 33rd
          "F U R U' R' U R U' R' F'",
          "f R U R' U' R U R' U' f'",
          "F R' F' R U2' R U' R' U R U2' R'",
          
          // 34th
          "R' F R2' B' R2' F' R2' B R'",
          "R B' R' B U2' R2' F R F' R",
          
          // 35th
          "r U' r2' U r2' U r2' U' r",
          "R B' R2' F R2' B R2' F' R",
          "F U R U' R' F' R U R' U R U2' R'",
          
          // 36th
          "f U R U' R' U R U' R' f'",
          "F R U R' U' R U R' U' F'",
          "R' U2' R U R' F R' F' R U R",
          
          // 37th
          "F R U R' d R' U' R U' R'",
          "R' F' U' F U' R U R' U R",
          "F R U R' y' U R' U' R U' R'",
          "R' U' R U' R' U F' U F R",
          
          // 38th
          "r' U2' R U R' U' R U R' U r", 
          "r' U' R U' R' U R U' R' U2' r", 
          "l' U' L U' L' U L U' L' U2' l",
          
          // 39th
          "r U2' R' U' R U R' U' R U' r'",
          "r U R' U R U' R' U R U2' r'",
          "r U r' U R U' R' U R U' R' r U' r'",
          "F' L' U L U L' U' L U' L' U L F",
          
          // 40th
          "F R' F' U2' R U R' U R2' U2' R'",
          "R U' R' U' R U R2' F R2' U R' U' R' F' R",
          "F R' F' r U2' F R' F' R2' U2' r'",
          
          // 41st
          "r U r' R U R' U' R U R' U' r U' r'",
          "r U R U' r' F R' U R U' R' F'",
          "r' U' r R' U' R U R' U' R U r' U r",
          "F U R U' R' U R U' R' F' f U R U' R' f'",
          
          // 42nd
          "r U R' U' M U R U' R'", 
          "M' U' M' U' M' U2' M U' M U' M", 
          "r U R' U' R r' U R U' R'"
        ]
        ,

      fourEdgeOriented: [
        // first
        "R U R' U R U' R' U R U2' R'",
        "F U R U' R' U R U' R' U R U' R' F'",
        "R' U2' R U R' U' R U R' U R y'",
        "F U R U' R' U R U2' R' U' R U R' F' y'",
        
        //second
        "R' U2' R2' U R2' U R2' U2' R'",
        "U R2' U2' R' U2' R' U2' R2' U z' y2'",
        
        //third
        "R U' R' U2' R U R' U2' R U R' U R U' R'",
        "R U2' R D R' U2' R D' R2' y",
        "R' U2' R U R' U R2' U2' R' U' R U' R'",
        "R U2' z' U R z R' U2' z' U R' z R2' y",
        
        //fourth
        "L' R U R' z R' U z' U R U' R'",
        "F R' F' r U R U' r'",
        "L' U' L U' L U2' L2' U' L2' U' L2' U L",
        
        //fifth
        "R U R' U R U' R' U R U' R' U R U2' R' y2'",
        "R U R' z R' U' z' U R U' R' L",
        
        //sixth
        "R U R' U R U2' R'",
        "R' U2' R U R' U R",
        "U R' z' R' U L' U' R",
        "U' R2' U R U' R U z'",
        
        //seventh
        "R U2' R' U' R U' R'",
        "R' U' R U' R' U2' R",
        "L U2' L' U' L U' L'",
        "L' U R z R' U z' U R'"
        
      ]
    }
    
    var numOrientedEdge;
    var algNum;
    var orientation;
    var alg;
    
    // numOrientedEdge = Math.floor(Math.random() * 3) + 1;
    
   algNum = Math.floor(Math.random() * 3) + 1;
    
    // switch(algNum){
    //       case 1:
    //           alg = 0
    //           break;
  
    //       case 2:
    //           alg = 1
    //           break;
  
    //       case 3:
    //           alg = 2
    //           break;
    //   }
    var len = orientations[`${dig}EdgeOriented`].length - 1;
    alg = Math.floor(Math.random() * len) + 1;
    //console.log(`${dig}EdgeOriented`, len);

    

    
     orientation = `${dig}EdgeOriented`;
     var final = orientations[orientation][alg];


     
    // //console.log(orientation, final);
     scramDisplay.innerHTML = final;
    
    
    
    
  //   switch(numOrientedEdge){
  //         case 1:
  //             orientation = `${dig}EdgeOriented`
  //             break;
  
  //         case 2:
  //             orientation = `${dig}EdgeOriented`
  //             break;
  
  //         case 3:
  //             orientation = `${dig}EdgeOriented`
  //             break;
  //         }
    // console.log(dig);
    // var final = orientations[orientation][alg];
    // scr.innerHTML = final;
    //console.log(orientation, alg, dig);
    
  }
  