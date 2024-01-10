export interface HomeModel {
    data: {
        id: number;
        attributes: Attribute[];
    }
}

export interface Attribute {
    title: any;
    description: any;
    numOfProject: number;
    introduce: any;
    projects: Project[];
}

export interface Project {
    data: {
        id: number;
        attributes: {
            name: any;
            description: any;
            numOfProcess: number;
        }
    }
}