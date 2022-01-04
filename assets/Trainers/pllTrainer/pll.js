function pll(){
    permutations = {
      Aa: [
        " x L2 D2 L' U' L D2 L' U L' ", 
        " z B2 D2 B' U' B D2 B' U B' ", 
        " x' R2 D2 R' U' R D2 R' U R' ", 
        " z' F2 D2 F' U' F D2 F' U F' ",
        ['<img src="./imgs/aaperm.png" alt="Aa Perm">']
        ],
      
      Ab: [
        " x' L2 D2 L U L' D2 L U' L ", 
        " z' B2 D2 B U B' D2 B U' B ", 
        " x R2 D2 R U R' D2 R U' R ", 
        " z F2 D2 F U F' D2 F U' F ",
        ['<img src="./imgs/abperm.png" alt="Ab Perm">']
        ],
      
      E: [
        " B L F L' B' L R B R' F' R B' L' R' ", 
        " R U' L D2 L' U R' L U' R D2 R' U L' ", 
        " L R B R' F R B' L' R' B L F' L' B' ", 
        " x R' U R D' R' U' R D R' U' R D' R' U R D ",
        ['<img src="./imgs/eperm.png" alt="E Perm">']
        ],
      
      F: [
        " R B' D F' D2 R' D' R D' F D' B' L' B2 R' ", 
        " L' B L B2 U B' U' R' U R B2 U B' U' B ", 
        " L2 F U F' L2 B D' R2 B F' U2 F D B2 ", 
        " R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R ",
        ['<img src="./imgs/fperm.png" alt="F Perm">']
        ],
      
      Ga: [
        " B' U' B L2 D F' U F U' F D' L2 ", 
        " R2 B2 F2 L' D' B R D R' B2 L B' F2 R2 ", 
        " B2 R B L' D B' D' R2 U R U' L U B ", 
        " R' L' D2 R' L2 D L' B2 L D R2 L2 U2 L ",
        ['<img src="./imgs/gaperm.png" alt="Ga Perm">']
        ],
      
      Gb: [
        " L2 F2 R2 F' R2 U F2 L2 B L2 F U L2 B' ", 
        " L2 U2 B2 U F2 D' R2 D' B2 D2 F2 L2 U' L2 ", 
        " R2 F2 U R2 F U F' R2 F U' F' U' F2 R2 ", 
        " L2 F2 U' F2 U L2 D' F2 R2 U' L2 B2 L2 R2 ",
        ['<img src="./imgs/gbperm.png" alt="Gb Perm">']
        ],
      
      Gc: [
        " B' U2 R2 B F' U' F U2 B' U' R2 F' U2 B F ", 
        " F2 U B2 U' L2 F2 U' R2 F2 D' B2 F2 R2 B2 ", 
        " F2 U2 F2 D R2 U F2 D' L2 U' F2 D2 R2 B2 D2 ", 
        " B' R2 U B U2 F' U' F B' U2 B' R2 B2 ",
        ['<img src="./imgs/gcperm.png" alt="Gc Perm">']
        ],
      
      Gd: [
        " D2 F2 L2 D2 B2 U R2 D B2 U' L2 D' B2 U2 B2 ", 
        " L' U2 L' U' F' R2 B L2 B' R2 F U' L U2 L ", 
        " R2 D B2 U R2 D2 F2 L2 D F2 U' F2 U2 F2 ", 
        " F U2 F B' R2 D' B L2 B' D F2 B' R2 B2 ",
        ['<img src="./imgs/gdperm.png" alt="Gd Perm">']
        ],
      
      H: [
        " F2 R2 U2 F2 L F2 L R' D2 R B2 D2 L2 ", 
        " F' U2 F B' R2 B R U2 R2 U2 R2 U2 R", 
        " F2 D2 B2 U2 B2 U F2 U2 F2 U2 F2 U D2 ", 
        " L' U2 L' R' F2 L2 F2 R B' F U2 B F' ",
        ['<img src="./imgs/hperm.png" alt="H Perm">']
        ],
      
      Ja: [
        " F' L2 F L' U2 B U L U' B' U L2 U L ", 
        " F' L F L2 U R U B U' L' B' R' L2 ", 
        " B2 U2 D2 L2 D' B2 D L2 U D2 B2 D L2 D' ", 
        " L B2 R B2 R' L U' R' U2 L U' R U L ",
        ['<img src="./imgs/japerm.png" alt="Ja Perm">']
        ],
      
      Jb: [
        " L2 U D' L2 U2 D' B2 U' B2 D B2 U' B2 D ", 
        " R2 U B2 D' B' D B' L2 F U' F' L2 U' R2 ", 
        " L2 U2 L D' R D L2 B2 L' D' R2 U R D ", 
        " F U' L' B' U' B U L F' L' B L' B' L2 ",
        ['<img src="./imgs/jbperm.png" alt="Jb Perm">']
        ],
      
      Na: [
        " L U2 D2 B2 U2 R' U' R U' B2 D L' U2 D L' ", 
        " F' U2 F L F2 L' F R' F L' R U2 L2 F L' ", 
        " B2 L2 U2 F' U2 F2 U2 L2 F L2 B2 R2 D2 F' R2 ", 
        " B2 L2 U2 F' U2 F2 U2 L2 F L2 B2 R2 D2 F' R2 ",
        ['<img src="./imgs/naperm.png" alt="Na Perm">']
        ],
      
      Nb: [
        " F' R L2 B' R D2 L' F L' F' L2 D2 R2 L2 F", 
        " B' L R2 F' L D2 R' B R' B' R2 D2 L2 R2 B ", 
        " R D2 F L' B' L F' D2 R2 F' R U2 R' F R ", 
        " R' F2 L' F2 D' R' D R D R B2 D R' D' B2 ",
        ['<img src="./imgs/nbperm.png" alt="Nb Perm">']
        ],
      
      Ra: [
        " R2 L2 D R F2 R' L D L B2 R' U R B2 R2 ", 
        "  L2 B2 R' D' R F2 L' U L' U' L2 B2 F2 L2 ", 
        " L2 B2 R' D' R F2 L' U L' U' L2 B2 F2 L2 ", 
        " D B2 R2 U L2 D' F2 L2 F2 R2 U' R2 F2 D' R2 ",
        ['<img src="./imgs/raperm.png" alt="Ra Perm">']
        ],
      
      Rb: [
        " R B2 U B D' F D2 B D F D F2 R2 D R' ", 
        " F' U F L F2 L2 U' L2 F' L2 U L F' U' F' ", 
        " B' R' B U B' R2 U' R2 U F R' B R' F' R ", 
        " D F2 U' L2 B2 U F2 D2 R' D R' B2 L U' L' ",
        ['<img src="./imgs/rbperm.png" alt="Rb Perm">']
        ],
      
        T: [
        " R U R' U' R' F R2 U' R' U' R U R' F' ", 
        " B U B' U' B' R B2 U' B' U' B U B' R' ", 
        " L U L' U' L' B L2 U' L' U' L U L' B' ", 
        " F U F' U' F' L F2 U' F' U' F U F' L' ",
        ['<img src="./imgs/tperm.png" alt="T Perm">']
        ],
      
      Ua: [
        " R2 B D' F' U D' L2 U' D F' D B' R2 ",
        " L' U F2 D2 B2 L' D2 F2 U2 R' U' L ",
        " F B' U2 F R2 B2 D' B2 R2 F2 U' B L2 ",
        " L R' U L' B2 D2 F2 R' D2 B2 U L' R ",
        ['<img src="./imgs/uaperm.png" alt="Ua Perm">']
        ],
      
      Ub: [
        " B U' L B F' D' L D B' F L' B' ",
        " F U F2 L F L B L B2 U B L ",
        " L U' F2 L D2 B2 U2 R B2 U D2 L' ",
        " F2 L2 D' B2 U B2 L2 F2 D R2 U' R2 ",
        ['<img src="./imgs/ubperm.png" alt="Ub Perm">']
        ],
      
      V: [
        " B U L2 R' F' L2 F R U2 F U B' U F' ",
        " F' U2 F U2 L U' R U R' L' F' L' U L F ",
        " L' F' R2 F U' L' U L' U' L' U L' F' R2 F ",
        " B D2 R2 D B' D' R2 U2 F' U' F U' D2 B' ",
        ['<img src="./imgs/vperm.png" alt="V Perm">']
        ],

        Y: [
        " D L2 U' F U L F' L2 B' U B L2 D' L ",
        " R' F' U F U F' U' R' U' R F R' U R2 ",
        " F' U' R' F D R' D L' B' L2 B L' D2 R2 ",
        " D' B' D B2 R' U' R B2 L B' U' L' U B2 ",
        ['<img src="./imgs/yperm.png" alt="Y Perm">']
        ],

        Z: [
        " F2 U F' U' F' L2 F D F' D' L2 U F' ",
        " L2 R2 D L2 R2 U L2 R2 D2 F2 L2 R2 B2 ",
        " L U L' B2 U' R' U R B2 U L U2 L' ",
        " F B' U2 D2 F B' D F2 B2 U' L2 R2 ",
        ['<img src="./imgs/zperm.png" alt="Z Perm">']
        ]
    }

    var permNum;
    var algNum;
    var perm
    var alg;

    permNum = Math.floor(Math.random() * 21) + 1;
    algNum = Math.floor(Math.random() * 4) + 1;

    switch(algNum){
        case 1:
            alg = 0
            break;

        case 2:
            alg = 1
            break;

        case 3:
            alg = 2
            break;
        case 4:
            alg = 3
            break;
    }

    switch(permNum){
        case 1:
            perm = 'Aa'
            break;

        case 2:
            perm = 'Ab'
            break;

        case 3:
            perm = 'E'
            break;
        case 4:
            perm = 'F'
            break;
        case 5:
            perm = 'Ga'
            break;
        case 6:
            perm = 'Gb'
            break;
        case 7:
            perm = 'Gc'
            break;
        case 8:
            perm = 'Gd'
            break;
        case 9:
            perm = 'H'
            break;
        case 10:
            perm = 'Ja'
            break;
        case 11:
            perm = 'Jb'
            break;
        case 12:
            perm = 'Na'
            break;
        case 13:
            perm = 'Nb'
            break;
        case 14:
            perm = 'Ra'
            break;
        case 15:
            perm = 'Rb'
            break;
        case 16:
            perm = 'T'
            break;
        case 17:
            perm = 'Ua'
            break;
        case 18:
            perm = 'Ub'
            break;
        case 19:
            perm = 'V'
            break;
        case 20:
            perm = 'Y'
            break;
        case 21:
            perm = 'Z'
            break;
        
    }

    var final = permutations[perm][alg]
    algName.innerHTML = `${perm} Perm`;
    scramDisplay.innerHTML = final;
    var permImage = permutations[perm][4];
    document.querySelector('.image-container').innerHTML = permImage;
}