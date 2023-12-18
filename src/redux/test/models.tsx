export interface AttributeModel {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
    data: Attribute[];
    succeeded: string;
    errors: string;
    message: string;
}
 
export interface Attribute {
    attributeId: any;
    name: string;
    description: string;
    displayType: string;
    active: number;
    status: number;
    createBy: string;
    createAt: any;
    lastModifiedBy: string;
    lastModifiedDate: any;
}