export class ProduitImmobilierDTO {



    public static fromJson(json: object): ProduitImmobilierDTO {
        return new ProduitImmobilierDTO(
            json['id'],
            json['type'],
            json['telephone'],
            json['description'],
            json['nbrLots'],
            json['isParking'],
            json['isBox'],
            json['isCave'],
            json['isBalcon'],
            json['isTerasse'],
            json['isLoggia'],
            json['isSurfaceAnnexe'],
            json['isDuplex'],
            json['isTriplex'],
            json['isLift'],
            json['isGardien'],
            json['isCheminee'],
            json['isInterphone'],
            json['isDigicode'],
            json['orientation'],
            json['dpe'],
            json['etage'],
            json['nbrEtage'],
            json['nbrPiece'],
            json['nbrChambre'],
            json['nbrSalleDeBain'],
            json['nbrSalleDeDouche'],
            json['nbrToiletteSepare'],
            json['nbrToiletteNonSepare'],
            json['chargesCoprop'],
            json['taxeFonciaire'],
            json['dateConstruction'],
            json['dateMiseEnLigne'],
            json['adresse'],
            json['codePostal'],
            json['ville'],
            json['zone'],
            json['prix'],
            json['surfaceHabitable'],
            json['surfaceLoiQuarez'],
            json['surfaceBalcon'],
            json['surfaceTerrasse'],
            json['surfaceCave'],
            json['surfaceLogias'],
            json['autreSurfaceAnnexe'],
            json['loyerMaximum'],
            json['venteLocation'],
            json['collectionSize']);
    }
 
    constructor(
        public id: number,
        public type: string,
        public telephone: string,
        public description: string,
        public nbrLots: number,
        public isParking: number,
        public isBox: number,
        public isCave: number,
        public isBalcon: number,
        public isTerasse: number,
        public isLoggia: number,
        public isSurfaceAnnexe: number,
        public isDuplex: number,
        public isTriplex: number,
        public isLift: number,
        public isGardien: number,
        public isCheminee: number,
        public isInterphone: number,
        public isDigicode: number,
        public orientation: string,
        public dpe: string,
        public etage: number,
        public nbrEtage: number,
        public nbrPiece: number,
        public nbrChambre: number,
        public nbrSalleDeBain: number,
        public nbrSalleDeDouche: number,
        public nbrToiletteSepare: number,
        public nbrToiletteNonSepare: number,
        public chargesCoprop: number,
        public taxeFonciaire: string,
        public dateConstruction: number,
        public dateMiseEnLigne: number,
        public adresse: string,
        public codePostal: string,
        public ville: string,
        public zone: string,
        public prix: number,
        public surfaceHabitable: number,
        public surfaceLoiQuarez: number,
        public surfaceBalcon: number,
        public surfaceTerrasse: number,
        public surfaceCave: number,
        public surfaceLoggia: number,
        public autreSurfaceAnnexe: number,
        public loyerMaximum: number,
        public venteLocation: string,
        public collectionSize: number) {
    }
}
