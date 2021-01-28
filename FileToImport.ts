export class exampleClass{
    myattribute: number;

    constructor(myattribute: number){
        this.myattribute = myattribute
    }

    getMyattribute(): number {
        return this.myattribute
    }

    setMyattribute(myattribute: number) {
        this.myattribute = myattribute
    }
}