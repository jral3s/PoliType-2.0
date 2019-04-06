//finds typology given political beliefs
function findTypology(polArr,party){
  //democrat typologies
  var solidLiberal = 0.01;
  var opportunityDemocrat = 0.01;
  var disaffectedDemocrat = 0.01;
  var devoutAndDiverse = 0.01;
  //republican typologies
  var newEraEnterpriser = 0.01;
  var marketSkepticRepublican = 0.01;
  var countryFirstConservative = 0.01;
  var coreConservative = 0.01;
  //bystander typologies
  var bystander = 0.01;

  for (i=0;i<polArr.length;i++){
    switch(i) {
      case 0: //more to help needy vs. can't afford to help needy
        if (polArr[i]<0){
          solidLiberal *= 85;
          opportunityDemocrat *= 62;
          disaffectedDemocrat *= 72;
          devoutAndDiverse *= 62;
          newEraEnterpriser *= 31;
          marketSkepticRepublican *= 32;
          countryFirstConservative *= 19;
          coreConservative *= 10;
        }
        else if (polArr[i]>0){
          solidLiberal *= 12;
          opportunityDemocrat *= 33;
          disaffectedDemocrat *= 22;
          devoutAndDiverse *= 34;
          newEraEnterpriser *= 59;
          marketSkepticRepublican *= 58;
          countryFirstConservative *= 70;
          coreConservative *= 83;
        }
        break;
      case 1: //government wasteful vs. government good
        if (polArr[i]<0) {
            solidLiberal *= 30;
            opportunityDemocrat *= 41;
            disaffectedDemocrat *= 63;
            devoutAndDiverse *= 49;
            newEraEnterpriser *= 49;
            marketSkepticRepublican *= 69;
            countryFirstConservative *= 71;
            coreConservative *= 89;
        }
        if (polArr[i]>0) {
            solidLiberal *= 66;
            opportunityDemocrat *= 57;
            disaffectedDemocrat *= 32;
            devoutAndDiverse *= 47;
            newEraEnterpriser *= 47;
            marketSkepticRepublican *= 29;
            countryFirstConservative *= 21;
            coreConservative *= 8;
        }
        break;
      case 2: //military vs. diplomacy
        if (polArr[i]<0) {
            solidLiberal *= 4;
            opportunityDemocrat *= 15;
            disaffectedDemocrat *= 14;
            devoutAndDiverse *= 32;
            newEraEnterpriser *= 41;
            marketSkepticRepublican *= 42;
            countryFirstConservative *= 54;
            coreConservative *= 71;
        }
        if (polArr[i]>0) {
            solidLiberal *= 95;
            opportunityDemocrat *= 80;
            disaffectedDemocrat *= 82;
            devoutAndDiverse *= 66;
            newEraEnterpriser *= 49;
            marketSkepticRepublican *= 42;
            countryFirstConservative *= 25;
            coreConservative *= 13;
        }
        break;
      case 3: //discrimination strong vs. discrimination weak
        if (polArr[i]<0) {
          solidLiberal *= 91;
          opportunityDemocrat *= 54;
          disaffectedDemocrat *= 63;
          devoutAndDiverse *= 41;
          newEraEnterpriser *= 17;
          marketSkepticRepublican *= 12;
          countryFirstConservative *= 9;
          coreConservative *= 5;
        }
        if (polArr[i]>0) {
          solidLiberal *= 7;
          opportunityDemocrat *= 37;
          disaffectedDemocrat *= 28;
          devoutAndDiverse *= 47;
          newEraEnterpriser *= 73;
          marketSkepticRepublican *= 75;
          countryFirstConservative *= 76;
          coreConservative *= 80;
        }
        break;
        case 4: //business regulation good vs. regulation bad
          if (polArr[i]<0) {
              solidLiberal *= 96;
              opportunityDemocrat *= 76;
              disaffectedDemocrat *= 39;
              devoutAndDiverse *= 38;
              newEraEnterpriser *= 57;
              marketSkepticRepublican *= 41;
              countryFirstConservative *= 15;
              coreConservative *= 4;
          }
          if (polArr[i]>0) {
              solidLiberal *= 4;
              opportunityDemocrat *= 21;
              disaffectedDemocrat *= 54;
              devoutAndDiverse *= 55;
              newEraEnterpriser *= 37;
              marketSkepticRepublican *= 53;
              countryFirstConservative *= 73;
              coreConservative *= 89;
          }
          break;
      case 5: //homosexuality ok vs. homosexuality bad
        if (polArr[i]<0) {
            solidLiberal *= 99;
            opportunityDemocrat *= 92;
            disaffectedDemocrat *= 79;
            devoutAndDiverse *= 53;
            newEraEnterpriser *= 64;
            marketSkepticRepublican *= 62;
            countryFirstConservative *= 13;
            coreConservative *= 50;
        }
        if (polArr[i]>0) {
            opportunityDemocrat *= 7;
            disaffectedDemocrat *= 15;
            devoutAndDiverse *= 37;
            newEraEnterpriser *= 28;
            marketSkepticRepublican *= 31;
            countryFirstConservative *= 70;
            coreConservative *= 37;
        }
        break;
      case 6: //too much profit vs. ok profit
        if (polArr[i]<0) {
            solidLiberal *= 82;
            opportunityDemocrat *= 55;
            disaffectedDemocrat *= 95;
            devoutAndDiverse *= 50;
            newEraEnterpriser *= 24;
            marketSkepticRepublican *= 89;
            countryFirstConservative *= 47;
            coreConservative *= 10;
        }
        if (polArr[i]>0) {
            solidLiberal *= 16;
            opportunityDemocrat *= 40;
            disaffectedDemocrat *= 4;
            devoutAndDiverse *= 43;
            newEraEnterpriser *= 68;
            marketSkepticRepublican *= 10;
            countryFirstConservative *= 42;
            coreConservative *= 82;
        }
        break;
      case 7: //environmental regulations good vs. regulation bad
        if (polArr[i]<0) {
            solidLiberal *= 0;
            opportunityDemocrat *= 20;
            disaffectedDemocrat *= 28;
            devoutAndDiverse *= 45;
            newEraEnterpriser *= 34;
            marketSkepticRepublican *= 39;
            countryFirstConservative *= 70;
            coreConservative *= 92;
        }
        if (polArr[i]>0) {
            solidLiberal *= 100;
            opportunityDemocrat *= 79;
            disaffectedDemocrat *= 69;
            devoutAndDiverse *= 48;
            newEraEnterpriser *= 60;
            marketSkepticRepublican *= 57;
            countryFirstConservative *= 17;
            coreConservative *= 1;
        }
        break;
      case 8: //immigrants good vs. immigrants bad
        if (polArr[i]<0) {
            solidLiberal *= 99;
            opportunityDemocrat *= 99;
            disaffectedDemocrat *= 83;
            devoutAndDiverse *= 47;
            newEraEnterpriser *= 70;
            marketSkepticRepublican *= 29;
            coreConservative *= 39;
        }
        if (polArr[i]>0) {
            disaffectedDemocrat *= 11;
            devoutAndDiverse *= 44;
            newEraEnterpriser *= 23;
            marketSkepticRepublican *= 55;
            countryFirstConservative *= 76;
            coreConservative *= 43;
        }
        break;
      case 9: //poor easy vs. poor hard
        if (polArr[i]<0) {
          opportunityDemocrat *= 28;
          disaffectedDemocrat *= 16;
          devoutAndDiverse *= 10;
          newEraEnterpriser *= 61;
          marketSkepticRepublican *= 75;
          countryFirstConservative *= 58;
          coreConservative *= 83;
        }
        if (polArr[i]>0) {
          solidLiberal *= 98;
          opportunityDemocrat *= 61;
          disaffectedDemocrat *= 79;
          devoutAndDiverse *= 86;
          newEraEnterpriser *= 23;
          marketSkepticRepublican *= 14;
          countryFirstConservative *= 23;
          coreConservative *= 3;
        }
        break;
      case 10: //economy unfair vs. economy fair
        if (polArr[i]<0) {
            solidLiberal *= 99;
            opportunityDemocrat *= 67;
            disaffectedDemocrat *= 99;
            devoutAndDiverse *= 55;
            newEraEnterpriser *= 18;
            marketSkepticRepublican *= 94;
            countryFirstConservative *= 41;
            coreConservative *= 21;
        }
        if (polArr[i]>0) {
            opportunityDemocrat *= 32;
            devoutAndDiverse *= 43;
            newEraEnterpriser *= 75;
            marketSkepticRepublican *= 5;
            countryFirstConservative *= 48;
            coreConservative *= 75;
        }
        break;
      case 11: //equals rights alredy vs. not yet
        if (polArr[i]<0) {
          solidLiberal *= 2;
          opportunityDemocrat *= 31;
          disaffectedDemocrat *= 7;
          devoutAndDiverse *= 8;
          newEraEnterpriser *= 48;
          marketSkepticRepublican *= 61;
          countryFirstConservative *= 66;
          coreConservative *= 81;
        }
        if (polArr[i]>0) {
          solidLiberal *= 98;
          opportunityDemocrat *= 67;
          disaffectedDemocrat *= 92;
          devoutAndDiverse *= 89;
          newEraEnterpriser *= 43;
          marketSkepticRepublican *= 32;
          countryFirstConservative *= 25;
          coreConservative *= 12;
        }
        break;
      case 12: //foreign vs. domestic
        if (polArr[i]<0) {
          solidLiberal *= 87;
          opportunityDemocrat *= 76;
          disaffectedDemocrat *= 30;
          devoutAndDiverse *= 22;
          newEraEnterpriser *= 45;
          marketSkepticRepublican *= 22;
          countryFirstConservative *= 19;
          coreConservative *= 50;
        }
        if (polArr[i]>0) {
          solidLiberal *= 10;
          opportunityDemocrat *= 20;
          disaffectedDemocrat *= 63;
          devoutAndDiverse *= 69;
          newEraEnterpriser *= 48;
          marketSkepticRepublican *= 72;
          countryFirstConservative *= 66;
          coreConservative *= 44;
        }
        break;
      case 13: //hard work is enough vs. not enough
        if (polArr[i]<0) {
          solidLiberal *= 25;
          opportunityDemocrat *= 76;
          disaffectedDemocrat *= 43;
          devoutAndDiverse *= 47;
          newEraEnterpriser *= 90;
          marketSkepticRepublican *= 65;
          countryFirstConservative *= 57;
          coreConservative *= 94;
        }
        if (polArr[i]>0) {
          solidLiberal *= 73;
          opportunityDemocrat *= 22;
          disaffectedDemocrat *= 54;
          devoutAndDiverse *= 48;
          newEraEnterpriser *= 8;
          marketSkepticRepublican *= 34;
          countryFirstConservative *= 36;
          coreConservative *= 4;
        }
        break;
      case 14: //us compromise good vs. compromise bad
        if (polArr[i]<0) {
          solidLiberal *= 97;
          opportunityDemocrat *= 94;
          disaffectedDemocrat *= 61;
          devoutAndDiverse *= 26;
          newEraEnterpriser *= 56;
          marketSkepticRepublican *= 49;
          countryFirstConservative *= 9;
          coreConservative *= 30;
        }
        if (polArr[i]>0) {
          solidLiberal *= 2;
          opportunityDemocrat *= 5;
          disaffectedDemocrat *= 35;
          devoutAndDiverse *= 64;
          newEraEnterpriser *= 37;
          marketSkepticRepublican *= 47;
          countryFirstConservative *= 76;
          coreConservative *= 64;
        }
        break;
      default:
        console.log("iteration through polArr broke with i="+i);
    }
  }

  if (party.indexOf("Dem")>=0) {
      solidLiberal *= 99;
      opportunityDemocrat *= 79;
      disaffectedDemocrat *= 85;
      devoutAndDiverse *= 59;
      newEraEnterpriser *= 22;
      marketSkepticRepublican *= 12;
      countryFirstConservative *= 0;
      coreConservative *= 0;
  }
  if (party.indexOf("Rep")>=0) {
      solidLiberal *= 0;
      opportunityDemocrat *= 15;
      disaffectedDemocrat *= 2;
      devoutAndDiverse *= 27;
      newEraEnterpriser *= 66;
      marketSkepticRepublican *= 75;
      countryFirstConservative *= 95;
      coreConservative *= 97;
  }

  if (newEraEnterpriser>=marketSkepticRepublican&&newEraEnterpriser>=countryFirstConservative&&newEraEnterpriser>=coreConservative&&newEraEnterpriser>=solidLiberal&&newEraEnterpriser>=opportunityDemocrat&&newEraEnterpriser>=disaffectedDemocrat&&newEraEnterpriser>=devoutAndDiverse)
      return "New Era Enterpriser";
  if (marketSkepticRepublican>=newEraEnterpriser&&marketSkepticRepublican>=countryFirstConservative&&marketSkepticRepublican>=coreConservative&&marketSkepticRepublican>=solidLiberal&&marketSkepticRepublican>=opportunityDemocrat&&marketSkepticRepublican>=disaffectedDemocrat&&marketSkepticRepublican>=devoutAndDiverse)
      return "Market Skeptic Republican";
  if (countryFirstConservative>=newEraEnterpriser&&countryFirstConservative>=marketSkepticRepublican&&countryFirstConservative>=coreConservative&&countryFirstConservative>=solidLiberal&&countryFirstConservative>=opportunityDemocrat&&countryFirstConservative>=disaffectedDemocrat&&countryFirstConservative>=devoutAndDiverse) {
      return "Country First Conservative";
  }
  if (coreConservative>=newEraEnterpriser&&coreConservative>=marketSkepticRepublican&&coreConservative>=countryFirstConservative&&coreConservative>=solidLiberal&&coreConservative>=opportunityDemocrat&&coreConservative>=disaffectedDemocrat&&coreConservative>=devoutAndDiverse)
      return "Core Conservative";
  if (solidLiberal>=opportunityDemocrat&&solidLiberal>=disaffectedDemocrat&&solidLiberal>=devoutAndDiverse&&solidLiberal>=newEraEnterpriser&&solidLiberal>=marketSkepticRepublican&&solidLiberal>=countryFirstConservative&&solidLiberal>=coreConservative)
      return "Solid Liberal";
  if (opportunityDemocrat>=solidLiberal&&opportunityDemocrat>=disaffectedDemocrat&&opportunityDemocrat>=devoutAndDiverse&&opportunityDemocrat>=newEraEnterpriser&&opportunityDemocrat>=marketSkepticRepublican&&opportunityDemocrat>=countryFirstConservative&&opportunityDemocrat>=coreConservative)
      return "Opportunity Democrat";
  if (disaffectedDemocrat>=solidLiberal&&disaffectedDemocrat>=opportunityDemocrat&&disaffectedDemocrat>=devoutAndDiverse&&disaffectedDemocrat>=newEraEnterpriser&&disaffectedDemocrat>=marketSkepticRepublican&&disaffectedDemocrat>=countryFirstConservative&&disaffectedDemocrat>=coreConservative)
      return "Disaffected Democrat";
  if (devoutAndDiverse>=solidLiberal&&devoutAndDiverse>=opportunityDemocrat&&devoutAndDiverse>=disaffectedDemocrat&&devoutAndDiverse>=newEraEnterpriser&&devoutAndDiverse>=marketSkepticRepublican&&devoutAndDiverse>=countryFirstConservative&&devoutAndDiverse>=coreConservative)
      return "Devout and Diverse";
  return "N/A";
// Apple 0
// Banana 1

}
