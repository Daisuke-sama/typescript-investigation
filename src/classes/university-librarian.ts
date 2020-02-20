import * as Interfaces from "../interfaces";
import {logger, sealed} from "../decorators";

@sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

export {UniversityLibrarian};
