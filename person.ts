class Person {
    
    constructor(
        protected firstName: string,
        protected lastName: string, 
        protected age: number) { }

        public getFullName (){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(
        private id: number,
        private middlename :string,
        private city: string,
        firstName: string,
        lastName: string,
        age: number
    ){
        super(firstName, lastName, age);
    }

    getFullName =() => {
        const nameSegment :Array<string> =super.getFullName().split(" ");
        nameSegment.splice(1,0, this.middlename);
        return `${nameSegment.join(" ")}`;
    }

    get employeeId(): number{
        return this.id;
    }

    set employeeId(id: number){
        this.id  = id;
    }

}

const person : Person = new Employee( 5, 'kumar','pune','Mahendra', 'sahu', 22);
console.log(person.getFullName());
console.log(person.employeeId);
