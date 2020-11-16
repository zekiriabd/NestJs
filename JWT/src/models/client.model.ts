import { DocumentModel } from './document.model';

export class ClientModel {
    public clientId: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
}

// tslint:disable-next-line: max-classes-per-file
export class ClientLogin {
    public email: string;
    public password: string;
}

// tslint:disable-next-line: max-classes-per-file
export class ClientSession {
    public clientToken: string;
    public clientId: number;
}

// tslint:disable-next-line: max-classes-per-file
export class ClientWithDocDto extends ClientModel {
    constructor(
      public documents: DocumentModel[] = [],
    ) {
        super();
    }
}