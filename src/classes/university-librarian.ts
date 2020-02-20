import * as Interfaces from "../interfaces";
import {logger, sealed, writable} from "../decorators";

@sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log(`Assisting Faculty`);
    }

    @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}

export {UniversityLibrarian};
