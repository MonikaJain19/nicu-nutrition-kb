//import { NicuRoom } from './nicuRoom';
//import { NicuLevel } from './nicuLevel';
//import { ResidentDoctor } from './ResidentDoctor';
//import { Gestation } from './gestation';
//import { History } from './history';
//import { HeadToToe } from './headToToe';
import { Examination } from './examination';
//import { SignificantMaterial } from './significantMaterial';
import { ReasonOfAdmission } from './reasonOfAdmission';
//import { StateList } from './StateList';
//import { History2 } from './historyTwo';
export class DropDownObject {
        admissionStatus?: any;
        criticalities?: any;
        nicuRooms: Examination[];
        nicuLevels: Examination[];
        typeOfAdmissions : any;
        bloodGroups : any;
        modeOfDeliverys : any;
        residentDoctors: Examination[];
        significantMaterials: Examination[];
        histories: Examination[];
        headToToes: Examination[];
        examinations: Examination[];
        gestation: Examination[];
        hours: string[];
        minutes: string[];
        seconds: string[];
        reasonOfAdmission: ReasonOfAdmission[];
        stateList: any;
        districtList?: any;
        addressList?: any;
        historys: Examination[];
    }
