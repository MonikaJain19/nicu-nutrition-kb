export class BabyDetailObj {
      babydetailid: number;
       activestatus: boolean;
       admissionstatus: boolean;
       typeofadmission: string;
       inoutPatientStatus: string;
       actualgestationdays: number;
       actualgestationweek: number;
       admissionBp: string;
       admissionPulserate: string;
       admissionRr: string;
       admissionSpo2: string;
       admissionTemp: string;
       admittingdoctor: string;
       babyname: string;
       cry: string;
       timeofcry: string;
       birthheadcircumference: string;
       admissionHeadCircumference: string;
       birthinjuries: string;
       birthinjuriesComments:string;
       birthlength: string;
       admissionLength: string;
       birthmarks: string;
       birthmarksComments:string;
       birthweight: number;
       admissionWeight: number;
       bloodgroup: string;
       comments:string;
       creationtime: number;
       doaObj: number;
       doaStr: string;
       dateofadmission: string;
       timeofadmission: string;
       dobObj: number;
       dobStr: string;
       dateofbirth: string;
       dayoflife: string;
       dayoflifetype : boolean;
       timeofbirth: string;
       dischargeddate: Date;
       dischargestatus:string;
       examinationid: string;
       gender: string;
       gestationdaysbylmp: number;
       gestationweekbylmp: number;
       loggeduser: string;
       modificationtime: number;
       nicuroomno: string;
       nicubedno: string;
       niculevelno:string;
       criticalitylevel:string;
       refferedfrom:string;
       refferedby:string;
       refferedNumber:string;
       modeoftransportation:string;
       sourceoftransportation:string;
       reasonofreference : string;
       courseinrefferinghospital:string;
       transportationalongwith: string;
       uhid: string;
       episodeid: string;
       consciousness: string;
       weight_galevel: string;
       admissionWeightGAlevel: string;
       length_galevel:string;
       admissionLengthGaLevel:string;
       hc_galevel: string;
       admissionHCgaLevel: string;
       weight_centile: number;
       admissionWeightCentile: number;
       length_centile:string;
       admissionLengthCentile: string;
       hc_centile: string;
       admissionHCcentile: string;
       ponderal_index: number;
       central_temp: string;
       peripheral_temp: string;
       hr: string;
       rr: string;
       spo2: string;
       bp_type: string;
       bp_systolic: string;
       bp_diastolic: string;
       bp_mean: string;
       bp_lll: string;
       bp_rll: string;
       bp_lul: string;
       bp_rul: string;
       crt: string;
       downesscoreid: string;
       isassessmentsubmit: boolean;
       babyType: string;
       babyNumber: string;
       isreadmitted: boolean;
       branchname: string;
       constructor(){
         this.doaStr = "";
         this.dobStr = "";
       }
}
